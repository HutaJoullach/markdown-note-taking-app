import Link from "next/link";
import MarkdownForm from "./MarkdownForm";
import { fetchMarkdowns, fetchMarkdown } from "../../utils/fetchMarkdown";
import { MarkdownData, Markdown } from "../../typings";
import { PrismaClient } from "@prisma/client";

export default async function MarkdownEdit() {
  // const markdowns = await fetchMarkdowns()
  // const trimmedMarkdown = markdowns.splice(0, 10);

  // const data = await fetchMarkdown('1')

  // const onCreateMarkdown = async (data: MarkdownData) => {
  //   // call API to insert new markdown
  // };

  const prisma = new PrismaClient();

  let markdownData: Markdown;
  const updateMarkdown = async () => {
    try {
      const updatedMarkdown = await prisma.markdown.update({
        id: 1,
        userId: 1,
        title: markdownData.title,
        content: markdownData.content,
      });
    } catch (err) {
      console.log(err);
    }
    await prisma.$disconnect();
  };

  return (
    <div className="markdownEdit">
      <MarkdownForm markdownChange={markdownData!} />

      {/* {markdowns.map(markdown => (
        <p key={markdown.id}>
          <Link href={`/markdown/${markdown.id}`}>Markdown: {markdown.id}</Link>
        </p>
      ))} */}
    </div>
  );
}
