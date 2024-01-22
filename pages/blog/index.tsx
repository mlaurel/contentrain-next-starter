// pages/blog.tsx
import { useRouter } from "next/router";
import { getAllPosts } from "../../lib/api";

// Import JSon's
import blogHeroContent from "../../contentrain/bloghero/bloghero.json";
import blogCategoriesContent from "../../contentrain/blogcategories/blogcategories.json";
import resourceHeroContent from "../../contentrain/resourceshero/resourceshero.json";
import resourceItemsContent from "../../contentrain/resourcesitems/resourcesitems.json";
import BlogPostsList from "../../components/pages/blog/list";
import BlogHero from "../../components/pages/blog/hero";
import Layout from "../../components/global/layout";
import ResourcesSection from "../../components/global/resources";
export interface BlogPostInterface {
  ID: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  imagesrc: string;
  imagealt: string;
  authorfullname: string;
  authorjob: string;
  authorphotosrc: string;
  authorphotoalt: string;
  authordescription: string;
}

export interface BlogHeroDataInterface {
  ID: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  title: string;
  description: string;
  imagesrc: string;
  imagealt: string;
  leftbuttonlabel: string;
  leftbuttonlink: string;
  rightbuttonlabel: string;
  rightbuttonlink: string;
}
export interface BlogCategoriesDataInterface {
  ID: string;
  name: string;
  link: string;
  status: string;
  updatedAt: string;
  createdAt: string;
}
export interface ResourcesDataInterface {
  ID: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  title: string;
  subtitle: string;
}
export interface ResourcesItemsDataInterface {
  ID: string;
  icon: string;
  title: string;
  link: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogProps {
  resource: ResourcesDataInterface;
  resourceItems: ResourcesItemsDataInterface[];
  data: BlogPostInterface[]; // Update the type based on the actual data structure
  blogHero: BlogHeroDataInterface;
  blogCategories: BlogCategoriesDataInterface[];
}
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
// export const getStaticPaths = async () => {
//   const allPosts = getAllPosts(["slug", "category"], "blog");
//   console.log(allPosts)
//   return {
//     paths: allPosts?.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//           category: post.category.toLowerCase(),
//         },
//       };
//     }),
//     fallback: false,
//   };
// }

export const getStaticProps = async () => {
  const allPosts = getAllPosts(
    [
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
      "authorfullname",
      "authorjob",
      "authorphotosrc",
      "authorphotoalt",
      "authordescription",
    ],
    "blog"
  );
  return {
    props: {
      data: allPosts,
      resource: resourceHeroContent[0],
      resourceItems: resourceItemsContent,
      blogHero: blogHeroContent[0],
      blogCategories: blogCategoriesContent,
    },
  };
};
