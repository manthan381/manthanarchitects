"use client";

import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { FontSize, TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
    AlignCenter,
    AlignJustify,
    AlignLeft,
    AlignRight,
    Heading1,
    Heading2,
    Heading3,
    ImagePlus,
    Link2,
    List,
    ListOrdered,
    Quote,
    Redo2,
    RemoveFormatting,
    Undo2,
} from "lucide-react";
import { ChangeEvent, useEffect, useRef } from "react";

const TEXT_COLORS = [
  "#111827",
  "#dc2626",
  "#2563eb",
  "#059669",
  "#9333ea",
  "#ea580c",
];

const FONT_SIZES = ["14px", "16px", "18px", "20px", "24px", "30px", "36px"];

const HIGHLIGHT_COLORS = [
  "#fef08a",
  "#fde68a",
  "#bfdbfe",
  "#bbf7d0",
  "#fecaca",
  "#e9d5ff",
];

function toolbarBtnClasses(isActive = false) {
  return `rounded px-2 py-1 text-sm transition ${
    isActive ? "bg-white text-black shadow-sm" : "hover:bg-white/60"
  }`;
}

type RichTextEditorProps = {
  value: string;
  onChange: (nextValue: string) => void;
};

export default function RichTextEditor({
  value,
  onChange,
}: Readonly<RichTextEditorProps>) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Image,
      TextStyle,
      FontSize,
      Color,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          "tiptap-editor min-h-72 rounded-b-lg border border-t-0 px-4 py-3 focus:outline-none",
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      onChange(currentEditor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) {
      return;
    }

    const current = editor.getHTML();
    if (value !== current) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [editor, value]);

  if (!editor) {
    return null;
  }

  const currentEditor = editor;

  async function handleInlineImageUpload(file: File) {
    const body = new FormData();
    body.set("file", file);

    const response = await fetch("/api/admin/upload-image", {
      method: "POST",
      body,
    });

    const result = (await response.json()) as {
      success: boolean;
      url?: string;
    };

    if (!response.ok || !result.success || !result.url) {
      return;
    }

    currentEditor.chain().focus().setImage({ src: result.url }).run();
  }

  async function onPickEditorImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    await handleInlineImageUpload(file);
    event.target.value = "";
  }

  function setLink() {
    const previousUrl = currentEditor.getAttributes("link").href as
      | string
      | undefined;
    const nextUrl = globalThis.prompt("Enter URL", previousUrl ?? "https://");

    if (nextUrl === null) {
      return;
    }

    if (nextUrl.trim() === "") {
      currentEditor
        .chain()
        .focus()
        .extendMarkRange("link")
        .unsetLink()
        .run();
      return;
    }

    currentEditor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: nextUrl })
      .run();
  }

  return (
    <div className="md:col-span-2 relative">
      <div className="sticky top-16 z-20 flex flex-wrap items-center gap-1 rounded-t-lg border border-b-0 bg-[#e8d9bb] p-2 shadow-sm">
        <select
          value={currentEditor.getAttributes("textStyle").fontSize || "16px"}
          onChange={(event) =>
            currentEditor.chain().focus().setFontSize(event.target.value).run()
          }
          className="h-8 rounded border border-gray-300 bg-white px-2 text-xs"
          title="Font size"
        >
          {FONT_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => currentEditor.chain().focus().unsetFontSize().run()}
          className="rounded border px-2 py-1 text-xs bg-white/60"
        >
          Reset size
        </button>
        <span className="mx-1 h-6 w-px bg-gray-400" />
        <button type="button" onClick={() => currentEditor.chain().focus().toggleBold().run()} className={`${toolbarBtnClasses(currentEditor.isActive("bold"))} font-semibold`}>B</button>
        <button type="button" onClick={() => currentEditor.chain().focus().toggleItalic().run()} className={`${toolbarBtnClasses(currentEditor.isActive("italic"))} italic`}>I</button>
        <button type="button" onClick={() => currentEditor.chain().focus().toggleUnderline().run()} className={`${toolbarBtnClasses(currentEditor.isActive("underline"))} underline`}>U</button>
        <button type="button" onClick={() => currentEditor.chain().focus().toggleStrike().run()} className={`${toolbarBtnClasses(currentEditor.isActive("strike"))} line-through`}>S</button>
        <span className="mx-1 h-6 w-px bg-gray-400" />
        <button type="button" onClick={() => currentEditor.chain().focus().toggleHeading({ level: 1 }).run()} className={toolbarBtnClasses(currentEditor.isActive("heading", { level: 1 }))}><Heading1 className="h-4 w-4" /></button>
        <button type="button" onClick={() => currentEditor.chain().focus().toggleHeading({ level: 2 }).run()} className={toolbarBtnClasses(currentEditor.isActive("heading", { level: 2 }))}><Heading2 className="h-4 w-4" /></button>
        <button type="button" onClick={() => currentEditor.chain().focus().toggleHeading({ level: 3 }).run()} className={toolbarBtnClasses(currentEditor.isActive("heading", { level: 3 }))}><Heading3 className="h-4 w-4" /></button>
        <span className="mx-1 h-6 w-px bg-gray-400" />
        <button type="button" onClick={() => currentEditor.chain().focus().toggleBulletList().run()} className={toolbarBtnClasses(currentEditor.isActive("bulletList"))}><List className="h-4 w-4" /></button>
        <button type="button" onClick={() => currentEditor.chain().focus().toggleOrderedList().run()} className={toolbarBtnClasses(currentEditor.isActive("orderedList"))}><ListOrdered className="h-4 w-4" /></button>
        <button type="button" onClick={() => currentEditor.chain().focus().toggleBlockquote().run()} className={toolbarBtnClasses(currentEditor.isActive("blockquote"))}><Quote className="h-4 w-4" /></button>
        <span className="mx-1 h-6 w-px bg-gray-400" />
        <button type="button" onClick={() => currentEditor.chain().focus().setTextAlign("left").run()} className={toolbarBtnClasses(currentEditor.isActive({ textAlign: "left" }))}><AlignLeft className="h-4 w-4" /></button>
        <button type="button" onClick={() => currentEditor.chain().focus().setTextAlign("center").run()} className={toolbarBtnClasses(currentEditor.isActive({ textAlign: "center" }))}><AlignCenter className="h-4 w-4" /></button>
        <button type="button" onClick={() => currentEditor.chain().focus().setTextAlign("right").run()} className={toolbarBtnClasses(currentEditor.isActive({ textAlign: "right" }))}><AlignRight className="h-4 w-4" /></button>
        <button type="button" onClick={() => currentEditor.chain().focus().setTextAlign("justify").run()} className={toolbarBtnClasses(currentEditor.isActive({ textAlign: "justify" }))}><AlignJustify className="h-4 w-4" /></button>
        <span className="mx-1 h-6 w-px bg-gray-400" />
        <input
          type="color"
          title="Pick text color"
          value={currentEditor.getAttributes("textStyle").color || "#111827"}
          onChange={(event) =>
            currentEditor.chain().focus().setColor(event.target.value).run()
          }
          className="h-8 w-8 cursor-pointer rounded border bg-white p-0"
        />
        <div className="flex items-center gap-1">
          {TEXT_COLORS.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => currentEditor.chain().focus().setColor(color).run()}
              className="h-5 w-5 rounded-full border"
              style={{ backgroundColor: color }}
              title={`Text color ${color}`}
            />
          ))}
          <button
            type="button"
            onClick={() => currentEditor.chain().focus().unsetColor().run()}
            className="rounded border px-2 py-1 text-xs bg-white/60"
          >
            Reset
          </button>
        </div>
        <span className="mx-1 h-6 w-px bg-gray-400" />
        <input
          type="color"
          title="Pick highlight color"
          value={currentEditor.getAttributes("highlight").color || "#fef08a"}
          onChange={(event) =>
            currentEditor
              .chain()
              .focus()
              .toggleHighlight({ color: event.target.value })
              .run()
          }
          className="h-8 w-8 cursor-pointer rounded border bg-white p-0"
        />
        <div className="flex items-center gap-1">
          {HIGHLIGHT_COLORS.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() =>
                currentEditor
                  .chain()
                  .focus()
                  .toggleHighlight({ color })
                  .run()
              }
              className="h-5 w-5 rounded border"
              style={{ backgroundColor: color }}
              title={`Highlight ${color}`}
            />
          ))}
          <button
            type="button"
            onClick={() => currentEditor.chain().focus().unsetHighlight().run()}
            className="rounded border px-2 py-1 text-xs bg-white/60"
          >
            Reset highlight
          </button>
        </div>
        <span className="mx-1 h-6 w-px bg-gray-400" />
        <button type="button" onClick={setLink} className={toolbarBtnClasses(currentEditor.isActive("link"))}><Link2 className="h-4 w-4" /></button>
        <button
          type="button"
          onClick={() => currentEditor.chain().focus().extendMarkRange("link").unsetLink().run()}
          className={toolbarBtnClasses()}
        >
          Remove link
        </button>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={toolbarBtnClasses()}
        >
          <ImagePlus className="h-4 w-4" />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          onChange={onPickEditorImage}
          className="hidden"
        />
        <span className="mx-1 h-6 w-px bg-gray-400" />
        <button type="button" onClick={() => currentEditor.chain().focus().undo().run()} className={toolbarBtnClasses()}><Undo2 className="h-4 w-4" /></button>
        <button type="button" onClick={() => currentEditor.chain().focus().redo().run()} className={toolbarBtnClasses()}><Redo2 className="h-4 w-4" /></button>
      </div>
      <EditorContent editor={currentEditor} />
      <p className="mt-2 text-xs text-gray-500">Tip: Use the image button to insert images in content.</p>
    </div>
  );
}
