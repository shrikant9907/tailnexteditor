// src/TailNextEditor.js
import React, { useEffect, useState, useRef } from 'react';

// TailNextEditor: A Simple Rich Text Editor Component
const TailNextEditor = ({ value, onChange }) => {
    const editorRef = useRef(null);
    const [isClient, setIsClient] = useState(false);

    // Only enable the editor on the client-side (avoid SSR issues)
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && editorRef.current) {
            // Example: Using a simple content-editable div
            // You can replace this with Quill, Draft.js, or any editor
            const editor = editorRef.current;
            editor.innerHTML = value;

            editor.addEventListener('input', (e) => {
                onChange(editor.innerHTML); // Call onChange when text is updated
            });

            return () => {
                editor.removeEventListener('input', () => { });
            };
        }
    }, [isClient, value, onChange]);

    if (!isClient) return null;

    return (
        <div className="border p-4 rounded-md shadow-lg">
            <div
                ref={editorRef}
                contentEditable={true}
                className="min-h-[200px] p-2 border-2 border-gray-300 rounded-md focus:outline-none"
                placeholder="Start typing here..."
            ></div>
        </div>
    );
};

export default TailNextEditor;
