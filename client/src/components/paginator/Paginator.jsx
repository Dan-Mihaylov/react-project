import { usePaginator } from "../../hooks/usePaginator";

export default function Paginator({
    setSearchParams,
}) {

    const {
        currentPage,
        totalPageSize,
        handlePageChange
    } = usePaginator();


    return (
        <div className="col-lg-12 col-12">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mb-0">
                    
                    {/* Prev Button */}
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1, setSearchParams)}
                            aria-label="Previous"
                        >
                            <span aria-hidden="true">Prev</span>
                        </button>
                    </li>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPageSize }, (_, index) => index + 1).map((page) => (
                        <li
                            key={page}
                            className={`page-item ${currentPage === page ? "active" : ""}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(page, setSearchParams)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}

                    {/* Next Button */}
                    <li className={`page-item ${currentPage === totalPageSize ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1, setSearchParams)}
                            aria-label="Next"
                        >
                            <span aria-hidden="true">Next</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}