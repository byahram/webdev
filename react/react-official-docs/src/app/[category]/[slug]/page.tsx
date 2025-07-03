import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { notFound } from "next/navigation";
import NavigationButtons from "@/components/layout/NavigationButtons";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default async function PostDetail({ params }: Props) {
  const { category, slug } = params;

  let h2Count = 0;
  const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 className="text-4xl font-bold mb-6 border-b-2 pb-2" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
      h2Count++;
      const isFirst = h2Count === 1;
      return (
        <h2
          className={`text-2xl font-semibold :ch ${
            isFirst ? "mt-5" : "mt-10"
          } mb-3`}
          {...props}
        />
      );
    },
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className="text-xl font-bold mt-6 mb-3" {...props} />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className="bg-neutral-600 text-white p-4 rounded-md overflow-x-auto my-4"
        {...props}
      />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
      <code
        className="bg-gray-100 text-red-600 px-1 py-0.5 rounded"
        {...props}
      />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a className="text-blue-600 underline" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className="flex flex-col gap-2.5 ml-10 list-disc" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className="flex flex-col gap-2.5 ml-10 list-decimal" {...props} />
    ),
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
      <table
        className="table-auto border-collapse border border-gray-300 my-6 w-full text-left"
        {...props}
      />
    ),
    thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead className="bg-gray-100" {...props} />
    ),
    tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <tbody {...props} />
    ),
    tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr className="border-b border-gray-200" {...props} />
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className="px-4 py-2 font-semibold border border-gray-300"
        {...props}
      />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td className="px-4 py-2 border border-gray-300" {...props} />
    ),
  };

  const filePath = path.join(
    process.cwd(),
    "src",
    "posts",
    category,
    `${slug}.mdx`
  );

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContent);

    const compiled = await compileMDX({
      source: content,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      },
      components,
    });

    return (
      <>
        <article className="prose min-h-screen max-w-4xl justify-center p-4 bg-white text-black mx-auto my-20">
          <NavigationButtons />
          {compiled.content}
        </article>
      </>
    );
  } catch (error) {
    console.error("❌ MDX 파싱 실패:", error);
    notFound();
  }
}
