
import { ReactNode } from "react";
import { useRouter } from "next/router";
import ShareButtons from "../../../global/share-buttons";
import { IBlogExtended } from "../../../../interfaces/contentrain";


interface BlogDetailHeroProps {
  detail: IBlogExtended;
}

const BlogDetailHero = ({ detail }:BlogDetailHeroProps) => {
  const router = useRouter();
  const shareUrl = router.asPath;

  return (
    <section className="main-hero-bg py-10 md:pt-[80px] mb-10">
      <div className="container flex flex-wrap justify-center text-center max-w-3xl">
        <span className="py-1.5 px-4 rounded-full bg-indigo-100 text-primary-700 font-medium text-sm capitalize">
          {detail?.category.name}
        </span>

        <div className="w-full" />

        <h1 className="block font-aeonik font-medium text-3xl md:leading-tight my-6 max-w-xl">
          {detail?.title}
        </h1>

        <div className="w-full" />

        <p className="block md:text-xl text-gray-600 font-normal mb-8">
          {detail?.description}
        </p>

        <div className="flex flex-wrap justify-center w-full flex-col items-center">
          <div className="flex items-center mb-6">
            <div className="h-16 w-16 rounded-full bg-gray-100 overflow-hidden border shadow-sm">
              <img
                height="64"
                width="64"
                className="h-full w-full object-cover"
                src={detail?.author.photosrc.split('public')[1]}
                alt={detail?.author.photoalt}
              />
            </div>
            <div className="pl-2 text-left">
              <span className="block font-aeonik font-medium text-xl">
                {detail?.author.fullname}
              </span>
              <span className="block text-gray-600 font-normal text-sm">
                {new Date(detail?.createdAt).toDateString()}
              </span>
            </div>
          </div>
          <ShareButtons url={shareUrl} text={detail?.title} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHero;

