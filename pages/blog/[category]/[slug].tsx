import { useRouter } from "next/router";
// import { BlogPostInterface } from "..";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import BlogDetailHero from "../../../components/pages/blog/detail/hero";
import Layout from "../../../components/global/layout";
import PostBody from "../../../components/global/post-body";

// type BlogPostProps = {
//   params: any;
//   data: BlogPostInterface;
// };

export default function BlogPost({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return (
    <Layout>
      <div className="pb-72">
        <article className="mx-auto">
          <BlogDetailHero detail={data} />
          <div className="max-w-3xl prose mx-auto px-3 lg:px-0">
            <PostBody content={data?.content} />
          </div>
        </article>
        <div className="flex flex-wrap flex-col justify-center p-3 md:p-8 mt-24 mx-auto max-w-[640px] border border-indigo-50 text-center rounded-lg bg-gradient-to-b from-[#F5FAFF] to-transparent">
          <div className="text-center mb-8">
            {data?.authorphotosrc && (
              <div className="h-20 w-20 rounded-full bg-gray-100 overflow-hidden mx-auto mb-2 border shadow-sm">
                <img
                  height="80"
                  width="80"
                  className="h-full w-full object-cover"
                  src={data?.authorphotosrc.split("public")[1]}
                  alt={data?.authorphotoalt}
                />
              </div>
            )}
            <strong className="block mb-1 font-aeonik font-medium text-xl">
              {data?.authorfullname}
            </strong>
            <span className="block text-primary-500 font-normal text-sm">
              {data?.authorjob}
            </span>
          </div>
          <p className="text-gray-600 font-normal">{data?.authordescription}</p>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(`blog/${slug}`, [
    "title",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "description",
    "category",
    "authorfullname",
    "authorphotosrc",
    "authorphotoalt",
    "authorjob",
    "authordescription",
    "createdAt",
  ]);
  const content = await markdownToHtml(post.content || "");
  return {
    props: {
      data: { ...post, content: content },
    },
  };
};
export const getStaticPaths = async () => {
  const allPosts = getAllPosts(["slug", "category"], "blog");
  return {
    paths: allPosts?.map((post) => {
      return {
        params: {
          slug: post.slug,
          category: post.category.toLowerCase(),
        },
      };
    }),
    fallback: false,
  };
};

