import { Link, useSearchParams } from "react-router";
import ListingItem from "../listing-item/ListingItem";
import { useProperty } from "../../api/propertyApi";
import { useEffect, useState } from "react";

export default function Listings() {
    const { getProperties } = useProperty();
    const [properties, setProperties] = useState([]);
    const [ searchParams, _ ] = useSearchParams();


    useEffect(() => {

        getProperties(searchParams)
            .then(setProperties)

    }, [])

    return (
        <>

            <header className="site-header d-flex flex-column justify-content-center align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Homepage</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Listings
                                    </li>
                                </ol>
                            </nav>
                            <h2 className="text-white">Property Listings</h2>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 text-center">
                            <h3 className="mb-4">All Properties</h3>
                        </div>

                        <div className="col-lg-8 col-12 mt-3 mx-auto">

                            {/* Properties List Starts here */}
                            {
                                properties.map(property =>
                                    <ListingItem key={property._id} item={property} />
                                )
                            }


                        </div>

                        {/* Page paginator goes here... */}

                        <div className="col-lg-12 col-12">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">Prev</span>
                                        </a>
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            4
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            5
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </section>

            {/* Popular properties */}
            <section className="section-padding section-bg">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-12">
                            <h3 className="mb-4">Popular Properties</h3>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 mt-3 mb-4 mb-lg-0">
                            <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                    <div className="d-flex">
                                        <div>
                                            <h5 className="mb-2">Investment</h5>
                                            <p className="mb-0">
                                                Lorem Ipsum dolor sit amet consectetur
                                            </p>
                                        </div>
                                        <span className="badge bg-finance rounded-pill ms-auto">
                                            30
                                        </span>
                                    </div>
                                    <img
                                        src="images/topics/undraw_Finance_re_gnv2.png"
                                        className="custom-block-image img-fluid"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 mt-3 mb-4 mb-lg-0">
                            <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                    <div className="d-flex">
                                        <div>
                                            <h5 className="mb-2">Investment</h5>
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum architecto molestias odio itaque dignissimos illo repellendus distinctio maiores veritatis, debitis a quidem voluptate unde facilis iste ullam perspiciatis minus earum?
                                            </p>
                                        </div>
                                        <span className="badge bg-finance rounded-pill ms-auto">
                                            30
                                        </span>
                                    </div>
                                    <img
                                        src="images/topics/undraw_Finance_re_gnv2.png"
                                        className="custom-block-image img-fluid"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>

            </section>

        </>

    )

}