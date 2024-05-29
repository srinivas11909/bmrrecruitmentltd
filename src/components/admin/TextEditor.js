"use client"
import dynamic from 'next/dynamic'; 
import { useState } from 'react';
//import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles
import "./TextEditor.css"


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({content='', onContentChange}) => {
    
    //const ReactQuill = dynamic(() => import('react-quill'), { ssr: false }); // Use dynamic import
    const [editorValue, setEditorValue] = useState(content);
    const handleEditorChange = (content) => {
        setEditorValue(content);
        onContentChange(content); // Call the onChange handler with the updated content
  };
   
  return (
    <ReactQuill
      value={editorValue}
      onChange={handleEditorChange}
      modules={TextEditor.modules}
      formats={TextEditor.formats}
    />
  );
};

// Quill modules to attach to editor
TextEditor.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  },
};

// Quill editor formats
TextEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default TextEditor;
