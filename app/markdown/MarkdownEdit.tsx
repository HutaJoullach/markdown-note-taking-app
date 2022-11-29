import Link from "next/link";
import { Markdown } from "../../typings"

const fetchMarkdowns = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const markdowns: Markdown[] = await res.json();
  return markdowns;
};

export default async function MarkdownEdit() {
  const markdowns = await fetchMarkdowns()

  return (
    <div>
      {markdowns.map(markdown => (
        <p key={markdown.id}>
          <Link href={`/markdown/${markdown.id}`}>Markdown: {markdown.id}</Link>
        </p>
      ))}
    </div>
  )
}
