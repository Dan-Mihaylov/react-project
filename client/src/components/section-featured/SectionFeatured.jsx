import { useLatestProperties } from "../../api/propertyApi";
import { useEffect, useState } from "react";
import ExploreItem from "../explore-item/ExploreItem";

export default function SectionFeatured() {

    const { latestProperties } = useLatestProperties();
    const [ properties, setProperties ] = useState([]);

    useEffect(() => {

        latestProperties()
        .then(setProperties)

    }, [])

    return (

        <section className="featured-section">
            
            <div className="container">
                
                <div className="row justify-content-center">
                    
                {
                    properties
                    &&
                    properties.map(property => <ExploreItem key={property._id} item={property}/>)
                }
                    

                </div>
            </div>
        </section>
    )

}