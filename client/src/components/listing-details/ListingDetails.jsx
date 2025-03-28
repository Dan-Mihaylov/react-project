import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useProperty } from "../../api/propertyApi";
import { CompanyContext } from "../../contexts/CompanyContext";
import styles from './ListingDetails.module.css';
import ImageShow from "../image-show/ImageShow";
import { useImageShow } from "../../hooks/useImageShow";
import ListingContactForm from "./ListingContactForm";

export default function ListingDetails() {
    const [property, setProperty] = useState({});
    const { _id } = useContext(CompanyContext);
    const { propId } = useParams();
    const { getProperty } = useProperty();
    const { backdropClickHandler, imageClickHandler, imageUrl, showImage } = useImageShow();

    useEffect(() => {

        getProperty(propId)
            .then(setProperty)

    }, [propId])


    return (
        <>
            {showImage
                &&
                <ImageShow imageUrl={imageUrl} onBackdropClick={backdropClickHandler} />
            }
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
                                {
                                    property._ownerId === _id
                                    &&
                                    <Link to={`/listings/${propId}/edit`} className={styles['edit-property-button']}>
                                        Edit Property
                                    </Link>
                                }
                                <p href="#top" className="custom-icon"> £{Number(property.price).toLocaleString('en-US')} </p>
                            </div>

                        </div>

                        <div className="col-lg-5 col-12">
                            <div className="topics-detail-block bg-white shadow-lg">
                                <img
                                    src={property.thumbnail}
                                    className="topics-detail-block-image img-fluid"
                                    onClick={imageClickHandler}
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

                            <blockquote style={{ textAlign: "left", width: "100%", margin: "0" }}>
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
                                    <li>
                                        Address:
                                        <ul>
                                            <li>Country: {property.country}</li>
                                            <li>City: {property.city}</li>
                                            <li>Street: {property.street}</li>
                                            <li>Postcode: {property.postcode}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </blockquote>

                            <div className="row my-4">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <img
                                        src={property.image1}
                                        className="topics-detail-block-image img-fluid"
                                        onClick={imageClickHandler}
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mt-md-0">
                                    <img
                                        src={property.image2}
                                        className="topics-detail-block-image img-fluid"
                                        onClick={imageClickHandler}
                                    />
                                </div>
                            </div>
                            <p>
                                <strong>{property.title}</strong> listing has been added by the agency <strong>{property.agency}</strong>. If you are interested in the current property and
                                would like to hear more about it from the advertiser, please fill in your email in the provided form bellow.
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

                            <ListingContactForm listing={property} />

                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}