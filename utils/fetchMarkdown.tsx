import 'server-only';
import { Markdown } from "../typings";

export const fetchMarkdowns = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/posts');
  const markdowns: Markdown[] = await res.json();
  return markdowns;
};

export const fetchMarkdown = async (markdownId: string) => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${markdownId}`, { cache: 'force-cache' });

  // console.log(process.env.API_KEY);
  
  const markdown: Markdown = await res.json();
  return markdown;
};
