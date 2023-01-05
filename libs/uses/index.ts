import { readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";

export async function getUsesContent(): Promise<string> {
  const root = process.cwd();
  const file = readFileSync(
    path.join(root, "contents", "uses", "uses.md"),
    "utf-8"
  );
  const { content } = matter(file);
  return content
}
