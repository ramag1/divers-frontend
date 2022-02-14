import React from 'react';
import Create from './Create';
import {Link} from 'react-router-dom'


function MySites(props) {
    return (
			<div>
				My Sites <br/>
				<Link to='/createsite'>Create a new site!</Link>
			</div>
		);
}

export default MySites;