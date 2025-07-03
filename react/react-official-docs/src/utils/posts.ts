import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostMeta {
  title: string;
  date: string;
  tags?: string[];
  description?: string;
  slug: string;
  category: string;
}

const postsDirectory = path.join(process.cwd(), "src", "posts");

// 모든 게시물 가져오기
export function getAllPosts(): BlogPostMeta[] {
  const categories = fs.readdirSync(postsDirectory);

  const posts = categories.flatMap((category) => {
    const dir = path.join(postsDirectory, category);
    const files = fs.readdirSync(dir);

    return files.map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      const slug = filename.replace(/\.mdx$/, "");

      return {
        ...(data as Omit<BlogPostMeta, "slug" | "category">),
        slug,
        category,
      };
    });
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

type Section = {
  title: string;
  content: {
    title: string;
    href: string;
  }[];
};

export function groupPostsByCategory(
  posts: Awaited<ReturnType<typeof getAllPosts>>
) {
  const grouped: Record<string, Section["content"]> = {};

  posts.forEach((post) => {
    if (!grouped[post.category]) {
      grouped[post.category] = [];
    }

    grouped[post.category].push({
      title: post.title,
      href: `/${post.category}/${post.slug}`,
    });
  });

  return Object.entries(grouped)
    .map(([category, content]) => ({
      title: category,
      content: content.sort((a, b) => a.title.localeCompare(b.title)), // 제목 기준 정렬
    }))
    .sort((a, b) => a.title.localeCompare(b.title)); // 카테고리 이름 기준 정렬
}
