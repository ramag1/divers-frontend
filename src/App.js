import {Route,Routes, useNavigate} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { UserContext } from './userContext';
import './App.css';
import Browse from './components/Browse'
import Conservation from './components/Conservation'
import CreateSite from './components/CreateSite';
import Login from './components/Login';
import Home from './components/Home';
import MySites from './components/MySites';
import Nav from './components/Nav';
import ReviewEdit from './components/ReviewEdit';
import Signup from './components/Signup';
import SiteDetail from './components/SiteDetail';
import SiteReview from './components/SiteReview';
import API_URL from './apiConfig';

function App() {

  //reference user log in authentication lecture
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	); //ternary to check for stored token as logged in
	const [userInfo, setUserInfo] = useState(null);
	let navigate = useNavigate(); //shorthand call for navigate

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
		// request here to remove the token from local storage and log out
		try {
			const response = await fetch(API_URL + 'token/logout/', {
				method: 'POST',
				body: JSON.stringify(localStorage.getItem('token')),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 204) {
				setUserInfo(null); 		// set user back to null
				setLoggedIn(false);	// clear logged in state
				localStorage.clear();	// clear the token out of the local storage
				navigate('/login');	// redirect the user back to log in page
			}
		} catch (error) {}
		return;
	};

	useEffect(() => {
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
					<Route path='/site/:id/:name/createreview' element={<SiteReview />} />
					<Route path='/site/:id/:name/review/edit' element={<ReviewEdit />} />
					<Route path='/conservation' element={<Conservation />} />
				</Routes>
			</UserContext.Provider>
		</div>
	);
}

export default App;
