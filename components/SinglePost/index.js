import Link from "next/link";
import styles from "./SinglePost.module.css";
// import EditorJS from '@editorjs/editorjs';
import { useEffect, useRef, useState } from "react";
  

const edjsHTML = require("editorjs-html");
const edjsParser = edjsHTML();

console.log({ edjsParser })
export default function SinglePost({ post, html_mode }) {
    if (post.id < 5) return "OK"
    const [ editor, setEditor ] = useState(null);
    const holder = useRef(null);
    console.log({ post })
    // const html = edjsParser.parseStrict(post.html_content);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const Embed =  require('@editorjs/embed');
        const Table =  require('@editorjs/table');
        const List =  require('@editorjs/list');
        const Warning =  require('@editorjs/warning');
        const Code =  require('@editorjs/code');
        const LinkTool =  require('@editorjs/link');
        const Image =  require('@editorjs/image');
        const Raw =  require('@editorjs/raw');
        const Header =  require('@editorjs/header');
        const Quote =  require('@editorjs/quote');
        const Marker =  require('@editorjs/marker');
        const CheckList =  require('@editorjs/checklist');
        const Delimiter =  require('@editorjs/delimiter');
        const InlineCode =  require('@editorjs/inline-code');
        const SimpleImage =  require('@editorjs/simple-image');
        
        const EDITOR_JS_TOOLS = {
            embed: Embed,
            table: Table,
            marker: Marker,
            list: List,
            warning: Warning,
            code: Code,
            linkTool: LinkTool,
            image: Image,
            raw: Raw,
            header: Header,
            quote: Quote,
            checklist: CheckList,
            delimiter: Delimiter,
            inlineCode: InlineCode,
            simpleImage: SimpleImage,
        };
        const { createReactEditorJS } = require("react-editor-js")
        const ReactEditorJS = createReactEditorJS({ readOnly: true });

        console.log({ post });
        const editor = <ReactEditorJS
            defaultValue={JSON.parse(post.html_content)}
            tools={EDITOR_JS_TOOLS}
            readOnly={true}
        />
        setEditor(editor)
    }, [ holder ])
    
    if (!editor) "editor loading"
    return (
        <div class="">
            <Link href={`/posts/${post.slug}`}>
                <h4 style={{ cursor: 'pointer' }}>{post.title}</h4>
            </Link>
            {
                !html_mode
                    ? <p>{post.meta.content_text}</p>
                    : (editor)
            }
            <div style={{ display: "grid" }}>
                <div style={{ display: 'inline-flex'}}>
                    <p className={styles.p_likes}>{post.meta.likes_count} likes</p> 
                    <p>&nbsp;&nbsp; | &nbsp;&nbsp;</p>
                    <p>{post.meta.comments_count} comments</p>
                    <p>&nbsp;&nbsp; | &nbsp;&nbsp;</p>
                    <p>January 28, 2022</p>
                </div>
            </div>
        </div>
    )
}