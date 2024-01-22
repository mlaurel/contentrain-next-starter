import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const baseMdDirectory = join(process.cwd(), "content");

export function getPostSlugs(postsDirectory: string) {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(baseMdDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], postsDirectory = "") {
  const directory = join(baseMdDirectory, postsDirectory);
  const slugs = getPostSlugs(directory);
  const posts = slugs
    .map((slug) => getPostBySlug(join(postsDirectory, slug) , fields))
    .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1));
  return posts;
}
