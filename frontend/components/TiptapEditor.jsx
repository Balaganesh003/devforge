import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Link from '@tiptap/extension-link';
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Italic,
  Underline as Underline2,
  Undo2,
  Redo2,
} from 'lucide-react';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex  items-center px-[10px] py-[6px] space-x-[6px] sm:space-x-2 md:space-x-4 rounded-t-md bg-black">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive('bold')
            ? ' bg-white/[20%] p-1 rounded '
            : 'hover:bg-white/[20%] p-1 rounded '
        }>
        <Bold
          strokeWidth={2.5}
          size={20}
          absoluteStrokeWidth
          className="text-white w-4 h-4 mobile-lg:w-5 mobile-lg:h-5"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive('italic')
            ? ' bg-white/[20%] p-1 rounded '
            : 'hover:bg-white/[20%] p-1 rounded '
        }>
        <Italic
          strokeWidth={2.5}
          size={20}
          absoluteStrokeWidth
          className="text-white w-4 h-4 mobile-lg:w-5 mobile-lg:h-5"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={
          editor.isActive('underline')
            ? ' bg-white/[20%] p-1 rounded'
            : 'hover:bg-white/[20%] p-1 rounded '
        }>
        <Underline2
          strokeWidth={2.5}
          size={20}
          absoluteStrokeWidth
          className="text-white w-4 h-4 mobile-lg:w-5 mobile-lg:h-5"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive('bulletList')
            ? ' bg-white/[20%] p-1 rounded'
            : 'hover:bg-white/[20%] p-1 rounded'
        }>
        <List
          strokeWidth={2.5}
          size={20}
          absoluteStrokeWidth
          className="text-white w-4 h-4 mobile-lg:w-5 mobile-lg:h-5"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive('orderedList')
            ? ' bg-white/[20%] p-1 rounded'
            : 'hover:bg-white/[20%] p-1 rounded'
        }>
        <ListOrdered
          strokeWidth={2.5}
          size={20}
          absoluteStrokeWidth
          className="text-white w-4 h-4 mobile-lg:w-5 mobile-lg:h-5"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive('heading', { level: 1 })
            ? ' bg-white/[20%] p-1 rounded'
            : 'hover:bg-white/[20%] p-1 rounded '
        }>
        <Heading1
          strokeWidth={2.5}
          size={20}
          absoluteStrokeWidth
          className="text-white w-4 h-4 mobile-lg:w-5 mobile-lg:h-5"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive('heading', { level: 2 })
            ? ' bg-white/[20%] p-1 rounded'
            : 'hover:bg-white/[20%] p-1 rounded'
        }>
        <Heading2
          strokeWidth={2.5}
          size={20}
          absoluteStrokeWidth
          className="text-white w-4 h-4 mobile-lg:w-5 mobile-lg:h-5"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive('heading', { level: 3 })
            ? ' bg-white/[20%] p-1 rounded'
            : 'hover:bg-white/[20%] p-1 rounded'
        }>
        <Heading3
          strokeWidth={2.5}
          size={20}
          absoluteStrokeWidth
          className="text-white w-4 h-4 mobile-lg:w-5 mobile-lg:h-5"
        />
      </button>

      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}>
        <div className="hover:bg-white/20 p-1 cursor-pointer rounded">
          <Undo2
            strokeWidth={2.5}
            size={20}
            absoluteStrokeWidth
            className="text-white w-4 h-4 mobile-lg:w-5 mobile-lg:h-5"
          />
        </div>
      </button>

      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}>
        <div className="hover:bg-white/20 p-1 cursor-pointer rounded">
          <Redo2
            strokeWidth={2.5}
            size={20}
            absoluteStrokeWidth
            className="text-white w-4 h-4 mobile-lg:w-5 mobile-lg:h-5"
          />
        </div>
      </button>
    </div>
  );
};

const TiptapEditor = ({
  setEditorContent,
  editorContent,
  placeholder,
  username,
  setUsername,
  isUsername,
}) => {
  const editor = useEditor({
    extensions: [
      Placeholder.configure({
        placeholder: () => {
          return `${placeholder}`;
        },
      }),
      TextStyle.configure({ types: [ListItem.name] }),
      Link.configure({ types: [ListItem.name] }),
      Underline.configure({ types: [ListItem.name] }),

      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: `${editorContent}`,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });

  return (
    <div className="w-full bg-white border-[1px] rounded-lg">
      <MenuBar editor={editor} className="menubar" />
      {isUsername && (
        <div className="">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full  p-2   border-[2px] border-white focus:border-black focus:outline-none"
          />
        </div>
      )}
      <EditorContent
        editor={editor}
        className=" rounded-lg focus:outline-[2px]"
      />
    </div>
  );
};

export default TiptapEditor;
