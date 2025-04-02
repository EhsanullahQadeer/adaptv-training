'use client';

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { CodeNode } from "@lexical/code";
import { LinkNode } from "@lexical/link";
import { ParagraphNode, TextNode, LineBreakNode } from "lexical";

const theme = {
    paragraph: "text-base text-gray-800",
    text: {
        bold: "font-bold",
        italic: "italic",
        underline: "underline",
        strikethrough: "line-through",
        code: "font-mono bg-gray-200 px-1 py-0.5 rounded",
    },
    heading: {
        h1: "text-4xl font-bold text-gray-900",
        h2: "text-3xl font-semibold text-gray-900",
        h3: "text-2xl font-medium text-gray-800",
        h4: "text-xl font-semibold text-gray-800",
        h5: "text-lg font-medium text-gray-700",
        h6: "text-base font-medium text-gray-600",
        h7: "text-sm font-medium text-gray-500"
    },
    quote: "border-l-4 border-gray-300 pl-4 italic text-gray-600",
    list: {
        nested: {
            listitem: "ml-4 list-disc",
        },
        ol: "list-decimal ml-6",
        ul: "list-disc ml-6",
        listitem: "mb-1",
    },
    code: "bg-gray-100 text-sm font-mono p-2 rounded",
    link: "text-blue-600 underline hover:text-blue-800",
    table: "table-auto border-collapse border border-gray-300",
    tableCell: "border border-gray-300 px-2 py-1",
    tableRow: "border-b border-gray-200",
    horizontalRule: "border-t border-gray-300 my-4",
};




const removeUploadNodes = (jsonData) => {
    if (!jsonData || !jsonData.root) return jsonData;

    const filteredChildren = jsonData.root.children.filter(
        (node) => node.type !== "upload"
    );

    return {
        ...jsonData,
        root: {
            ...jsonData.root,
            children: filteredChildren,
        },
    };
};

const LoadJsonPlugin = ({ jsonData }) => {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        if (jsonData) {
            editor.update(() => {
                try {
                    const cleanedJson = removeUploadNodes(jsonData);
                    const editorState = editor.parseEditorState(cleanedJson);
                    editor.setEditorState(editorState);
                } catch (error) {
                    console.error("Failed to parse editor state:", error);
                }
            });
        }
    }, [editor, jsonData]);

    return null;
};

const LexicalReadOnly = ({ jsonData }) => {
    const editorConfig = {
        editable: false,
        theme,
        onError(error) {
            throw error;
        },
        nodes: [
            ParagraphNode,
            TextNode,
            LineBreakNode,
            HeadingNode,
            QuoteNode,
            ListNode,
            ListItemNode,
            CodeNode,
            LinkNode,
        ],
    };

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <LoadJsonPlugin jsonData={jsonData} />
            <div className="lexical-container">
                <RichTextPlugin
                    contentEditable={<ContentEditable className="lexical-input" />}
                    ErrorBoundary={LexicalErrorBoundary}
                />
            </div>
        </LexicalComposer>
    );
};

export default LexicalReadOnly;
