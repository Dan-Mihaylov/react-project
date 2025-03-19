import { useContext } from "react";
import { Link } from "react-router";
import { CompanyContext } from "../../contexts/CompanyContext";

export default function Header() {
    const { companyImageUrl } = useContext(CompanyContext);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <i className="bi-back" />
                    <span> HomeIq</span>
                </Link>
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
                            <a className="nav-link click-scroll" href="/#section_1">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="/#section_2">
                                Browse Topics
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="/#section_3">
                                How it works
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="/#section_4">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_5">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
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
                                    <Link className="dropdown-item" to="/listings">
                                        Topics Listing
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/contact">
                                        Contact Form
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="d-none d-lg-block">
                        { !companyImageUrl
                            ? <Link to="/register" className="navbar-icon bi-person smoothscroll" />
                            : <Link to="#" className="navbar-icon smoothscroll" style={{overflow: "hidden", backgroundImage: {companyImageUrl}}}> <img src={companyImageUrl} style={{width: "100%", hight: "100%"}}/> </Link>
                        }
                    </div>

                </div>
            </div>
        </nav>
    )

}