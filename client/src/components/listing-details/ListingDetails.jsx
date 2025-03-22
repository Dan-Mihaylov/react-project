import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useProperty } from "../../api/propertyApi";

export default function ListingDetails(props) {
    const [property, setProperty] = useState({});
    const { propId } = useParams();
    const { getProperty } = useProperty();

    useEffect(() => {

        getProperty(propId)
        .then(setProperty);

    }, [propId])

    return (
        <>

                <header className="site-header d-flex flex-column justify-content-center align-items-center">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            
                            <div className="col-lg-5 col-12 mb-5">

                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Homepage</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            £{Number(property.price).toLocaleString('en-US')}
                                        </li>
                                    </ol>
                                </nav>

                                <h2 className="text-white">
                                    {property.title}
                                </h2>

                                <div className="d-flex align-items-center mt-5">
                                    <a
                                        href="#more-info"
                                        className="btn custom-btn custom-border-btn smoothscroll me-4"
                                    >
                                        More Info
                                    </a>
                                    <p href="#top" className="custom-icon"> £{Number(property.price).toLocaleString('en-US')} </p>
                                </div>

                            </div>

                            <div className="col-lg-5 col-12">
                                <div className="topics-detail-block bg-white shadow-lg">
                                    <img
                                        src={property.thumbnail}
                                        className="topics-detail-block-image img-fluid"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                </header>
                
                <section
                    className="topics-detail-section section-padding"
                    id="more-info"
                >

                    <div className="container">

                        <div className="row">
                            <div className="col-lg-8 col-12 m-auto">
                                <h3 className="mb-4">{property.title}</h3>
                                <p>
                                   {property.description}
                                </p>

                                <blockquote style={{textAlign: "left", width: "100%", margin: "0"}}>
                                    <ul>
                                        <li>
                                            Bedrooms: {property.bedrooms}
                                        </li>
                                        <li>
                                            Bathrooms: {property.bathrooms}
                                        </li>
                                        <li>
                                            Garage: {property.garage ? "Available" : "Not available"}
                                        </li>
                                        <li>
                                            Garden: {property.garden ? "Available" : "Not available"}
                                        </li>
                                        <li>Address: {property.address} </li>
                                    </ul>
                                </blockquote>

                                <div className="row my-4">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <img
                                            src={property.image1}
                                            className="topics-detail-block-image img-fluid"
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mt-md-0">
                                        <img
                                            src={property.image2}
                                            className="topics-detail-block-image img-fluid"
                                        />
                                    </div>
                                </div>
                                <p>
                                    Most people start with freelancing skills they already have as a
                                    side hustle to build up income. This extra cash can be used for a
                                    vacation, to boost up savings, investing, build business.
                                </p>
                            </div>
                        </div>

                    </div>

                </section>

                <section className="section-padding section-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-12">
                                <img
                                    src="images/rear-view-young-college-student.jpg"
                                    className="newsletter-image img-fluid"
                                    alt=""
                                />
                            </div>
                            
                            <div className="col-lg-5 col-12 subscribe-form-wrap d-flex justify-content-center align-items-center">
                                <form
                                    className="custom-form subscribe-form"
                                    action="#"
                                    method="post"
                                    role="form"
                                >
                                    <h4 className="mb-4 pb-2">Want us to get in touch with you about this property?</h4>
                                    <input
                                        type="email"
                                        name="interested"
                                        id="interested-email"
                                        pattern="[^ @]*@[^ @]*"
                                        className="form-control"
                                        placeholder="example@email.com"
                                        required=""
                                    />
                                    <div className="col-lg-12 col-12">
                                        <button type="submit" className="form-control">
                                            Get in touch
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

        </>

    )

}