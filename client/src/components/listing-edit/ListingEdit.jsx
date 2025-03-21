import { useContext, useEffect, useState } from "react";
import ListingForm from "../listing-form/ListingForm";
import { CompanyContext } from "../../contexts/CompanyContext";
import { useProperty } from "../../api/propertyApi";
import { useNavigate, useParams } from "react-router";

export default function ListingEdit () {
    const { companyName } = useContext(CompanyContext);
    const { propId } = useParams();
    const [ propData, setPropData ] = useState({});
    const { updateProperty, getProperty } = useProperty();
    const navigate = useNavigate();

    useEffect(() => {
        getProperty(propId)
        .then(setPropData)
    }, []);

    const formAction = async (formData) => {
        const propertyData = Object.fromEntries(formData);
        propertyData.agency = companyName;

        updateProperty(propId, propertyData)
        .then(navigate(`/listings/${propId}/details`))

    }

    return <ListingForm data= { propData } formAction= { formAction } />

};
