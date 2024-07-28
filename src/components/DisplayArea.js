import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const DisplayArea = ({ data }) => {
    const createMarkup = (markdown) => {
        const html = marked(markdown);
        return { __html: DOMPurify.sanitize(html) };
    };

    return (
        <div className="text-white p-4 h-5/6 overflow-y-scroll scrollbar-thin-rounded rounded-2xl">
            <div dangerouslySetInnerHTML={createMarkup(data)} />
        </div>
    );
}

export default DisplayArea;
