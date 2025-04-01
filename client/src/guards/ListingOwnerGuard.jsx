import { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../contexts/CompanyContext";
import { Navigate, Outlet, useParams } from "react-router";
import { useProperty } from "../api/propertyApi";
import ListingForm from "../components/listing-form/ListingForm";

export default function ListingOwnerGuard () {
    const [ hasAccess, setHasAccess ] = useState(null);
    const { _id } = useContext(CompanyContext);
    const { propId } = useParams();
    const { getProperty } = useProperty();
    
    useEffect(() => {
        getProperty(propId)
        .then( (property) => {
             setHasAccess(property._ownerId === _id);
            });
    }, [propId]);

    if (hasAccess === null) return <ListingForm data={{_ownerId: _id}} />;

    return hasAccess ? <Outlet /> : <Navigate to='/' />;

}