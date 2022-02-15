import './App.css';
import {Route,Routes, useNavigate} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { UserContext } from './userContext';
import Home from './components/Home';
import Nav from './components/Nav';
import MySites from './components/MySites';
import Conservation from './components/Conservation'
import Browse from './components/Browse'
import Login from './components/Login';
import Signup from './components/Signup';
import CreateSite from './components/CreateSite';
import SiteDetail from './components/SiteDetail';
import SiteReview from './components/SiteReview';
import ReviewEdit from './components/ReviewEdit';

import API_URL from './apiConfig';

function App() {
	// If there is already a token in local storage, set logged in to true, else set it to false
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	const [userInfo, setUserInfo] = useState(null);
	let navigate = useNavigate();

	const handleSetLoggedIn = (token) => {
		localStorage.setItem('token', token);
		setLoggedIn(true);
		return;
	};

	const getUserInfo = async () => {
		try {
			const response = await fetch(API_URL + 'users/me/', {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			// console.log(response);
			if (response.status === 200) {
				const data = await response.json();
				// console.log(data);
				setUserInfo(data);
			} else {
				setUserInfo(null);
				setLoggedIn(false);
				localStorage.clear();
			}
		} catch (error) {}
		return;
	};

	const handleLogout = async () => {
		// make a request to /token/logout to destroy the token
		try {
			const response = await fetch(API_URL + 'token/logout/', {
				method: 'POST',
				body: JSON.stringify(localStorage.getItem('token')),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			// destroy token was successful
			if (response.status === 204) {
				setUserInfo(null);
				setLoggedIn(false);
				localStorage.clear();
				navigate('/login');
			}
		} catch (error) {}
		// clear the token out of the local storage
		// redirect the user back to log in page
		// clear logged in state
		// set user back to null
		return;
	};

	useEffect(() => {
		// if logged in is true on application load, get logged in user's info
		if (loggedIn) {
			getUserInfo();
		}
	}, [loggedIn]);

	return (
		<div>
			<h1>Divers Discovery</h1>
			<UserContext.Provider
				value={{ loggedIn, handleLogout, userInfo, handleSetLoggedIn }}>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/browsesites' element={<Browse />} />
					<Route path='/site/:id' element={<SiteDetail />} />
					<Route path='/createsite' element={<CreateSite />} />
					<Route path='/mysites' element={<MySites />} />
					<Route path='/site/:id/createreview' element={<SiteReview />} />
					<Route path='/site/:id/review/edit' element={<ReviewEdit />} />
					<Route path='/conservation' element={<Conservation />} />
				</Routes>
			</UserContext.Provider>
		</div>
	);
}

export default App;
