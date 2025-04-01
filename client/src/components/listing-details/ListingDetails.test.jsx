import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import ListingDetails from './ListingDetails';
import { CompanyContext } from '../../contexts/CompanyContext';
import * as propertyApi from '../../api/propertyApi';

describe('ListingDetails Component', () => {
    const mockProperty = {
        _id: 'property123',
        _ownerId: 'owner456',
        title: 'Luxury Apartment',
        description: 'A beautiful apartment in the city center',
        price: '750000',
        bedrooms: 3,
        bathrooms: 2,
        garage: true,
        garden: false,
        country: 'United Kingdom',
        city: 'London',
        street: 'Baker Street',
        postcode: 'W1U 6TY',
        thumbnail: 'thumbnail.jpg',
        image1: 'image1.jpg',
        image2: 'image2.jpg',
        agency: 'Top Realty'
    };

    const mockGetProperty = vi.fn().mockResolvedValue(mockProperty);

    const customRender = ({ ownerId }) => {
        render(
            <CompanyContext.Provider value={{ _id: ownerId }}>
                <MemoryRouter initialEntries={['/listings/property123/details']}>
                    <Routes>
                        <Route path="/listings/:propId/details" element={<ListingDetails />} />
                    </Routes>
                </MemoryRouter>
            </CompanyContext.Provider>
        );
    }

    beforeEach(() => {
        vi.clearAllMocks();

        vi.spyOn(propertyApi, 'useProperty').mockReturnValue({
            getProperty: mockGetProperty
        });
    });

    it('Should render property details correctly', async () => {
        customRender('someOtherUser');

        await waitFor(() => {
        });

        const propTitleEl = screen.queryByTestId('header1');
        expect(propTitleEl).toBeInTheDocument();

        const propPriceOneEl = screen.queryByTestId('propPrice1');
        expect(propPriceOneEl.textContent.replace(',', '')).toBe(`£${mockProperty.price}`);

        const propPriceTwoEl = screen.queryByTestId('propPrice2');
        expect(propPriceTwoEl.textContent.replace(',', '')).toBe(`£${mockProperty.price}`);

        expect(screen.getByText(`Bedrooms: ${mockProperty.bedrooms}`)).toBeInTheDocument();
        expect(screen.getByText(`Bathrooms: ${mockProperty.bathrooms}`)).toBeInTheDocument();
        expect(screen.getByText(`Garage: ${mockProperty.garage ? 'Available' : ''}`)).toBeInTheDocument();
        expect(screen.getByText(`Garden: ${mockProperty.garden ? '' : 'Not available'}`)).toBeInTheDocument();
        expect(screen.getByText(`Country: ${mockProperty.country}`)).toBeInTheDocument();
        expect(screen.getByText(`City: ${mockProperty.city}`)).toBeInTheDocument();
        expect(screen.getByText(`Street: ${mockProperty.street}`)).toBeInTheDocument();
        expect(screen.getByText(`Postcode: ${mockProperty.postcode}`)).toBeInTheDocument();

        expect(screen.getByText(mockProperty.agency)).toBeInTheDocument();
    });

    it('Should show Edit Property button when the user is the owner', async () => {
        customRender(mockProperty._ownerId);

        await waitFor(() => {
            expect(screen.getByText('Edit Property')).toBeInTheDocument();
        });
    });

    it('Should not show Edit Property button when the user is not the owner', async () => {
        customRender('someOtherUser');

        await waitFor(() => {
            expect(screen.getByTestId('header1')).toBeInTheDocument();
        });

        expect(screen.queryByText('Edit Property')).not.toBeInTheDocument();
    });

    it('Should call API with correct property ID', async () => {
        customRender('someOtherUser');

        await waitFor(() => {
            expect(mockGetProperty).toHaveBeenCalledWith(mockProperty._id);
        });
    });

    it('Should display all 3 images with the correct src', async () => {

        customRender(mockProperty._ownerId);

        await waitFor( () => {});

        const images = screen.getAllByRole('img');
        const [thumbnailUrl, image1Url, image2Url] = images;

        const thumbnail = thumbnailUrl.src.split('/');
        const image1 = image1Url.src.split('/');
        const image2 = image2Url.src.split('/');

        expect(images.length).toEqual(3);
        expect(thumbnail.at(-1)).toBe(mockProperty.thumbnail);
        expect(image1.at(-1)).toBe(mockProperty.image1);
        expect(image2.at(-1)).toBe(mockProperty.image2);
    });
});