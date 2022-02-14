import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function MySites(props) {
	const [mySites, setMySites] = useState([]);
	// const {id} = useParams();

	useEffect(() => {
		axios(`http://localhost:8000/api/reviews/`)
			.then((res) => setMySites(res.data))
			// .then (console.log(mySites))
			.catch(console.error);
	}, []);

	if (!mySites.length) {
		return <h1>Loading...</h1>;
	}


	return (
		<div>
			<div>
				<h2>Visited</h2>
				{mySites
					.filter((visited) => visited.visited === true)
					.map((visited) => (
						<li key={visited.id}>{visited.site}</li>
					))}
			</div>
			<div>
				<h2>Favorites</h2>
				{mySites
					.filter((favorite) => favorite.favorite === true)
					.map((favorite) => (
						<li key={favorite.id}>{favorite.site}</li>
					))}
			</div>
			<div>
				<h2>Bucket List</h2>
				{mySites
					.filter((bucket_list) => bucket_list.bucket_list === true)
					.map((bucket_list) => (
						<li key={bucket_list.id}>{bucket_list.site}</li>
					))}
			</div>
		</div>
	);
}
	
export default MySites;
