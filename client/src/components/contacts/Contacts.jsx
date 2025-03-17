export default function Contacts() {

    return (
        <>
            <main>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <i className="bi-back" />
                            <span>Topic</span>
                        </a>
                        <div className="d-lg-none ms-auto me-4">
                            <a href="#top" className="navbar-icon bi-person smoothscroll" />
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-lg-5 me-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="index.html#section_1">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="index.html#section_2">
                                        Browse Topics
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="index.html#section_3">
                                        How it works
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="index.html#section_4">
                                        FAQs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll" href="index.html#section_5">
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#section_5"
                                        id="navbarLightDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Pages
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-light"
                                        aria-labelledby="navbarLightDropdownMenuLink"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="topics-listing.html">
                                                Topics Listing
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item active" href="contact.html">
                                                Contact Form
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="d-none d-lg-block">
                                <a href="#top" className="navbar-icon bi-person smoothscroll" />
                            </div>
                        </div>
                    </div>
                </nav>
                <header className="site-header d-flex flex-column justify-content-center align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Homepage</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Contact Form
                                        </li>
                                    </ol>
                                </nav>
                                <h2 className="text-white">Contact Form</h2>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="section-padding section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <h3 className="mb-4 pb-2">We'd love to hear from you</h3>
                            </div>
                            <div className="col-lg-6 col-12">
                                <form
                                    action="#"
                                    method="post"
                                    className="custom-form contact-form"
                                    role="form"
                                >
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
                                                />
                                                <label htmlFor="floatingInput">Name</label>
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
                                                <label htmlFor="floatingInput">Email address</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    required=""
                                                />
                                                <label htmlFor="floatingInput">Subject</label>
                                            </div>
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    placeholder="Tell me about the project"
                                                    defaultValue={""}
                                                />
                                                <label htmlFor="floatingTextarea">
                                                    Tell me about the project
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12 ms-auto">
                                            <button type="submit" className="form-control">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 col-12 mx-auto mt-5 mt-lg-0">
                                <iframe
                                    className="google-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth"
                                    width="100%"
                                    height={250}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <h5 className="mt-4 mb-2">Topic Listing Center</h5>
                                <p>
                                    Bay St &amp;, Larkin St, San Francisco, CA 94109, United States
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="site-footer section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12 mb-4 pb-2">
                            <a className="navbar-brand mb-2" href="index.html">
                                <i className="bi-back" />
                                <span>Topic</span>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <h6 className="site-footer-title mb-3">Resources</h6>
                            <ul className="site-footer-links">
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">
                                        Home
                                    </a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">
                                        How it works
                                    </a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">
                                        FAQs
                                    </a>
                                </li>
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                            <h6 className="site-footer-title mb-3">Information</h6>
                            <p className="text-white d-flex mb-1">
                                <a href="tel: 305-240-9671" className="site-footer-link">
                                    305-240-9671
                                </a>
                            </p>
                            <p className="text-white d-flex">
                                <a href="mailto:info@company.com" className="site-footer-link">
                                    info@company.com
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    English
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Thai
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Myanmar
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            Arabic
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <p className="copyright-text mt-lg-5 mt-4">
                                Copyright © 2048 Topic Listing Center. All rights reserved.
                                <br />
                                <br />
                                Design:{" "}
                                <a rel="nofollow" href="https://templatemo.com" target="_blank">
                                    TemplateMo
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )

}