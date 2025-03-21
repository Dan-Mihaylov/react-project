export default function SectionFeatured() {

    return (

        <section className="featured-section">
            
            <div className="container">
                
                <div className="row justify-content-center">
                    
                    <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                        <div className="custom-block bg-white shadow-lg">
                            <a href="topics-detail.html">
                                <div className="d-flex">
                                    <div>
                                        <h6>£195.000</h6>
                                        <h5 className="mb-2">Two bedroom apartment in the heart of Sofia</h5>
                                        <p className="mb-0">
                                            This two bedroom apartment comes with a beautiful view that is blocked by another apartment building...
                                        </p>
                                    </div>
                                    {/* <span style={{minWidth: "10rem",}}>140 000</span> */}
                                </div>
                                <img
                                    src="images/topics/undraw_Remote_design_team_re_urdx.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-12">
                        
                        <div className="custom-block custom-block-overlay">
                            
                            <div className="d-flex flex-column h-100">
                                <img
                                    src="images/businesswoman-using-tablet-analysis.jpg"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                />
                                <div className="custom-block-overlay-text d-flex">
                                    <div>
                                        <h5 className="text-white mb-2">Finance</h5>
                                        <p className="text-white">
                                            Topic Listing Template includes homepage, listing page,
                                            detail page, and contact page. You can feel free to edit and
                                            adapt for your CMS requirements.
                                        </p>
                                        <a
                                            href="topics-detail.html"
                                            className="btn custom-btn mt-2 mt-lg-3"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                    <span className="badge bg-finance rounded-pill ms-auto">
                                        25
                                    </span>
                                </div>
                                
    
                                <div className="section-overlay" />
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    )

}