// components/Pagination.tsx

import { useRouter } from "next/router";
import Link from "next/link";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pagesToShow: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pagesToShow,
}) => {
  const displayedPages = (() => {
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  })();

  return (
    <nav
      className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
      aria-label="Pagination"
    >
      {currentPage > 1 && (
        <Link
          href={{ pathname: "/blog", query: { page: currentPage - 1 } }}
          className="flex w-10 h-10 mr-1 justify-center items-center rounded-lg bg-white text-secondary-500 hover:border-gray-300"
          title="Previous Page"
        >
          <span className="sr-only">Previous Page</span>
          <span>
            <RiArrowLeftLine size={20}></RiArrowLeftLine>
          </span>
        </Link>
      )}

      {displayedPages.map((page) => (
        <Link
          key={page}
          href={{ pathname: "/blog", query: { page } }}
          className={`flex w-10 h-10 mx-1 justify-center items-center rounded-lg ${
            currentPage === page
              ? "bg-primary-500 text-white pointer-events-none"
              : "bg-white text-black hover:border-gray-300"
          }`}
          title={`Page ${page}`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={{ pathname: "/blog", query: { page: currentPage + 1 } }}
          className="flex w-10 h-10 ml-2 justify-center items-center rounded-lg bg-white text-secondary-500 hover:border-gray-300"
          title="Next Page"
        >
          <span className="sr-only">Next Page</span>

          <span>
            <RiArrowRightLine size={20} />
          </span>
        </Link>
      )}
    </nav>
  );
};

export default Pagination;

