import { useActionState, useState } from "react";
import { useContactForm } from "../../api/contactsApi";
import * as yup from 'yup';


const contactSchema = yup.object().shape({
    name: yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    subjectLine: yup.string().required("Subject is required"),
    message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});



export default function ContactsForm() {
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

        try {

            await contactSchema.validate(Object.fromEntries(formData), { abortEarly: false });

            const response = await submitForm(formData);
            if (!response.success) {
                throw new Error(response.message)
            };
            setMessage(response.message);

        } catch (error) {
            if (error.inner) {
                setSuccess(false);
                const tempErrors = [];
                error.inner.forEach((e) => {
                    tempErrors.push(e.message);
                });
                setErrors(tempErrors);
            } else {
                setMessage(error.message);
            };
        };

        setIsPending(false);

    };

    const [_, formAction, __] = useActionState(formSubmitHandler, {
        name: '',
        email: '',
        subjectLine: '',
        message: '',
    });

    return (
        <form action={formAction} className="custom-form contact-form">

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
                        errors.map((message, i) => <p key={i}> {message}</p> )
                    }
                </div>
            }

            <div className="row">

                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            placeholder="Name"
                            required=""
                            autoComplete="name"
                        />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-floating">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            className="form-control"
                            placeholder="Email address"
                            required=""
                        />
                        <label htmlFor="email">Email address</label>
                    </div>
                </div>

                <div className="col-lg-12 col-12">
                    <div className="form-floating">
                        <input
                            type="text"
                            name="subjectLine"
                            id="subjectLine"
                            className="form-control"
                            placeholder="Subject"
                            required=""
                        />
                        <label htmlFor="subjectLine">Subject</label>
                    </div>
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Tell me about the project"
                            defaultValue={""}
                        />
                        <label htmlFor="message">
                            Let us know how can we help
                        </label>
                    </div>
                </div>

                <div className="col-lg-4 col-12 ms-auto">
                    <button type="submit" className="form-control" disabled={isPending ? "disabled" : null}>
                        Submit
                    </button>
                </div>

            </div>
        </form>
    )

}