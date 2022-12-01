export type Markdown = {
  id: number;
  userId: number;
  title: string;
  body: string;
  completed: boolean;
};

// export type NewMarkdown = {
//   id: number;
// } & MarkdownData

export type MarkdownData = {
  userId: number;
  title: string;
  body: string;
  completed: boolean;
};

export type Tag = {
  id: number;
  label: string;
};