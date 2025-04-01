import { useLatestProperties } from "../../api/propertyApi";
import { useEffect, useState } from "react";
import ExploreItem from "../explore-item/ExploreItem";
import ExploreItemLoader from "../explore-item/ExploreItemLoader";

export default function SectionFeatured() {

    const { latestProperties } = useLatestProperties();
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);

        latestProperties()
            .then((response) => {
                if (response.error) {
                    throw new Error(response.message);
                }
                setProperties(response);
                return response;
            })
            .catch((error) => {
                setError(error.message);
            });

    }, []);

    return (

        <section className="featured-section">

            <div className="container">

                <div className="row justify-content-center">
                    {
                        error &&
                        <div className="col-md-8 col-lg-6">
                            <div className={`form-message-container failure text-center`}>
                                <p>{error}</p>
                            </div>
                        </div>
                    }
                    {
                        properties.length > 0
                        ?
                        properties.map(property => <ExploreItem key={property._id} item={property} />)
                        :
                        Array.from([1, 2]).map(el => <ExploreItemLoader key={el} />)
                    }


                </div>
            </div>
        </section>
    )

}