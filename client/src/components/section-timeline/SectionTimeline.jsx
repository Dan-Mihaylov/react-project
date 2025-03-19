export default function SectionTimeline() {

    return (
        <section className="timeline-section section-padding" id="section_3">
            <div className="section-overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-white mb-4">How does it work?</h2>
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                        <div className="timeline-container">
                            <ul
                                className="vertical-scrollable-timeline"
                                id="vertical-scrollable-timeline"
                            >
                                <div className="list-progress">
                                    <div className="inner" />
                                </div>
                                <li>
                                    <h4 className="text-white mb-3">Search for your home by location</h4>
                                    <p className="text-white">
                                        You have finally decided on you first or next home purchase location. Simply 
                                        search for the location in our homepage search bar, and view properties in the area
                                        in seconds.
                                    </p>
                                    <div className="icon-holder">
                                        <i className="bi-search" />
                                    </div>
                                </li>
                                <li>
                                    <h4 className="text-white mb-3">
                                        Browse listings and get in touch with us
                                    </h4>
                                    <p className="text-white">
                                        Browse the listings that we have on our page and get in touch with us as soon as you find the one that you like.
                                        We will be in touch with you shortly with more details to proceed to the next step in your home purchasing experience.
                                    </p>
                                    <div className="icon-holder">
                                        <i className="bi-bookmark" />
                                    </div>
                                </li>
                                <li>
                                    <h4 className="text-white mb-3">Make an offer and buy your new home</h4>
                                    <p className="text-white">
                                        If you are finally happy with the property you have viewed, make an offer, we will deliver it to the home-seller 
                                        upon offer acceptance, you will be ready to move-in in no time.
                                    </p>
                                    <div className="icon-holder">
                                        <i className="bi-book" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}