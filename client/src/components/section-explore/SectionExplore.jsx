import { useState, useEffect } from "react";
import { useProperty } from "../../api/propertyApi";
import ExploreItem from "../explore-item/ExploreItem";

export default function SectionExplore() {

    const { getPropertiesByType } = useProperty();
    const [ propertyType, setPropertyType ] = useState('Apartment');
    const [ properties, setProperties ] = useState([]);

    useEffect(() => {

        getPropertiesByType(propertyType)
        .then(setProperties)

    }, [propertyType]);

    const propertyChangeClickHandler = (propType)=> {
        setPropertyType(propType);
    }

    return (
        <section className="explore-section section-padding" id="section_2">
            
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="mb-4">Browse Properties</h2>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="apartment-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#apartments-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="apartments-tab-pane"
                                aria-selected="true"
                                onClick={ () => propertyChangeClickHandler('Apartment') }
                            >
                                Apartments
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="houses-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#houses-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="houses-tab-pane"
                                aria-selected="false"
                                onClick={ () => propertyChangeClickHandler('House') }
                            >
                                Houses
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="villas-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#villas-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="villas-tab-pane"
                                aria-selected="false"
                                onClick={ () => propertyChangeClickHandler('Villa') }
                            >
                                Villas
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="apartments-tab-pane"
                                role="tabpanel"
                                aria-labelledby="apartments-tab"
                                tabIndex={0}
                            >

                                <div className="row">

                                {
                                    propertyType === 'Apartment'
                                    &&
                                    properties.map(property => <ExploreItem key={property._id} item={property} />)
                                }
                                    


                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="houses-tab-pane"
                                role="tabpanel"
                                aria-labelledby="houses-tab"
                                tabIndex={0}
                            >
                                <div className="row">     

                                {
                                    propertyType === 'House'
                                    &&
                                    properties.map(property => <ExploreItem key={property._id} item={property} />)
                                }

                                </div>
                            </div>

                            <div
                                className="tab-pane fade"
                                id="villas-tab-pane"
                                role="tabpanel"
                                aria-labelledby="villas-tab"
                                tabIndex={0}
                            >
                                <div className="row">

                                {
                                    propertyType === 'Villa'
                                    &&
                                    properties.map(property => <ExploreItem key={property._id} item={property} />)
                                }

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}