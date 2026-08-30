import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description: "Bài viết và case study từ Ngo Dinh Phuoc.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">Blog</h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass rounded-2xl p-6 flex flex-col gap-2 hover:border-[#a855f7]/40 transition-colors"
          >
            <span className="section-label">{post.category}</span>
            <h2 className="text-xl font-semibold text-white">{post.title}</h2>
            <p className="text-slate-400 text-sm">{post.description}</p>
            <div className="flex items-center gap-3 text-slate-500 text-xs pt-2">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
