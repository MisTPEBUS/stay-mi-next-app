"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import React, { useEffect } from "react";

import MenuBar from "./MenuBar";
import { TiptapExtensions } from "./extensions";

type TipTapEditorProps = {
  content: string;
  onChange: (content: string) => void;
};

const TipTapEditor = ({ content, onChange }: TipTapEditorProps) => {
  const editor = useEditor({
    extensions: TiptapExtensions,
    content: content,
    editorProps: {
      attributes: {
        class: "min-h-[156px] border bg-slate-50 py-2 px-3 ",
      },
    },
    onUpdate: ({ editor }) => {
      // console.log(editor.getHTML());
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <div className="relative">
      <div className="sticky">
        <MenuBar editor={editor} />
      </div>
      <EditorContent editor={editor} className="editor-box" />
    </div>
  );
};
export default TipTapEditor;
