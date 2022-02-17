import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useContext} from 'react'
import { UserContext } from '../userContext';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import './Nav.css'

function Nav(props) {
	const { handleLogout} = useContext(UserContext);
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	const closeMenu = () => {
		setNavbarOpen(false);
	};

	//reference https://ibaslogic.com/how-to-add-hamburger-menu-in-react/ for hamburger menu creation
	return (
		<nav className='nav__container'>
			<h1 className='nav__h1'>Divers Discovery</h1>
			<nav className='nav__hamburger'>
				<button className='nav__button' onClick={handleToggle}>
					{navbarOpen ? (
						<MdClose
							style={{ color: '#008b8b', width: '40px', height: '40px ' }}
						/>
					) : (
						<FiMenu
							style={{ color: '#008b8b', width: '40px', height: '40px' }}
						/>
					)}
				</button>
				<ul className={`nav__menuNav ${navbarOpen ? ' nav__showMenu' : ''}`}>
					<li>
						<Link to='/' onClick={() => closeMenu()} exact>
							Home
						</Link>
					</li>
					<li>
						<Link to='/browsesites' onClick={() => closeMenu()} exact>
							Browse Sites
						</Link>
					</li>
					<li>
						<Link to='/mysites/' onClick={() => closeMenu()} exact>
							My Sites
						</Link>
					</li>
					<li>
						<Link to='/conservation' onClick={() => closeMenu()} exact>
							Conservation
						</Link>
					</li>
					<br />
					<br />
					<br />
					<li>
						<Link to='/login'>
							Log In
						</Link>
					</li>
					<li>
						<Link to='/signup'>
							Sign Up
						</Link>
					</li>
					<li>
						<Link to='/' onClick={handleLogout}>
							Log Out
						</Link>
					</li>
				</ul>
			</nav>
		</nav>
	);
}

export default Nav;