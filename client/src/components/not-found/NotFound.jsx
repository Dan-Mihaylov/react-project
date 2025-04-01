import { Link } from "react-router";
export default function NotFound() {
    // 404.jsx
    return (
        <div className="container-fluid bg-light min-vh-100 d-flex align-items-center">
            <div className="row w-100 justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className="card border-0 shadow-sm">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="card-body p-4 p-md-5">
                                    <h1 className="display-4 fw-bold text-primary mb-4">404</h1>
                                    <h2 className="h3 text-secondary mb-3">Page Not Found</h2>
                                    <p className="text-muted mb-4">
                                        The page you're looking for doesn't exist or has been moved.
                                    </p>
                                    <Link to="/" className="btn btn-primary px-4 py-2">
                                        Back to Home
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-6 bg-info bg-opacity-10 d-flex align-items-center justify-content-center">
                                {/* Image container with proper sizing constraints */}
                                <div className="text-center w-100 h-100">
                                    <img
                                        src="https://images.pexels.com/photos/160514/girl-sea-binoculars-vacation-160514.jpeg"
                                        alt="404 Illustration"
                                        className="img-fluid object-fit-cover w-100 h-100"
                                        style={{ maxHeight: "100%", objectPosition: "center" }}
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};