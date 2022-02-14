import { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import SiteForm from './SiteForm';
import API_URL from '../apiConfig';
import { UserContext } from '../userContext';


const CreateSite = () => {
	const {loggedIn} = useContext(UserContext)
	const initialSiteData = {
		name: '',
		country: '',
		max_depth: '',
		site_type: '',
		marine_life:'',
	};
	const navigate = useNavigate();
	const [newsite, setNewsite] = useState(initialSiteData);
	const handleChange = (event) => {
		setNewsite((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	};

	const createsite = async (event) => {
		event.preventDefault();
		const data = new FormData(event.target);
		// console.log(data.getAll());
		try {
			const response = await fetch(API_URL + 'api/sites/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
				body: data,
			});
			// status 201 === success
			if (response.status === 201) {
				// console.log(response);
				const data = await response.json();
				// console.log(data);
				navigate(`/site/${data.id}`);
			}
		} catch (error) {}
	};

	// If user is not logged in, redirect to the login page
	if (!loggedIn) {
		return <Navigate to='/login' />;
	}

	return (
		<div>
			<h2>Add a site</h2>
			<SiteForm
				handleSubmit={createsite}
				handleChange={handleChange}
				site={newsite}
				behavior='create'
			/>
		</div>
	);
};

export default CreateSite;
