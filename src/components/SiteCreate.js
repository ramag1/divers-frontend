import { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import API_URL from '../apiConfig';
import { UserContext } from '../userContext';
import SiteForm from './SiteForm';


function SiteCreate () {

	const { loggedIn } = useContext(UserContext);
	const initialSiteData = {
		name: '',
		country: '',
		max_depth: '',
		site_type: '',
		marine_life: '',
	};
	const navigate = useNavigate();
	const [newsite, setNewsite] = useState(initialSiteData);

	//pull in initial data as a copy and add the event target values for each input
	const handleChange = (event) => {
		setNewsite((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	};
	
	//reference class code from authentication lecture
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
			if (response.status === 201) {
				const data = await response.json();
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
			<SiteForm
				handleSubmit={createsite}
				handleChange={handleChange}
				site={newsite}
				behavior='create'
			/>
		</div>
	);
};

export default SiteCreate;
