import { useShortDescription } from "../../hooks/useShortDescription"

export default function ExploreItem({
    item,
}) {

    const { shortDescription } = useShortDescription(item.description);

    return (
        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
            <div className="custom-block bg-white shadow-lg">
                <a href="topics-detail.html">
                    <div className="d-flex">
                        <div>
                            <h6>£{Number(item.price).toLocaleString('en-US')}</h6>
                            <h5 className="mb-2">{item.title}</h5>
                            <p className="mb-0">
                                {shortDescription}
                            </p>
                        </div>
                        {/* <span style={{minWidth: "10rem",}}>140 000</span> */}
                    </div>
                    <img
                        src={item.thumbnail}
                        className="custom-block-image img-fluid"
                        alt={item.title}
                    />
                </a>
            </div>
        </div>
    )

}