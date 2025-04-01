import { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../../contexts/CompanyContext";
import { useProperty } from "../../api/propertyApi";
import { useNavigate, useParams } from "react-router";
import { propertyFormSchema } from "../../schemas/propertyFormSchema";
import ListingForm from "../listing-form/ListingForm";


export default function ListingEdit() {
    const [propData, setPropData] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [errors, setErrors] = useState([]);
    const { companyName } = useContext(CompanyContext);
    const { propId } = useParams();
    const { updateProperty, getProperty } = useProperty();
    const navigate = useNavigate();

    useEffect(() => {

        getProperty(propId)
            .then((response) => {
                if (response.error) {
                    throw new Error(response.message);
                };
                setPropData(response);
                return response;
            })
            .catch((error) => {
                setErrors([error.message]);
            });
    }, [propId]);

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
        edit={true}
    />

};
