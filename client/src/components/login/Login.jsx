import { useState, useActionState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { CompanyContext } from "../../contexts/CompanyContext";
import { useLogin } from "../../api/authApi";

export default function Login() {
    const { companyLoginHandler } = useContext(CompanyContext);
    const { login } = useLogin();
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const formSubmitHandler = async (initialState, formData) => {
        const {email, password} = Object.fromEntries(formData);

        // TODO: Hash password and compare hashes, add the hashing to the register as well, before entering the pass in the db.
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
        <div className="container mt-4" style={{ maxWidth: "25rem" }}>
            <div className="card shadow p-4">
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

                    <button type="submit" className="form-control" style={{ backgroundColor: "#80d0c7" }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
