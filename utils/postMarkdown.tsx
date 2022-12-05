// import "server-only";
import { Markdown } from "../typings";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type updateMarkdownProps = {
  params: {
    markdownId: string | string[] | undefined;
  };
  markdownData: Markdown;
};

export const updateMarkdown = async ({
  params,
  markdownData,
}: updateMarkdownProps) => {
  if (params === undefined || params === null) return;

  try {
    const updatedMarkdown = await prisma.markdown.update({
      data: {
        ...markdownData,
      },
      where: {
        id: parseInt(params.markdownId),
      },
    });
    console.log(updatedMarkdown);
  } catch (err) {
    console.log(err);
  }
  await prisma.$disconnect();
};
