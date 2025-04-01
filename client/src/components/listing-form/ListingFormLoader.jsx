export default function ListingFormLoader() {

    return (
        <div className="container mt-4">
            <div className="card shadow p-4">
                <h5 className="mb-3 placeholder-glow">
                    <span className="placeholder col-6"></span>
                </h5>

                <form>
                    {/* Title & Type & Thumbnail */}
                    <div className="row">
                        {Array(3).fill().map((_, i) => (
                            <div className="col-md-4" key={i}>
                                <div className="mb-3 placeholder-glow">
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-10 mt-2"></span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Address */}
                    <div className="row">
                        {Array(4).fill().map((_, i) => (
                            <div className={`col-md-${i === 3 ? "8" : "4"}`} key={i}>
                                <div className="mb-3 placeholder-glow">
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-10 mt-2"></span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Price, Bedrooms, Bathrooms, Sq. Meters */}
                    <div className="row">
                        {Array(4).fill().map((_, i) => (
                            <div className="col-md-3" key={i}>
                                <div className="mb-3 placeholder-glow">
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-8 mt-2"></span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Garage & Garden Checkboxes */}
                    <div className="row mt-3">
                        <div className="col-md-3">
                            <div className="placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </div>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="row mt-3">
                        {Array(2).fill().map((_, i) => (
                            <div className="col-md-6" key={i}>
                                <div className="mb-3 placeholder-glow">
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-10 mt-2"></span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="mb-3 placeholder-glow">
                        <span className="placeholder col-12"></span>
                        <span className="placeholder col-12 mt-2"></span>
                        <span className="placeholder col-8 mt-2"></span>
                    </div>

                    {/* Submit Button */}
                    <div className="d-grid">
                        <span className="btn btn-primary disabled placeholder col-12"></span>
                    </div>
                </form>
            </div>
        </div>

    )

}