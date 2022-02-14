import React, { useState , useContext} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import API_URL from '../apiConfig';
import { UserContext } from '../userContext';

const Login = () => {
	const {handleSetLoggedIn} = useContext(UserContext);
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
		<div>
			<h2>Log in</h2>
			<Form onSubmit={_handleLogin}>
				<Form.Group controlId='email'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						required
						autoFocus
						type='email'
						value={formData.email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						required
						type='password'
						value={formData.password}
						onChange={handleChange}
					/>
				</Form.Group>
				<Button type='submit'>Login</Button>
			</Form>
			{error && (
				<Alert variant='warning' className='mt-4'>
					No valid user found with the credentials entered. Please try logging
					in again or <Link to='/signup'>sign up</Link> for an account.
				</Alert>
			)}
		</div>
	);
};

export default Login;
