import React from 'react';
import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function Browse(props) {
	const [sites, setSites] = useState([]);
    // const {id} = useParams();

	useEffect(() => {
		axios(`http://localhost:8000/api/sites/`)
			.then((res) => setSites(res.data))
			.catch(console.error);
	}, []);

	if (!sites.length) {
		return <h1>Loading...</h1>;
	}

	return (
		<ul>
			{sites.map((site) => (
				<li key={site.id}><Link to={`/site/${site.id}`}>{site.name}</Link></li>
			))}
		</ul>
	);
}

export default Browse;