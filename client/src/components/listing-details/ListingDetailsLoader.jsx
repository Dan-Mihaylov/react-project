import { Link } from "react-router";

export default function ListingDetailsLoader() {
    return (
        <>

            <header className="site-header d-flex flex-column justify-content-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-lg-5 col-12 mb-5">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <Link to="/">Homepage</Link>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <span className="placeholder col-2"></span>
                                    </li>
                                </ol>
                            </nav>

                            <h2 className="text-white placeholder-glow">
                                <span className="placeholder col-8"></span>
                            </h2>

                            <div className="d-flex align-items-center mt-5">
                                <span className="btn custom-btn custom-border-btn me-4 placeholder col-3"></span>
                            </div>
                        </div>


                        <div className="col-lg-5 col-12">
                            <div className="topics-detail-block bg-white shadow-lg">
                                <div className="placeholder w-100" style={{ height: "250px" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="topics-detail-section section-padding" id="more-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 m-auto">
                            <h3 className="mb-4 placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h3>
                            <p className="placeholder-glow">
                                <span className="placeholder col-10"></span>
                                <span className="placeholder col-8"></span>
                            </p>

                            <blockquote className="placeholder-glow w-100 text-start">
                                <ul>
                                    <li><span className="placeholder col-4"></span></li>
                                    <li><span className="placeholder col-3"></span></li>
                                    <li><span className="placeholder col-5"></span></li>
                                    <li><span className="placeholder col-4"></span></li>
                                    <li>Address:
                                        <ul>
                                            <li><span className="placeholder col-3"></span></li>
                                            <li><span className="placeholder col-4"></span></li>
                                            <li><span className="placeholder col-5"></span></li>
                                            <li><span className="placeholder col-3"></span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </blockquote>

                            <div className="row my-4">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="placeholder w-100" style={{ height: "200px" }}></div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mt-md-0">
                                    <div className="placeholder w-100" style={{ height: "200px" }}></div>
                                </div>
                            </div>
                            <p className="placeholder-glow w-100">
                                <strong><span className="placeholder col-6"></span></strong>
                                <br />
                                <strong><span className="placeholder col-6"></span></strong>
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section-padding section-bg">
                <div className="container">
                    <div className="row justify-content-end">

                        <div className="col-lg-5 col-12 subscribe-form-wrap d-flex justify-content-center align-items-center">
                            <div className="placeholder w-100" style={{ height: "100px" }}></div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
