import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react'

function Nav(props) {
    return (
			<nav>
				<ul className='nav__ul'>
					<li>
						<Link to='/login'>Log In</Link>
					</li>
					<li>
						<Link to='/signup'>Sign Up</Link>
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/browsesites'>Browse Sites</Link>
					</li>
					<li>
						<Link to='/mysites/:id'>My Sites</Link>
					</li>
					<li>
						<Link to='/conservation'>Conservation</Link>
					</li>
					<li>
						<Link to='/' onClick={props.handleLogout}>Log Out</Link>
					</li>
				</ul>
			</nav>
		);
}

export default Nav;