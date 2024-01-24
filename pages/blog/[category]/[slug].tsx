import { useRouter } from "next/router";
// import { BlogPostInterface } from "..";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import BlogDetailHero from "../../../components/pages/blog/detail/hero";
import Layout from "../../../components/global/layout";
import PostBody from "../../../components/global/post-body";
import authorContent from "../../../contentrain/authors/authors.json";
import categoryContent from "../../../contentrain/blogcategories/blogcategories.json";
import { IAuthor, IBlog, IBlogExtended, IBlogCategories } from "../../../interfaces/contentrain";
const allCategories:IBlogCategories[] = categoryContent;

type BlogPostProps = {
  data: IBlogExtended;
};

export default function BlogPost({ data }: BlogPostProps) {
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
            {data.author.photosrc && (
              <div className="h-20 w-20 rounded-full bg-gray-100 overflow-hidden mx-auto mb-2 border shadow-sm">
                <img
                  height="80"
                  width="80"
                  className="h-full w-full object-cover"
                  src={data.author.photosrc.split("public")[1]}
                  alt={data.author.photoalt}
                />
              </div>
            )}
            <strong className="block mb-1 font-aeonik font-medium text-xl">
              {data?.author.fullname}
            </strong>
            <span className="block text-primary-500 font-normal text-sm">
              {data?.author.job}
            </span>
          </div>
          <p className="text-gray-600 font-normal">{data?.author.description}</p>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post: IBlog = getPostBySlug(`blog/${slug}`);
  const content = await markdownToHtml(post.content || "");
  const author:IAuthor= authorContent.find((author) => author.ID === post.author);
  const category:IBlogCategories = allCategories.find(
    (category) => category.ID === post.category
  );
  return {
    props: {
      data: {
        ...post,
        content: content,
        author: author,
        category: category,
      } as IBlogExtended,
    },
  };
};
export const getStaticPaths = async () => {
  const allPosts = getAllPosts("blog");
  return {
    paths: allPosts?.map((post) => {
      return {
        params: {
          slug: post.slug,
          category: allCategories.find((category) => category.ID === post.category).slug,
        },
      };
    }),
    fallback: false,
  };
};

