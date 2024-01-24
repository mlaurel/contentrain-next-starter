import Link from "next/link";
import { useRouter } from "next/router";
import { IBlogCategories, IBlogHero } from "../../../interfaces/contentrain";

type BlogHeroProps = {
  blogHero: IBlogHero;
  blogCategories: IBlogCategories[];
};

const BlogHero = ({ blogHero, blogCategories }: BlogHeroProps) => {
  function geLinkClassNames() {
    const baseClasses = "flex py-2 px-4 rounded-full whitespace-nowrap";
    const router = useRouter();
    const { asPath } = router;
    return (routePath: string) =>
      asPath === routePath
        ? `${baseClasses} bg-primary-500 text-white`
        : `${baseClasses} bg-white text-gray-600`;
  }
  return (
    <section className="sm-hero-bg py-10 md:pt-[160px]">
      <div className="container flex flex-wrap justify-center text-center max-w-4xl">
        <h1 className="block font-aeonik font-medium text-3xl md:text-6xl md:leading-tight mb-6">
          {blogHero.title}
        </h1>
        <p className="block text-sm md:text-xl text-gray-600 font-normal mb-8">
          {blogHero.description}
        </p>
        <div className="w-full" />
        <div className="flex md:justify-center mx-auto max-w-full border rounded-full p-1 bg-white text-sm text-gray-600 font-normal overflow-auto">
          <Link
            key={`category-all-posts`}
            href={`/blog`}
            title={`All Posts`}
            className={geLinkClassNames()("/blog")}
            scroll={false}
          >
            All Posts
          </Link>
          {blogCategories.map((category, i) => (
            <Link
              key={`category-${i}`}
              href={`/blog/${category.slug}`}
              title={category.name}
              className={geLinkClassNames()(`/blog/${category.slug}`)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;

