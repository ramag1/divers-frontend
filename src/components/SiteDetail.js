import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function SiteDetail(props) {
	const [detail, setDetail] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios(`http://localhost:8000/api/sites/${id}`)
			.then((res) => setDetail(res.data))
			.catch(console.error);
	}, []);

	if (!detail) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<p>{detail.name}</p>
			<p>Located in {detail.country}</p>
			<p>Maximum Depth is {detail.max_depth} meters</p>
            <p>Site type is {detail.site_type}</p>
			<p>Notable marine life: {detail.marine_life}</p>
		</div>
	);
}

export default SiteDetail;