import ContactsForm from "./ContactsForm";

export default function Contacts() {

    return (
        <>

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
                                {/* Contacts Form goes here */}
                                <ContactsForm />
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
                                <h5 className="mt-4 mb-2">HomeIq headquarters</h5>
                                <p>
                                    Bay St &amp;, Larkin St, San Francisco, CA 94109, United States
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
        </>

    )

}