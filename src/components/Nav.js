import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
			<nav>
				<ul className='nav__ul'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/favorites'>My Favorites</Link>
					</li>
					<li>
						<Link to='/bucketlist'>My Bucket List</Link>
					</li>
					<li>
						<Link to='/browsesites'>Browse Sites</Link>
					</li>
					<li>
						<Link to='/conservation'>Conservation</Link>
					</li>
				</ul>
			</nav>
		);
}

export default Nav;