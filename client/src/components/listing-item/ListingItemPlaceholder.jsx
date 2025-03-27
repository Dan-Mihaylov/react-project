export default function ListingItemPlaceholder() {


    return (
        <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5" style={{minHeight: "313px"}}>
            <div className="d-flex">
                <div className="custom-block-image img-fluid placeholder placeholder-wave" style={{ width: "200px", height: "200px" }}></div>

                <div className="custom-block-topics-listing-info d-flex">
                    <div>
                        <h6 className="placeholder-wave">
                            <span className="placeholder col-8"></span>
                        </h6>

                        <h5 className="placeholder-wave">
                            <span className="placeholder col-9"></span>
                        </h5>

                        <p className="placeholder-wave">
                            <span className="placeholder col-12"></span>
                        </p>

                        <a className="btn custom-btn mt-3 mt-lg-4 disabled placeholder">Property Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
}