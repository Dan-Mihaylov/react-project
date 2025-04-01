import { useShortDescription } from "../../hooks/useShortDescription";

export default function ListingItem({
    item,
}) {

    const { shortDescription } = useShortDescription(item.description)

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
                        <a
                            href={`/listings/${item._id}/details`}
                            className="btn custom-btn mt-3 mt-lg-4"
                        >
                            Property Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}