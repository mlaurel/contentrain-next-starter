import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { IBlog, IBlogFields } from "../interfaces/contentrain";

const baseMdDirectory = join(process.cwd(), "content");

export function getPostSlugs(postsDirectory: string) {
  return fs.readdirSync(postsDirectory);
}


export function getPostBySlug(slug: string):IBlog {
  
  const fields:IBlogFields[] = [
    "ID",
    "createdAt",
    "updatedAt",
    "status",
    "slug",
    "title",
    "description",
    "category",
    "imagesrc",
    "imagealt",
    "author",
    "content",
  ]
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(baseMdDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const post: IBlog = {
    ID: "",
    status: "",
    slug: "",
    content: "",
    createdAt: "",
    updatedAt: "",
    title: "",
    description: "",
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      post[field] = realSlug;
    }
    if (field === "content") {
      post[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      post[field] = data[field];
    }
  });

  return post;
}

export function getAllPosts( postsDirectory = "") {
  const directory = join(baseMdDirectory, postsDirectory);
  const slugs = getPostSlugs(directory);
  const posts = slugs
    .map((slug) => getPostBySlug(join(postsDirectory, slug)))
    .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1));
  return posts;
}
