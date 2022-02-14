import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams , Navigate} from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../userContext';


function MySites(props) {
	const [mySites, setMySites] = useState([]);
	// const {id} = useParams();
	const {userInfo} = useContext(UserContext);
	// console.log(userInfo)

	useEffect(() => {
		axios(`http://localhost:8000/api/reviews/`)
			.then((res) => setMySites(res.data))
			// .then (console.log(mySites))
			.catch(console.error);
	}, []);

	if (!userInfo) {
		return (
			<p>
				<Navigate to='/login'/>
			</p>
		);
	}
	if (!mySites.length) {
		return <p>Loading...</p>;
	}


	return (
		<div className='App'>
			<h2>Divers Discovery Details for {userInfo.username}:</h2>
			<div>
				<h2>Visited</h2>
				{mySites
					.filter(
						(visited) =>
							visited.visited === true &&
							visited.owner === `${userInfo.username}`
					)
					.map((visited) => (
						<li key={visited.id}>{visited.site}</li>
					))}
			</div>
			<div>
				<h2>Favorites</h2>
				{mySites
					.filter(
						(favorite) =>
							favorite.favorite === true &&
							favorite.owner === `${userInfo.username}`
					)
					.map((favorite) => (
						<li key={favorite.id}>{favorite.site}</li>
					))}
			</div>
			<div>
				<h2>Bucket List</h2>
				{mySites
					.filter(
						(bucket_list) =>
							bucket_list.bucket_list === true &&
							bucket_list.owner === `${userInfo.username}`
					)
					.map((bucket_list) => (
						<li key={bucket_list.id}>{bucket_list.site}</li>
					))}
			</div>
		</div>
	);
}
	
export default MySites;
