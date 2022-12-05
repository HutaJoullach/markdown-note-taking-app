import { Markdown } from "../../../typings";
import { notFound } from "next/navigation";
import { fetchMarkdowns, fetchMarkdown } from "../../../utils/fetchMarkdown";
import LeftSidebar from "../../LeftSidebar";
import RightSidebar from "../../RightSidebar";
import Sidenav from "../../Sidenav";
import MarkdownEdit from "../MarkdownEdit";

export const dynamicParams = true;

type MarkdownPageProps = {
  params?: {
    markdownId?: string;
  };
};

export default async function MarkdownPage({ params }: MarkdownPageProps) {
  const markdown = await fetchMarkdown(params?.markdownId!);

  if (!markdown.id) return notFound();

  return (
    // <div className="p-10 bg-gray-900 border-2 m-2 shadow-lg">
    //   <p>#{markdown.id}</p>
    //   <p>{markdown.title}</p>
    //   <p>{markdown.body}</p>
    //   <p className="mt-5 text-right">User: {markdown.userId}</p>
    // </div>
    <div className="home">
      <Sidenav />
      <div className="homepageWrapper">
        <LeftSidebar />
        {/* @ts-ignore */}
        <MarkdownEdit params={params} />
        <RightSidebar />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts/");
  const markdowns: Markdown[] = await res.json();

  const trimmedMarkdowns = markdowns.splice(0, 10);

  return trimmedMarkdowns.map((markdown) => ({
    markdownId: markdown.id.toString(),
  }));
}
