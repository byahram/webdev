import Accordion from "@/components/layout/Accordion";
import { getAllPosts, groupPostsByCategory } from "@/utils/posts";

export default function Page() {
  const posts = getAllPosts();
  const sections = groupPostsByCategory(posts);

  return (
    <main className="min-h-screen max-w-4xl flex justify-center p-4 bg-white text-black mx-auto mt-20">
      <Accordion sections={sections} />
    </main>
  );
}
