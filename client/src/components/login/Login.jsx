import { useState, useActionState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { CompanyContext } from "../../contexts/CompanyContext";
import { useLogin } from "../../api/authApi";

export default function Login() {
    const [error, setError] = useState("");
    const { companyLoginHandler } = useContext(CompanyContext);
    const { login } = useLogin();
    const navigate = useNavigate();


    const formSubmitHandler = async (initialState, formData) => {
        const { email, password } = Object.fromEntries(formData);

        const authData = await login(email, password);

        if (authData.message) {
            setError(authData.message);
            return;
        }

        companyLoginHandler(authData);
        navigate('/');
    };

    const [initialState, formAction] = useActionState(formSubmitHandler, {
        email: '',
        password: ''
    });

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="wrapper d-flex bg-white rounded shadow-lg overflow-hidden" style={{ maxWidth: "900px", width: "100%" }}>
                {/* Left Side Image */}
                <div className="d-none d-md-block" style={{ width: "50%", background: `url('/images/houses-blue.jpg') bottom/cover no-repeat` }}>
                </div>

                {/* Login Form */}
                <div className="p-4 flex-grow-1 form-grow">
                    <h6 className="mb-3 text-left">Login</h6>
                    <small>
                        Don't have an account? <Link to='/register'>Register here</Link>
                    </small>
                    <br />

                    {error && <div className="alert alert-danger">{error}</div>}

                    <form action={formAction}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="loginEmail">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                autoComplete="email"
                                id="loginEmail"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="loginPassword">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                autoComplete="current-password"
                                id="loginPassword"
                                required
                            />
                        </div>

                        <button type="submit" className="form-control btn btn-primary" style={{ backgroundColor: "#80d0c7", border: "none" }}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
