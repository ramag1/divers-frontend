import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useContext} from 'react'
import { UserContext } from '../userContext';

function Nav(props) {
	const {handleLogout} = useContext(UserContext);

    return (
			<nav className='nav__container'>
				<nav className='app__nav'>
					<h1>Divers Discovery</h1>
					<ul>
						<li>
							<Link to='/login'>Log In</Link>
						</li>
						<li>
							<Link to='/signup'>Sign Up</Link>
						</li>
						<li>
							<Link to='/' onClick={handleLogout}>
								Log Out
							</Link>
						</li>
					</ul>
				</nav>
				<nav className='nav__hamburger'>
					<ul className='nav__ul'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/browsesites'>Browse Sites</Link>
						</li>
						<li>
							<Link to='/mysites/'>My Sites</Link>
						</li>
						<li>
							<Link to='/conservation'>Conservation</Link>
						</li>
					</ul>
				</nav>
			</nav>
		);
}

export default Nav;