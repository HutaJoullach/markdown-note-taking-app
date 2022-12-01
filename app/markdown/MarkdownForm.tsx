'use client';

import { FormEvent, useRef, useState } from "react"
import { MarkdownData, Tag } from "../../typings";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type MarkdownFormProps = {
  onMarkdownChange: (data: MarkdownData) => void
}

export default function MarkdownForm({ onMarkdownChange }: MarkdownFormProps) {
  const [editing, setEditing] = useState<boolean>(true);

  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: FormEvent) => {
    onMarkdownChange({
      userId: 1,
      title: titleRef.current!.value,
      body: markdownRef.current!.value,
      completed: false,
    });
  }

  return (
    <>
      {editing ? (
        <div className="markdownFormWrapper w-full">
          <form onChange={handleChange} className="markdownForm">
            <div className="markdownWrapper input-group input-group-outline">
              <div className="markdownTitle flex items-center justify-center bg-slate-900">
                <input className="markdownTitleInput appearance-none w-10/12 text-3xl font-medium bg-slate-900 leading-tight focus:outline-none" ref={titleRef} id="" type="text" placeholder="Untitled" required />
              </div>
              <div className="markdownTextBody flex items-center justify-center bg-slate-900">
                <textarea className="markdownTextarea w-10/12 bg-slate-900 form-control focus:outline-none" ref={markdownRef} rows={15} required></textarea>
              </div>
            </div>
          </form>
        </div>  
      ) : (
        // <ReactMarkdown>{trimmedMarkdown[0].body}</ReactMarkdown>
      )}
    </>
  )
}
