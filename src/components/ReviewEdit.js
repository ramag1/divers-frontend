import { useState,  useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import API_URL from '../apiConfig';
import ReviewForm from './ReviewForm';
import { UserContext } from '../userContext';

function ReviewEdit(props) {
	const { userInfo } = useContext(UserContext);
	const { id, name, revId } = useParams();
    //shorthand Navigate here
	let navigate = useNavigate();
	const initialState = {
		visited: false,
		favorite: false,
		bucket_list: false,
		comments: '',
	};
	const [formData, setFormData] = useState(initialState);


	function handleChange(event) {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	}
	//reference class code from authentication lecture
	async function handleSubmit(event) {
		event.preventDefault();
		const data = { ...formData, site_id: id, site_name: name , id: revId};
		console.log(data);

		try {
			const response = await fetch(API_URL + `api/reviews/${revId}`, {
				method: 'PUT',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			console.log(response);
			if (response.status === 200) {
				const data = await response.json();
				console.log(data);
				navigate(`/mysites`);
			}
		} catch (error) {}
	}

	if (!userInfo) {
		return (
			<p>
				Please <Link to='/login'>log in</Link> to edit this site!
			</p>
		);
	}

	return (
		<div>
            <h2>Edit your review for {name}:</h2>
			<ReviewForm
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				formData={formData}
			/>
		</div>
	);
}

export default ReviewEdit;
