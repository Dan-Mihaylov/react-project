export default function ExploreItemLoader() {

    return (
        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
            <div className="custom-block bg-white shadow-lg p-3">
                <a href="#">
                    <div className="d-flex">
                        <div className="w-100">
                            <h6 className="placeholder-glow pt-2">
                                <span className="placeholder col-6"></span>
                            </h6>
                            <h5 className="mb-2 placeholder-glow pt-2">
                                <span className="placeholder col-8"></span>
                            </h5>
                            <p className="mb-0 placeholder-glow pt-2">
                                <span className="placeholder col-10"></span>
                                <span className="placeholder col-9"></span>
                                <span className="placeholder col-7"></span>
                            </p>
                        </div>
                    </div>
                    <div className="placeholder-glow w-100 mt-5">
                        <div className="ratio ratio-16x9">
                            <span className="placeholder w-100 h-100"></span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )

}