import { useState } from 'react'
import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import TopicListing from './components/topic-listing/TopicListing';
import TopicDetails from './components/topic-details/TopicDetails';

export default function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path='' element={ <Home /> }/>
				<Route path='/listings/' element= { <TopicListing /> } />
				<Route path='/listings/:id/details' element={ <TopicDetails /> } />
			</Routes>
			<Footer />

		</>

	)
}