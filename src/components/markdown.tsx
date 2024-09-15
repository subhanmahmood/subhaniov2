import React from 'react';

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  return (
    <div className="markdown prose prose-md sm:prose lg:prose-lg xl:prose-xl max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}