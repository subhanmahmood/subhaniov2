import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

// const classNames = {
//   h1: 'text-4xl font-bold mb-4',
//   h2: 'text-3xl font-semibold mb-3',
//   h3: 'text-2xl font-semibold mb-2',
//   p: 'mb-4',
//   a: 'text-blue-600 hover:underline',
//   ul: 'list-disc pl-5 mb-4',
//   ol: 'list-decimal pl-5 mb-4',
//   li: 'mb-2',
//   blockquote: 'border-l-4 border-gray-300 pl-4 italic my-4',
//   pre: 'bg-gray-100 p-4 rounded-md overflow-x-auto',
//   code: 'bg-gray-100 rounded px-1 py-0.5',
// };

export async function getMarkdownContent(fileName: string) {
  const fullPath = path.join(process.cwd(), 'content', `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype)
    // .use(rehypeClassNames, classNames)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...data,
  };
}