import React, { useState , useContext} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import API_URL from '../apiConfig';
import { UserContext } from '../userContext';
import './Login.css'

const Login = () => {
	const { handleSetLoggedIn } = useContext(UserContext);
	const initialFormData = {
		email: '',
		password: '',
	};
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		setFormData((prevState) => {
			return { ...prevState, [event.target.id]: event.target.value };
		});
	};

	//reference class code from authentication lecture
	const _handleLogin = async (event) => {
		event.preventDefault();
		// console.log(formData);
		try {
			const response = await fetch(API_URL + 'token/login/', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (response.status === 200) {
				const data = await response.json();
				handleSetLoggedIn(data.auth_token);
				navigate('/');
			}
		} catch (error) {}
	};
	return (
		<div className='login__container'>
			<h2>Log in below:</h2>
			<div className='login__div'>
				<form className='login__form' onSubmit={_handleLogin}>
					<div className='login__field'>
						<label>
							Email <br />
						</label>
						<input
							required
							id='email'
							type='email'
							defaultValue={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className='login__field'>
						<label>
							Password <br/>
						</label>
						<input
							required
							id='password'
							type='password'
							defaultValue={formData.password}
							onChange={handleChange}
						/>
					</div>
					<button className='login__btn' type='submit'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
