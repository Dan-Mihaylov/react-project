export default function SectionFaq() {

    return (

        <section className="faq-section section-padding" id="section_4">
            
            <div className="container">
                
                <div className="row">
                    
                    <div className="col-lg-6 col-12">
                        <h2 className="mb-4">Frequently Asked Questions</h2>
                    </div>

                    <div className="clearfix" />
                    <div className="col-lg-5 col-12">
                        <img src="images/faq_graphic.jpg" className="img-fluid" alt="FAQs" />
                    </div>

                    <div className="col-lg-6 col-12 m-auto">
                        
                        <div className="accordion" id="accordionExample">
                            
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        What is HomeIq?
                                    </button>
                                </h2>
                                
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        HomeIq is a real estate agencies cluster specializing in connecting home-seekers
                                        with home-sellers {" "}
                                        <strong>
                                        all around the world.
                                        </strong>{" "}
                                        If you are a home-seeker this is the best place to start your journey.
                                    </div>
                                </div>
                            </div>
                            
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        How to find your dream home?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        You can use our homepage search engine, to specify the home location you are looking for,
                                        or you can directly browse our listings.
                                    </div>
                                </div>
                            </div>
                            
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Do I need to pay anything?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        We are not charging you for consultations, viewing or organizing documents for you. We do get
                                        a small commission of 120% when the deal has been finalized.
                                    </div>
                                </div>
                            </div>
                            
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        I like a home on your website, now what?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Under each home listing, there is a small form you can fill to let the agency advertising it know you are interested
                                        in the property. Once you have filled this form, they will be in touch with you, either in the same day
                                        or on the next working day.
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </section>
    )

}