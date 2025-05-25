"use client";

import { Toggle } from "@radix-ui/react-toggle";
import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Underline,
  Undo2,
  Redo2,
  Quote,
  LinkIcon,
  ImageIcon,
} from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type MenuBarProps = {
  editor: Editor | null;
};
type Level = 1 | 2 | 3 | 4 | 5 | 6;
const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return null;

  const headingLevels = [
    { label: "預設", value: "paragraph" },
    { label: "H1", value: "1" },
    { label: "H2", value: "2" },
    { label: "H3", value: "3" },
    { label: "H4", value: "4" },
    { label: "H5", value: "5" },
  ];

  const currentHeading = () => {
    for (let i = 1; i <= 5; i++) {
      if (editor.isActive("heading", { level: i })) return `${i}`;
    }
    return "paragraph";
  };

  const handleHeadingChange = (value: string) => {
    if (value === "paragraph") {
      editor.chain().focus().setParagraph().run();
    } else {
      editor
        .chain()
        .focus()
        .toggleHeading({ level: Number(value) as Level })
        .run();
    }
  };

  const options = [
    {
      icon: <Undo2 className="size-4" />,
      onClick: () => editor.chain().focus().undo().run(),
      pressed: false,
      disabled: !editor.can().undo(),
      title: "復原 (Undo)",
    },
    {
      icon: <Redo2 className="size-4" />,
      onClick: () => editor.chain().focus().redo().run(),
      pressed: false,
      disabled: !editor.can().redo(),
      title: "重做 (Redo)",
    },
    {
      icon: <Quote className="size-4" />,
      title: "區塊(Blockquote )",
      onClick: () => {
        if (editor.isActive("blockquote")) {
          editor.chain().focus().lift("blockquote").run(); // 解除 blockquote
          editor.chain().focus().setParagraph().run(); // 強制轉回 paragraph
        } else {
          editor.chain().focus().toggleBlockquote().run(); // 加入 blockquote
        }
      },
      pressed: editor.isActive("blockquote"),
    },
    {
      icon: <Underline className="size-4" />, // Underline
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      pressed: editor.isActive("underline"),
      title: "底線 (Underline)",
    },
    {
      icon: <Bold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
      title: "粗體 (Bold)",
    },
    {
      icon: <Italic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
      title: "斜體 (Italic)",
    },
    {
      icon: <Strikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
      title: "斜體 (Italic)",
    },
    {
      icon: <AlignLeft className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
      title: "靠左對齊",
    },
    {
      icon: <AlignCenter className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
      title: "置中對齊",
    },
    {
      icon: <AlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
      title: "置右對齊",
    },
    {
      icon: <List className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
      title: "無序清單 (Bullet List)",
    },
    {
      icon: <ListOrdered className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList"),
      title: "有序清單 (Ordered List)",
    },
    {
      icon: <ImageIcon className="size-4" />,
      label: "圖片",
      onClick: () => {
        const url = window.prompt("請輸入圖片網址");
        if (url) {
          editor.chain().focus().setImage({ src: url }).run();
        }
      },
      pressed: false,
      title: "圖片",
    },

    {
      icon: "x²",
      title: "上標",
      onClick: () => editor.chain().focus().toggleSuperscript().run(),
      pressed: editor.isActive("superscript"),
    },
    {
      icon: "x₂",
      title: "下標",
      onClick: () => editor.chain().focus().toggleSubscript().run(),
      pressed: editor.isActive("subscript"),
    },
    {
      icon: <LinkIcon className="size-4" />,
      onClick: () => {
        const previousUrl = editor.getAttributes("link").href;
        const url = window.prompt("請輸入網址", previousUrl || "https://");

        if (url === null) return;
        if (url === "") {
          editor.chain().focus().extendMarkRange("link").unsetLink().run();
          return;
        }

        editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
      },
      pressed: editor.isActive("link"),
      disabled: !editor.can().chain().focus().setLink({ href: "https://..." }).run(),
    },
  ];

  return (
    <div className="bg-white-pure flex flex-wrap items-center gap-2 rounded-md border p-2">
      <Select value={currentHeading()} onValueChange={handleHeadingChange}>
        <SelectTrigger className="h-8 w-[100px] px-2 text-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {headingLevels.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {options.map((option, i) => (
        <Toggle
          key={i}
          title={option.title}
          pressed={option.pressed}
          onPressedChange={option.onClick}
          disabled={option.disabled}
          className={cn(
            "h-8 px-2 text-sm",
            option.pressed && "text-black-main bg-red-100",
            option.disabled ? "cursor-not-allowed opacity-50" : "hover:text-primary"
          )}
        >
          {option.icon}
        </Toggle>
      ))}
    </div>
  );
};

export default MenuBar;
