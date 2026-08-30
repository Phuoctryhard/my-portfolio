import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { getAllSlugs, getPostSource } from "@/lib/blog";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  try {
    const { meta } = getPostSource(params.slug);
    return { title: meta.title, description: meta.description };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let content: string;
  let meta: { title: string; date: string; category: string; readTime: string };

  try {
    const source = getPostSource(params.slug);
    content = source.content;
    meta = source.meta;
  } catch {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 lg:px-12 py-24">
      <Link href="/blog" className="text-sm text-slate-400 hover:text-[#a855f7] transition-colors">
        ← Back to Blog
      </Link>
      <div className="mt-6 flex flex-col gap-2">
        <span className="section-label">{meta.category}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-white">{meta.title}</h1>
        <div className="flex items-center gap-3 text-slate-500 text-xs">
          <span>{meta.date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <span>{meta.readTime}</span>
        </div>
      </div>
      <article className="mdx-content mt-10">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
