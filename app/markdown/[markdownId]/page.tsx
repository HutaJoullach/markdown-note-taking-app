import { Markdown } from "../../../typings";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type PageProps = {
  params: {
    markdownId: string;
  };
};

const fetchMarkdown = async (markdownId: string) => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${markdownId}`, { cache: 'force-cache' });

  const markdown: Markdown = await res.json();
  return markdown;
};

export default async function MarkdownPage({ params: { markdownId } }: PageProps) {
  const markdown = await fetchMarkdown(markdownId)

  if (!markdown.id) return notFound()

  return (
    <div className="p-10 bg-gray-900 border-2 m-2 shadow-lg">
      <p>#{markdown.id}</p>
      <p>{markdown.title}</p>
      <p>{markdown.body}</p>
      <p className="mt-5 text-right">User: {markdown.userId}</p>
    </div>
  )
}

export async function generateStaticParams() {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts/');
  const markdowns: Markdown[] = await res.json();

  const trimmedMarkdowns = markdowns.splice(0, 10);

  return trimmedMarkdowns.map(markdown => ({
    markdownId: markdown.id.toString()
  }))
}