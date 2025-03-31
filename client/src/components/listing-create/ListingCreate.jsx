import { useContext, useState } from "react";
import { CompanyContext } from "../../contexts/CompanyContext";
import { useProperty } from "../../api/propertyApi";
import ListingForm from "../listing-form/ListingForm";
import { propertyFormSchema } from "../../schemas/propertyFormSchema";
import { useNavigate } from "react-router";

export default function AddPropertyForm() {
	const { companyName } = useContext(CompanyContext);
	const { createProperty } = useProperty();
	const [isPending, setIsPending] = useState(false);
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();


	const formAction = async (formData) => {
		setIsPending(true);
		setErrors([]);

		const propertyData = Object.fromEntries(formData);
		propertyData.agency = companyName;

		try {
			await propertyFormSchema.validate(propertyData, { abortEarly: false });
			await createProperty(propertyData)
				.then(property => {
					navigate(`/listings/${property._id}/details`);
				});
		} catch (error) {
			if (error.inner) {
				const tempErrors = [];
				error.inner.forEach((e) => {
					tempErrors.push(e.message);
				});
				setErrors(tempErrors);
			} else {
				setErrors([error.message]);
			};
		};
		setIsPending(false);
	}

	return <ListingForm
		data={{}}
		formAction={formAction}
		isPending={isPending}
		errors={errors}
	/>
}
