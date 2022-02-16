import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useContext} from 'react'
import { UserContext } from '../userContext';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import './Nav.css'

function Nav(props) {
	
	const {handleLogout} = useContext(UserContext);
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	const closeMenu = () => {
		setNavbarOpen(false);
	};


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
					<button className='navbar__button' onClick={handleToggle}>
						{navbarOpen ? (
							<MdClose
								style={{ color: '#fff', width: '40px', height: '20px ' }}
							/>
						) : (
							<FiMenu
								style={{ color: '#383838', width: '40px', height: '20px' }}
							/>
						)}
					</button>
					<ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
						<li>
							<Link
								to='/'
								activeClassName='active-link'
								onClick={() => closeMenu()}
								exact>
								Home
							</Link>
						</li>
						<li>
							<Link
								to='/browsesites'
								activeClassName='active-link'
								onClick={() => closeMenu()}
								exact>
								Browse Sites
							</Link>
						</li>
						<li>
							<Link
								to='/mysites/'
								activeClassName='active-link'
								onClick={() => closeMenu()}
								exact>
								My Sites
							</Link>
						</li>
						<li>
							<Link
								to='/conservation'
								activeClassName='active-link'
								onClick={() => closeMenu()}
								exact>
								Conservation
							</Link>
						</li>
					</ul>
				</nav>
			</nav>
		);
}

export default Nav;