import { useState } from 'react'
import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Listing from './components/listings/Listings';
import ListingDetails from './components/listing-details/ListingDetails';
import Contacts from './components/contacts/Contacts'

export default function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path='' element={ <Home /> }/>
				<Route path='/listings' element= { <Listing /> } />
				<Route path='/listings/:id/details' element={ <ListingDetails /> } />
				<Route path='/contact' element = { <Contacts /> } />
			</Routes>
			<Footer />

		</>

	)
}