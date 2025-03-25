import { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../contexts/CompanyContext";
import { Navigate, Outlet, useParams } from "react-router";
import { useProperty } from "../api/propertyApi";
import ListingForm from "../components/listing-form/ListingForm";

export default function ListingOwnerGuard () {
    const { isAuthenticated, _id } = useContext(CompanyContext);
    const { propId } = useParams();
    const [ hasAccess, setHasAccess ] = useState(null);
    const { getProperty } = useProperty();
    
    useEffect(() => {

        if (!isAuthenticated) {
            return <Navigate to='/login' />
        };

        getProperty(propId)
        .then( (property) => {
             setHasAccess(property._ownerId === _id);
            console.log('PID: ', property._ownerId, '\nOID: ', _id);

            });
    }, []);

    if (hasAccess === null) return <ListingForm data={{_ownerId: _id}} />;

    return hasAccess ? <Outlet /> : <Navigate to='/' />;

}