import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Markdown } from "../../typings"

const fetchMarkdowns = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const markdowns: Markdown[] = await res.json();
  return markdowns;
};

export default async function MarkdownEdit() {
  const markdowns = await fetchMarkdowns()

  const trimmedMarkdown = markdowns.splice(0, 10);

  return (
    <div>
      <ReactMarkdown>{trimmedMarkdown[0].body}</ReactMarkdown>

      {/* {markdowns.map(markdown => (
        <p key={markdown.id}>
          <Link href={`/markdown/${markdown.id}`}>Markdown: {markdown.id}</Link>
        </p>
      ))} */}
    </div>
  )
}
