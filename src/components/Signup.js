import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../apiConfig';

function Signup () {

	const initialFormData = {
		email: '',
		username: '',
		password: '',
		re_password: '',
	};
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	//pull in initial data as a copy and add the event target values for each input
	const handleChange = (event) => {
		setFormData((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value };
		});
	};

	//reference class code from authentication lecture
	const _handleSignup = async (event) => {
		event.preventDefault();
		console.log(formData);
		try {
			const response = await fetch(API_URL + 'users/', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(response);
			if (response.status === 201) {
				setSuccess(true);
				setTimeout(() => {
					navigate('/login');
				}, 1000);
			}
		} catch (error) {}
	};

	//call as an onBlur event in return
	const handlePasswordMatch = (event) => {
		if (formData.password !== formData.re_password) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<div className='signup__div'>
			<h2>Create an account</h2>
			<form className='signup__form' onSubmit={_handleSignup}>
				<div className='signup__username'>
					<label>Username</label>
					<input
						required
						autoFocus
						id='username'
						type='text'
						name='username'
						value={formData.username}
						onChange={handleChange}
					/>
				</div>
				<div className='signup__email'>
					<label>Email</label>
					<input
						required
						autoFocus
						id='email'
						type='email'
						value={formData.email}
						name='email'
						onChange={handleChange}
					/>
				</div>
				<div className='signup__password'>
					<label>Password</label>
					<input
						required
						id='password'
						type='password'
						name='password'
						value={formData.password}
						onChange={handleChange}
					/>
				</div>
				<div className='signup__password2'>
					<label>Confirm Password</label>
					<input
						required
						id='re_password'
						type='password'
						name='re_password'
						value={formData.re_password}
						onChange={handleChange}
						onBlur={handlePasswordMatch} // as we are clicking on the submit button, thus taking the focus off the re-enter password field. onBlur allows comparison of completed field we just clicked off of against the initial password field
					/>
				</div>
				<button className='signup__btn' type='submit'>Sign up</button>
			</form>
		</div>
	);
};

export default Signup;
