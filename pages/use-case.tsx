import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import BlogDetailHero from "../components/pages/blog/detail/hero";
import Layout from "../components/global/layout";
import PostBody from "../components/global/post-body";
import authorContent from "../contentrain/authors/authors.json";
import categoryContent from "../contentrain/blogcategories/blogcategories.json";
import { IBlogExtended } from "../interfaces/contentrain";
type UseCaseProps = {
  params: any;
  data: IBlogExtended;
};

export default function UseCase({ data }: UseCaseProps) {
  return (
    <>
      <Layout>
        <div className="pb-72">
          <article className="mx-auto">
            <BlogDetailHero detail={data} />
            <PostBody content={data?.content} />
          </article>

          <div className="flex flex-wrap justify-center p-3 md:p-8 mt-24 mx-auto max-w-[640px] border border-indigo-50 text-center rounded-lg bg-gradient-to-b from-[#F5FAFF] to-transparent">
            <div className="text-center mb-8">
              <div className="h-20 w-20 rounded-full bg-gray-100 overflow-hidden mx-auto mb-2 border shadow-sm">
                <img
                  height="80"
                  width="80"
                  className="h-full w-full object-cover"
                  src={data.author.photosrc.split("public/")[1]}
                  alt={data.author.photoalt}
                />
              </div>
              <strong className="block mb-1 font-aeonik font-medium text-xl">
                {data.author.fullname}
              </strong>
              <span className="block text-primary-500 font-normal text-sm">
                {data.author.job}
              </span>
            </div>

            <p className="text-gray-600 font-normal">
              {data.author.description}
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug("use-case/use-case");
  const content = await markdownToHtml(post.content || "");
  const author = authorContent.find((author) => author.ID === post.author);
  // const category = categoryContent.find(
  //   (category) => category.ID === post.category
  // );
  return {
    props: {
      data: {
        ...post,
        content: content,
        author: author,
        // category: category,
      },
    },
  };
}
