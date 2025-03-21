import { Routes, Route } from 'react-router';
import { CompanyContext } from './contexts/CompanyContext';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Listing from './components/listings/Listings';
import ListingDetails from './components/listing-details/ListingDetails';
import Contacts from './components/contacts/Contacts';
import Register from './components/register/Register';
import useLocalStorageState from './hooks/useLocalStorageState';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import ListingCreate from './components/listing-create/ListingCreate';
import ListingEdit from './components/listing-edit/ListingEdit';

const authKey = 'auth';

export default function App() {
	const [ authData, setAuthData ] = useLocalStorageState(authKey, {});

	const companyLoginHandler = (authData) => {
		setAuthData(authData);
	}

	const companyLogoutHandler = () => {
		setAuthData({});
	}

	return (
		<>
			<CompanyContext.Provider value={{...authData, companyLoginHandler, companyLogoutHandler}} >
			<Header />
			<Routes>
				<Route path='' element={ <Home /> }/>
				<Route path='/listings' element= { <Listing /> } />
				<Route path='/contact' element = { <Contacts /> } />
				<Route path='/register' element = { <Register /> } />
				<Route path='/login' element={ <Login />} />
				<Route path='/logout' element={ <Logout /> } />
				<Route path='/listings/create' element= { <ListingCreate /> } />
				<Route path='/listings/:propId/edit' element={ <ListingEdit /> } />
				<Route path='/listings/:propId/details' element={ <ListingDetails /> } />
			</Routes>
			<Footer />
			</CompanyContext.Provider>
		</>

	)
}