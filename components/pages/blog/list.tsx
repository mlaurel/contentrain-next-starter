// components/BlogPostsList.tsx

import Link from "next/link";
import { useRouter } from "next/router";
import Pagination from "../../global/pagination";
import { IBlog, IBlogExtended } from "../../../interfaces/contentrain";

type BlogPostsListProps = {
  data: IBlogExtended[];
}

const BlogPostsList: React.FC<BlogPostsListProps> = ({ data }) => {
  const router = useRouter();
  const postsPerPage = 9;
  const pagesToShow = 5;

  const currentPage = parseInt(router.query.page as string, 10) || 1;

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = data?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data?.length / postsPerPage);

  return (
    <div className="container py-10 md:pb-24">
      <div className="flex flex-wrap">
        {paginatedPosts?.map((post) => (
          <div
            key={post.slug}
            className="blog-card w-full md:w-1/3 px-2 pt-4 pb-12 group"
          >
            <Link href={`/blog/${post.category.slug}/${post.slug}`}>
              <div className="w-full aspect-video rounded-lg overflow-hidden relative group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.40)]">
                <span className="inline-block border border-gray:50 px-3 py-1 bg-white text-xs font-semibold rounded absolute top-5 left-5 capitalize">
                  {post.category.name}
                </span>
                <img className="object-contain" src={post.imagesrc.split('public')[1]} alt={post.imagealt} />
              </div>
              <div className="pt-6 sm:pr-4">
                <h2 className="md:text-2xl font-medium mb-2 group-hover:text-primary-500 font-aeonik">
                  {post.title}
                </h2>
                <p className="text-base text-gray-600 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pagesToShow={pagesToShow}
      />
    </div>
  );
};

export default BlogPostsList;

