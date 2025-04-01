import { useSearchParams } from "react-router";
import { listingsPageSize, useLatestProperties, useProperty } from "../../api/propertyApi";
import { useEffect, useState } from "react";
import ListingItem from "../listing-item/ListingItem";
import ExploreItem from "../explore-item/ExploreItem";
import ExploreItemLoader from "../explore-item/ExploreItemLoader";
import Paginator from "../paginator/Paginator";
import ListingItemPlaceholder from "../listing-item/ListingItemPlaceholder";

const latestPageSize = 3;

export default function Listings() {
    const [properties, setProperties] = useState([]);
    const [featuredProperties, setFeaturedProperties] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams({ 'pageSize': listingsPageSize });
    const [error, setError] = useState(null);
    const { getProperties } = useProperty();
    const { latestProperties } = useLatestProperties();

    useEffect(() => {
        setIsPending(true);
        setProperties([]);

        getProperties(searchParams)
            .then((response) => {
                if (response.error) {
                    throw new Error(response.message);
                };
                setProperties(response);
                return response;
            })
            .then(setIsPending(false))
            .catch((error) => {
                setError(error.message);
            });

        if (featuredProperties.length == 0) {
            latestProperties(latestPageSize)
                .then((response) => {
                    if (response.error) {
                        return;
                    };
                    setFeaturedProperties(response);
                    return response;
                });
        };

    }, [searchParams]);

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

                            {!error
                                ? < h3 className="mb-4">{properties.length > 0 ? 'All Properties' : 'No Properties Yet'}</h3>
                                : <div className={`form-message-container failure`}>
                                    <p>{error}</p>
                                </div>
                            }
                        </div>

                        <div className="col-lg-8 col-12 mt-3 mx-auto" style={{ minHeight: "1085px" }}>

                            {/* Properties List Starts here */}
                            {
                                properties.length > 0 && !isPending
                                    ? properties.map(property =>
                                        <ListingItem key={property._id} item={property} />
                                    )
                                    : <>
                                        <ListingItemPlaceholder />
                                        <ListingItemPlaceholder />
                                        <ListingItemPlaceholder />
                                    </>
                            }
                        </div>

                        {/* Page paginator goes here... */}
                        <Paginator setSearchParams={setSearchParams} />
                    </div>
                </div>
            </section >

            {/* Latest Additions */}
            < section className="section-padding section-bg" >

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12 col-12">

                            {!error
                                ? < h3 className="mb-4">Latest Properties</h3>
                                : <div className={`form-message-container failure text-center`}>
                                    <p>{error}</p>
                                </div>
                            }
                        </div>

                        {
                            featuredProperties && featuredProperties.length > 0
                                ? featuredProperties.map(property => <ExploreItem key={property._id} item={property} />)
                                : Array.from([1, 2, 3]).map(el => <ExploreItemLoader key={el} />)

                        }


                    </div>
                </div>

            </section >

        </>

    )

}