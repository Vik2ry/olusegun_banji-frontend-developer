function PaginationControls({
  currentPage,
  pageCount,
  itemCount,
  totalPages,
  totalCount,
  onClickOnPage,
}) {
  let pages = [];

  for (let i = 0; i < totalPages.length; i++) {
    pages.push(i + 1);
  }

  return (
    <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900  px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-slate-800 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-800"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-slate-800 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-800"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing {/* prettier-ignore */}
            <span className="font-medium">
              {((currentPage - 1) * pageCount) + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {(currentPage - 1) * pageCount + itemCount}
            </span>{" "}
            of <span className="font-medium">{totalCount}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-slate-800 hover:bg-slate-800 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              &lt;
              {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
            </a>

            {pages.map((page) => (
              <a
                onClick={onClickOnPage(page)}
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {page}
              </a>
            ))}

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-slate-800 hover:bg-slate-800 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              &gt;
              {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default PaginationControls;
