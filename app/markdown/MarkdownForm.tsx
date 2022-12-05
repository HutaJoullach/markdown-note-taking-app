"use client";

import { FormEvent, use, useRef, useState } from "react";
import { MarkdownData, Markdown } from "../../typings";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useMarkdownStore, useSettingsStore } from "../store";
import { fetchMarkdowns, fetchMarkdown } from "../../utils/fetchMarkdown";

import { updateMarkdown } from "../../utils/postMarkdown";

type MarkdownFormProps = {
  params?: {
    markdownId?: string;
  };
};

export default function MarkdownForm({ params }: MarkdownFormProps) {
  const [editing, setEditing] = useState<boolean>(true);

  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const setMarkdown = useMarkdownStore((state) => state.setMarkdown);
  const markdown = useMarkdownStore((state) => state.markdown);

  const handleChange = (e: FormEvent) => {
    setMarkdown({
      id: params?.markdownId,
      userId: 1,
      title: titleRef.current!.value,
      content: markdownRef.current!.value,
    });
  };

  const setParams = useMarkdownStore((state) => state.setParams);
  const currentParams = useMarkdownStore((state) => state.params);

  async function updateMarkdown() {
    const res = await fetch("http://localhost:3000/api/markdown");
    return res.json();
  }
  const dataPromise = updateMarkdown();

  if (params?.markdownId !== currentParams) {
    const data = use(dataPromise);
    setParams(params?.markdownId);
  } else {
    setParams(params?.markdownId);
  }

  return (
    <>
      {editing ? (
        <div className="markdownFormWrapper w-full">
          <form className="markdownForm">
            <div className="markdownWrapper input-group input-group-outline">
              <div className="markdownTitle flex items-center justify-center bg-slate-900">
                <input
                  className="markdownTitleInput appearance-none w-10/12 text-3xl font-medium bg-slate-900 leading-tight focus:outline-none"
                  ref={titleRef}
                  id=""
                  type="text"
                  placeholder="Untitled"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="markdownTextBody flex items-center justify-center bg-slate-900">
                <textarea
                  className="markdownTextarea w-10/12 bg-slate-900 form-control focus:outline-none"
                  ref={markdownRef}
                  rows={15}
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>hey</div>
        // <ReactMarkdown>{trimmedMarkdown[0].body}</ReactMarkdown>
      )}
    </>
  );
}
