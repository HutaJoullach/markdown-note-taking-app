import Link from "next/link";
import MarkdownForm from "./MarkdownForm";
import { fetchMarkdowns, fetchMarkdown } from "../../utils/fetchMarkdown";
import { MarkdownData } from "../../typings";

export default async function MarkdownEdit() {
  // const markdowns = await fetchMarkdowns()
  // const trimmedMarkdown = markdowns.splice(0, 10);

  // const data = await fetchMarkdown('1')

  const onCreateMarkdown = async (data: MarkdownData) => {
    // call API to insert new markdown
  };

  return (
    <div className="markdownEdit">
      <MarkdownForm onMarkdownChange={onCreateMarkdown} />

      {/* {markdowns.map(markdown => (
        <p key={markdown.id}>
          <Link href={`/markdown/${markdown.id}`}>Markdown: {markdown.id}</Link>
        </p>
      ))} */}
    </div>
  )
}
