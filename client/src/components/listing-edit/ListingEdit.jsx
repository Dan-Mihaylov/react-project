import { useContext, useEffect, useState } from "react";
import ListingForm from "../listing-form/ListingForm";
import { CompanyContext } from "../../contexts/CompanyContext";
import { useProperty } from "../../api/propertyApi";
import { useNavigate, useParams } from "react-router";
import { propertyFormSchema } from "../../schemas/propertyFormSchema";


export default function ListingEdit() {
    const { companyName } = useContext(CompanyContext);
    const { propId } = useParams();
    const [propData, setPropData] = useState({});
    const { updateProperty, getProperty } = useProperty();
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        getProperty(propId)
            .then(setPropData)
    }, []);

    const formAction = async (formData) => {
        setIsPending(true);
        setErrors([]);

        const propertyData = Object.fromEntries(formData);

        try {
            await propertyFormSchema.validate(propertyData, { abortEarly: false });
            propertyData.agency = companyName;
            await updateProperty(propId, propertyData)
                .then(navigate(`/listings/${propId}/details`))
        } catch (error) {
            if (error.inner) {
                const tempErrors = [];
                error.inner.forEach((e) => {
                    tempErrors.push(e.message);
                });
                setErrors(tempErrors);
            } else {
                setErrors([error.message])
            };
        };
        setIsPending(false);
    };

    return <ListingForm
        data={propData}
        formAction={formAction}
        isPending={isPending}
        errors={errors}
    />

};
