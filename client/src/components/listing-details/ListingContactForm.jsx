import { useContactForm } from "../../api/contactsApi"
import * as yup from 'yup';
import { useActionState, useState } from "react";

const listingContactSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
})

export default function ListingContactForm({
    listing,
}) {

    const { submitForm } = useContactForm();
    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(true);
    const [errors, setErrors] = useState([]);

    const formSubmitHandler = async (_, formData) => {
        setMessage(null);
        setIsPending(true);
        setSuccess(true);
        setErrors([]);
        console.log('SUBMIT...')
        console.log(errors);

        try {
            await listingContactSchema.validate(Object.fromEntries(formData), { abortEarly: false });
            
            formData.append('Property ID', listing._id);
            formData.append('Property', listing.title);
            formData.append('Price', listing.price);

            const response = await submitForm(formData);
            if (!response.success) {
                throw new Error(response.message);
            };
            setMessage(response.message);

        } catch (error) {
            console.log(error)
            setSuccess(false);
            if (error.inner) {
                const tempErrors = [];
                error.inner.forEach((e) => {
                    tempErrors.push(e.message);
                });
                setErrors(tempErrors);
            } else {
                setMessage(error.message)
            };
        };

        setIsPending(false);
    };


    const [_, formAction, __] = useActionState(formSubmitHandler, {
        email: '',
    })


    return (
        <form
            className="custom-form subscribe-form"
            action={formAction}
        >

            {message
                &&
                <div className={`form-message-container ${success ? 'success' : 'failure'}`}>
                    <p>{message}</p>
                </div>
            }

            {
                errors.length > 0
                &&
                <div className={`form-message-container ${success ? 'success' : 'failure'}`}>
                    {
                        errors.map((message, i) => <p key={i}> {message}</p>)
                    }
                </div>
            }

            <h4 className="mb-4 pb-2">Want us to get in touch with you about this property?</h4>
            <input
                type="email"
                name="email"
                id="email"
                pattern="[^ @]*@[^ @]*"
                className="form-control"
                placeholder="example@email.com"
                required=""
            />
            <div className="col-lg-12 col-12">
                <button type="submit" className="form-control" disabled={isPending ? "disabled" : null}>
                    Get in touch
                </button>
            </div>
        </form>
    )
}