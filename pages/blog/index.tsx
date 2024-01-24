// pages/blog.tsx
import { useRouter } from "next/router";
import { getAllPosts } from "../../lib/api";

import BlogPostsList from "../../components/pages/blog/list";
import BlogHero from "../../components/pages/blog/hero";
import Layout from "../../components/global/layout";
import ResourcesSection from "../../components/global/resources";

// Import JSon's
import blogHeroContent from "../../contentrain/bloghero/bloghero.json";
import blogCategoriesContent from "../../contentrain/blogcategories/blogcategories.json";
import resourceHeroContent from "../../contentrain/resourceshero/resourceshero.json";
import resourceItemsContent from "../../contentrain/resourcesitems/resourcesitems.json";
import authorContent from "../../contentrain/authors/authors.json";


import {
  IBlogExtended,
  IBlogCategories,
  IBlogHero,
  IResourceshero,
  IResourcesItem,
} from "../../interfaces/contentrain";

type BlogProps = {
  resource: IResourceshero;
  resourceItems: IResourcesItem[];
  data: IBlogExtended[]; // Update the type based on the actual data structure
  blogHero: IBlogHero;
  blogCategories: IBlogCategories[];
};
export default function Blog({
  resource,
  resourceItems,
  data,
  blogHero,
  blogCategories,
}: BlogProps) {
  const router = useRouter();
  return (
    <>
      <Layout>
        {!router.query.getPostBySlug && (
          <BlogHero
            blogCategories={blogCategories}
            blogHero={blogHero}
          ></BlogHero>
        )}
        <BlogPostsList data={data} />

        {!router.query.slug && (
          <ResourcesSection
            resources={resource}
            resourcesItems={resourceItems}
          ></ResourcesSection>
        )}
      </Layout>
    </>
  );
}



export const getStaticProps = async () => {
  const allPosts = getAllPosts("blog");
  const extendedPosts:IBlogExtended[] = allPosts.map((post) => {
    return{
      ...post,
      category: blogCategoriesContent.find((category) => category.ID === post.category),
      author: authorContent.find((author) => author.ID === post.author),
    }
  })

  return {
    props: {
      data: extendedPosts,
      resource: resourceHeroContent[0],
      resourceItems: resourceItemsContent,
      blogHero: blogHeroContent[0],
      blogCategories: blogCategoriesContent,
    },
  };
};
