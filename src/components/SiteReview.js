import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import API_URL from '../apiConfig';

function SiteReview(props) {
	const { id } = useParams();
	let navigate = useNavigate();
	const initialState = {
		visited: false,
		favorite: false,
        bucket_list: false,
        comments: '',
	};
	const [formData, setFormData] = useState(initialState);
	const [error, setError] = useState(false);
	function handleChange(event) {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	}
	async function handleSubmit(event) {
		event.preventDefault();
		const data = { ...formData, site_id: id };
		console.log(data);
		try {
			const response = await fetch(API_URL + 'api/reviews/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			console.log(response);
			// status 201 === success
			if (response.status === 201) {
				const data = await response.json();
				console.log(data);
				navigate(`/mysites`);
			}
		} catch (error) {}
	}
	return (
		<div>
			<h2>Write a Review</h2>
			<ReviewForm
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				formData={formData}
			/>
		</div>
	);
}

export default SiteReview;
