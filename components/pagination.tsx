import React from "react";

interface Props {
  totalPages: number;
  currentPage: number;
  pageChange: (num: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  pageChange,
}: Props) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            上一页
          </button>
        )}
        {prevPage && (
          <button
            onClick={() => pageChange(currentPage > 1 ? currentPage - 1 : 1)}
          >
            {" "}
            上一页
          </button>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            下一页
          </button>
        )}
        {nextPage && (
          <button
            onClick={() =>
              pageChange(
                currentPage < totalPages ? currentPage + 1 : totalPages
              )
            }
          >
            下一页
          </button>
        )}
      </nav>
    </div>
  );
}
