import Blockquote from "@tiptap/extension-blockquote";
import Highlight from "@tiptap/extension-highlight";
import { Image } from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";

export const TiptapExtensions = [
  Underline,
  Image,
  Link.configure({
    openOnClick: false,
  }),
  Highlight,
  Superscript,
  Subscript,
  Blockquote,
  StarterKit.configure({
    bulletList: {
      HTMLAttributes: {
        class: "list-disc ml-3",
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal ml-3",
      },
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];
