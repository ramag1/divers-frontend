import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../userContext';
import API_URL from '../apiConfig';
import './MySites.css'


function MySites(props) {

	const [mySites, setMySites] = useState([]);
	const {userInfo} = useContext(UserContext);
	// console.log(userInfo)

	useEffect(() => {
		axios(API_URL + `api/reviews/`)
			.then((res) => setMySites(res.data))
			.then(console.log(mySites))
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
		<div className='mysites__container'>
			<h2>Divers Discovery Details for {userInfo.username}:</h2>
			<div className='mysites__visited_div'>
				<h3>Visited</h3>
				{mySites
					.filter(
						(visited) =>
							visited.visited === true &&
							visited.owner === `${userInfo.username}`
					)
					.map((visited) => (
						<li key={visited.id}>
							<Link
								to={`/site/${visited.site_id}/${visited.site_name}/review/${visited.id}/edit`}>
								{visited.site_name}
							</Link>
						</li>
					))}
			</div>
			<div className='mysites__favorites_div'>
				<h3>Favorites</h3>
				{mySites
					.filter(
						(favorite) =>
							favorite.favorite === true &&
							favorite.owner === `${userInfo.username}`
					)
					.map((favorite) => (
						<li key={favorite.id}>
							<Link
								to={`/site/${favorite.site_id}/${favorite.site_name}/review/${favorite.id}/edit`}>
								{favorite.site_name}
							</Link>
						</li>
					))}
			</div>
			<div className='mysites__bucket_div'>
				<h3>Bucket List</h3>
				{mySites
					.filter(
						(bucket_list) =>
							bucket_list.bucket_list === true &&
							bucket_list.owner === `${userInfo.username}`
					)
					.map((bucket_list) => (
						<li key={bucket_list.id}>
							<Link
								to={`/site/${bucket_list.site_id}/${bucket_list.site_name}/review/${bucket_list.id}/edit`}>
								{bucket_list.site_name}
							</Link>
						</li>
					))}
			</div>
		</div>
	);
}
	
export default MySites;
