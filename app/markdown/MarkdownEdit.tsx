import Link from "next/link";
import MarkdownForm from "./MarkdownForm";
import { fetchMarkdowns, fetchMarkdown } from "../../utils/fetchMarkdown";
import { MarkdownData, Markdown } from "../../typings";

type MarkdownEditProps = {
  params?: {
    markdownId?: string;
  };
};

export default async function MarkdownEdit({ params }: MarkdownEditProps) {
  // const markdowns = await fetchMarkdowns()
  // const trimmedMarkdown = markdowns.splice(0, 10);

  // const data = await fetchMarkdown('1')

  return (
    <div className="markdownEdit">
      {params ? (
        <MarkdownForm params={params} />
      ) : (
        <div className="homepageNoFile bg-slate-900">No file is open</div>
      )}

      {/* {markdowns.map(markdown => (
        <p key={markdown.id}>
          <Link href={`/markdown/${markdown.id}`}>Markdown: {markdown.id}</Link>
        </p>
      ))} */}
    </div>
  );
}
