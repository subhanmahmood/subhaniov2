import { getMarkdownContent } from '@/lib/get-markdown-content';
import Markdown from '@/components/markdown';

export default async function SetupPage() {
  const { contentHtml } = await getMarkdownContent('setup');

  return (
    <div className="container mx-auto max-w-3xl px-4 py-4">
      <Markdown content={contentHtml} />
    </div>
  );
}