import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function ListingItem({
    item,
}) {

    const [shortDescription, setShortDescription] = useState('');

    useEffect(() => {

        if (!item.description) {
            return;
        };

        const shortDescription = item.description.length > 100
            ? `${item.description.slice(0, 100)}...`
            : item.description;

        setShortDescription(shortDescription);
    }, [item])

    return (
        <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
            <div className="d-flex">
                <img
                    src={item.thumbnail}
                    className="custom-block-image img-fluid"
                    alt=""
                />
                <div className="custom-block-topics-listing-info d-flex">
                    <div>
                        <h6>£{Number(item.price).toLocaleString('en-US')}</h6>
                        <h5 className="mb-2">{item.title}</h5>
                        <p className="mb-0">
                            {shortDescription}
                        </p>
                        <Link
                            to={`/listings/${item._id}/details`}
                            className="btn custom-btn mt-3 mt-lg-4"
                        >
                            Property Details
                        </Link>
                    </div>
                    <span className="badge bg-design rounded-pill ms-auto">
                        14
                    </span>
                </div>
            </div>
        </div>
    )

}