import { useRouter } from "next/router";
import { getAllPosts } from "../../../lib/api";

// Import JSon's
import blogHeroContent from "../../../contentrain/bloghero/bloghero.json";
import blogCategoriesContent from "../../../contentrain/blogcategories/blogcategories.json";
import resourceHeroContent from "../../../contentrain/resourceshero/resourceshero.json";
import resourceItemsContent from "../../../contentrain/resourcesitems/resourcesitems.json";
import authorContent from "../../../contentrain/authors/authors.json";

import BlogPostsList from "../../../components/pages/blog/list";
import BlogHero from "../../../components/pages/blog/hero";
import Layout from "../../../components/global/layout";
import ResourcesSection from "../../../components/global/resources";

import {
  IBlog,
  IBlogExtended,
  IBlogCategories,
  IBlogHero,
  IResourceshero,
  IResourcesItem,
} from "../../../interfaces/contentrain";
const allCategories: IBlogCategories[] = blogCategoriesContent;

type BlogProps = {
  resource: IResourceshero;
  resourceItems: IResourcesItem[];
  data: IBlogExtended[]; // Update the type based on the actual data structure
  blogHero: IBlogHero;
  blogCategories: IBlogCategories[];
};
export default function BlogCategoryPage({
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

export const getStaticProps = async ({ params }) => {
  const allPosts = getAllPosts("blog");
  const activeCategory: IBlogCategories = allCategories.find(
    (category) => category.slug === params.category
  );
  const filteredPosts: IBlogExtended[] = allPosts
    .filter((post) => post.category === activeCategory.ID)
    .map((post) => {
      return {
        ...post,
        category: blogCategoriesContent.find(
          (category) => category.ID === post.category
        ),
        author: authorContent.find((author) => author.ID === post.author),
      };
    });
  return {
    props: {
      data: filteredPosts,
      resource: resourceHeroContent[0],
      resourceItems: resourceItemsContent,
      blogHero: blogHeroContent[0],
      blogCategories: blogCategoriesContent,
    },
  };
};
export const getStaticPaths = async () => {
  const allPosts = getAllPosts("blog");
// console.log(allPosts)
  const paths = allPosts.map((post) => ({
    params: {
      category: allCategories.find((category) => category.ID === post.category)
        .slug,
    },
  }));
  console.log(paths)
  return {
    paths,
    fallback: false,
  };
}



// export const getStaticPaths = async () => {
//   const allPosts = getAllPosts("blog");

//   const paths = allPosts.map((post) => ({
//     params: {
//       category: allCategories.find((category) => category.ID === post.category)
//         .slug,
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
