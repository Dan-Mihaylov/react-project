import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import { BrowserRouter } from 'react-router';
import { CompanyContext } from '../../contexts/CompanyContext';
import Header from './Header';

const authenticatedContextValues = {
    isAuthenticated: true,
    companyImageUrl: 'https://images.pexels.com/photos/1851243/pexels-photo-1851243.jpeg'
};

const notAuthenticatedContextValues = {
    isAuthenticated: false,
    companyImageUrl: ''
}


const renderWithContext = (contextValues) => {
    return render(
        <CompanyContext.Provider value={contextValues}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </CompanyContext.Provider>
    );
};


it('Should render "Login" when the user is not authenticated', () => {

    renderWithContext(notAuthenticatedContextValues);

    const loginElement = screen.getByText("Login");

    expect(loginElement).toBeInTheDocument();
});

it('Should not render "Login when the user is authenticated"', () => {
    
    renderWithContext(authenticatedContextValues);
    
    const loginElement = screen.queryByText("Login");
    
    expect(loginElement).toBeNull();
});

it('Should render "Logout" when the user is authenticated', () => {

    renderWithContext(authenticatedContextValues);

    const logoutElement = screen.getByText("Logout");

    expect(logoutElement).toBeInTheDocument();
});

it('Should render Create Listing when the user is authenticated', () => {

    renderWithContext(authenticatedContextValues);

    const createListingElement = screen.getByText("Create Listing");

    expect(createListingElement).toBeInTheDocument();
});

it('Should render the correct imageUrl when authenticated', () => {

    renderWithContext(authenticatedContextValues);

    const imageElement = screen.getByRole("img");
    const src = imageElement.src;

    expect(src).toBe(authenticatedContextValues.companyImageUrl);
    
});

it('Should render the Navbar with the base properties', () => {
    
    renderWithContext(notAuthenticatedContextValues);

    const homeElement = screen.getByText("Home");
    const browseElement = screen.getByText("Browse Properties");
    const howItWorksElement = screen.getByText("How it works");
    const faqElement = screen.getByText("FAQs");
    const contactElement = screen.getByText("Contact");
    const moreElement = screen.getByText("More");
    const listingsElement = screen.getByText("Listings");
    const contactFormElement = screen.getByText("Contact Form");

    expect(homeElement).toBeInTheDocument();
    expect(browseElement).toBeInTheDocument();
    expect(howItWorksElement).toBeInTheDocument();
    expect(faqElement).toBeInTheDocument();
    expect(contactElement).toBeInTheDocument();
    expect(moreElement).toBeInTheDocument();
    expect(listingsElement).toBeInTheDocument();
    expect(contactFormElement).toBeInTheDocument();
});
