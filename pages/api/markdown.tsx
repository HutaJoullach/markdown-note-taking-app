import type { NextApiRequest, NextApiResponse } from "next";
import { Markdown } from "../../typings";
import { updateMarkdown } from "../../utils/postMarkdown";
import { useMarkdownStore } from "../../app/store";

const markdown = useMarkdownStore((state) => state.markdown);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Markdown>
) {
  const markdownId = req.query.params;
  const params = {
    markdownId: markdownId,
  };
  if (params === undefined || markdown === undefined) return;
  const result = await updateMarkdown({ params, markdown });
  res.status(200).json(result);
}
