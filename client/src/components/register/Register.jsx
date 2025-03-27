import React, { useState, useActionState, useContext } from "react";
import { useRegister } from "../../api/authApi";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { CompanyContext } from "../../contexts/CompanyContext";

export default function Register() {
    const { companyLoginHandler } = useContext(CompanyContext);
    const { register } = useRegister();
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const formSubmitHandler = async (initialState, formData) => {

        const data = Object.fromEntries(formData);

        if (data.password !== data.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        setError("");

        // TODO: Other fields validations ...
        delete data.confirmPassword;
        
        const authData = await register(data);
        delete authData.password;

        if (authData.message) {
            setError(authData.message);
            return;
        }

        companyLoginHandler(authData);
        navigate('/');

    };

    const [initialState, formAction, callbackLink] = useActionState(
        formSubmitHandler,
        {
            email: '',
            password: '',
            companyName: '',
            companyAddress: '',
            companyImageUrl: ''
        }
    )

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="wrapper d-flex bg-white rounded shadow-lg overflow-hidden" style={{ maxWidth: "900px", width: "100%" }}>
                {/* Left Side Image */}
                <div className="d-none d-md-block" style={{ width: "50%", background: `url('/images/houses-blue.jpg') center/cover no-repeat` }}>
                </div>
    
                {/* Registration Form */}
                <div className="p-4 flex-grow-1 form-grow">
                    <h6 className="mb-3 text-left">Agency Registration</h6>
                    <small>
                        Already have an account? Follow this link to <br /><Link to='/login'> log into your account</Link>
                    </small>
                    <br />
    
                    {error && <div className="alert alert-danger">{error}</div>}
    
                    <form action={formAction}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                autoComplete="email"
                                id="email"
                                required
                            />
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                autoComplete="current-password"
                                id="password"
                                required
                            />
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label" htmlFor="passwordConfirm">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirm password"
                                autoComplete="new-password"
                                id="passwordConfirm"
                                required
                            />
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label" htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                className="form-control"
                                placeholder="Enter company name"
                                autoComplete="name"
                                id="companyName"
                                required
                            />
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label" htmlFor="address">Company Address</label>
                            <input
                                type="text"
                                name="companyAddress"
                                className="form-control"
                                placeholder="Enter company address"
                                autoComplete="street-address"
                                id="address"
                                required
                            />
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label" htmlFor="imageUrl">Company Image URL</label>
                            <input
                                type="url"
                                name="companyImageUrl"
                                className="form-control"
                                placeholder="Enter image URL"
                                id="imageUrl"
                            />
                        </div>
    
                        <button type="submit" className="form-control btn btn-primary" style={{ backgroundColor: "#80d0c7", border: "none" }}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
    


    // return (

    //     <div className="container mt-4" style={{ maxWidth: "25rem" }}>

    //         <div className="card shadow p-4">
    //             <h6 className="mb-3 text-left">Agency Registration</h6>
    //             <small>
    //                 Already have an account? Follow this link to <br /><Link to='/login'> log into your account</Link>
    //             </small>
    //             <br />

    //             {error && <div className="alert alert-danger">{error}</div>}

    //             <form action={formAction}>
    //                 <div className="mb-3">
    //                     <label className="form-label" htmlFor="email">Email Address</label>
    //                     <input
    //                         type="email"
    //                         name="email"
    //                         className="form-control"
    //                         placeholder="Enter email"
    //                         autoComplete="email"
    //                         id="email"
    //                         required
    //                     />
    //                 </div>

    //                 <div className="mb-3">
    //                     <label className="form-label" htmlFor="password">Password</label>
    //                     <input
    //                         type="password"
    //                         name="password"
    //                         className="form-control"
    //                         placeholder="Enter password"
    //                         autoComplete="current-password"
    //                         id="password"
    //                         required
    //                     />
    //                 </div>

    //                 <div className="mb-3">
    //                     <label className="form-label" htmlFor="passwordConfirm">Confirm Password</label>
    //                     <input
    //                         type="password"
    //                         name="confirmPassword"
    //                         className="form-control"
    //                         placeholder="Confirm password"
    //                         autoComplete="new-password"
    //                         id="passwordConfirm"
    //                         required
    //                     />
    //                 </div>

    //                 <div className="mb-3">
    //                     <label className="form-label" htmlFor="companyName">Company Name</label>
    //                     <input
    //                         type="text"
    //                         name="companyName"
    //                         className="form-control"
    //                         placeholder="Enter company name"
    //                         autoComplete="name"
    //                         id="companyName"
    //                         required
    //                     />
    //                 </div>

    //                 <div className="mb-3">
    //                     <label className="form-label" htmlFor="address">Company Address</label>
    //                     <input
    //                         type="text"
    //                         name="companyAddress"
    //                         className="form-control"
    //                         placeholder="Enter company address"
    //                         autoComplete="street-address"
    //                         id="address"
    //                         required
    //                     />
    //                 </div>

    //                 <div className="mb-3">
    //                     <label className="form-label" htmlFor="imageUrl">Company Image URL</label>
    //                     <input
    //                         type="url"
    //                         name="companyImageUrl"
    //                         className="form-control"
    //                         placeholder="Enter image URL"
    //                         id="imageUrl"
    //                     />
    //                 </div>

    //                 <button type="submit" className="form-control" style={{ backgroundColor: "#80d0c7" }}>
    //                     Register
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // );
};
