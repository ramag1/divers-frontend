import { useState , useContext} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import API_URL from '../apiConfig';
import ReviewForm from './ReviewForm';
import { UserContext } from '../userContext';

function SiteReview(props) {
	const { userInfo } = useContext(UserContext);
	const { id, name } = useParams();
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
		const data = { ...formData, site_id: id, site_name: name };
		try {
			const response = await fetch(API_URL + `api/reviews/`, {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			if (response.status === 201) {
				navigate(`/mysites`);
			}
		} catch (error) {}
	}

	if (!userInfo) {
		return (
			<p>
				Please <Link to='/login'>log in</Link> to review this site!
			</p>
		);
	}

	return (
		<div>
			<h2>Write a Review for {name}:</h2>
			<ReviewForm //passing props here
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				formData={formData}
			/>
		</div>
	);
}

export default SiteReview;
