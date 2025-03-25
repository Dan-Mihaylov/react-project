import { useContext } from "react";
import { CompanyContext } from "../../contexts/CompanyContext";
import { useProperty } from "../../api/propertyApi";
import ListingForm from "../listing-form/ListingForm";

export default function AddPropertyForm() {
	const { companyName } = useContext(CompanyContext);
	const { createProperty } = useProperty();


	const formAction = async (formData) => {
		const propertyData = Object.fromEntries(formData);
		propertyData.agency = companyName;

		const address = {
			country: propertyData.country,
			city: propertyData.city,
			postcode: propertyData.postcode,
			street: propertyData.street
		}
		propertyData.address = address;

		const  {
			country, city, postcode, street, ...editedPropertyData
		} = propertyData;

		console.log(propertyData);
		console.log(editedPropertyData)
		
		createProperty(propertyData)
		.then(response => console.log('Created Listing....', response));
	}

	return <ListingForm data={{}} formAction={formAction}	/>
}
