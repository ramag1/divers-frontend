import { Form, Button, Alert } from 'react-bootstrap';

const SiteForm = ({
	handleSubmit,
	error,
	site,
	handleChange,
	behavior,
}) => {
	return (
		<div className='w-75 p-3'>
			<Form onSubmit={handleSubmit} encType='multipart/form-data'>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						required
						autoFocus
						type='text'
						name='name'
						value={site.name}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='country'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						required
						type='text'
						value={site.country}
						onChange={handleChange}
						name='country'
					/>
				</Form.Group>
				<Form.Group controlId='max_depth'>
					<Form.Label>Maximum Depth in Meters</Form.Label>
					<Form.Control
						required
						type='number'
						value={site.max_depth}
						onChange={handleChange}
						name='max_depth'
					/>
				</Form.Group>
				<Form.Group controlId='site_type'>
					<Form.Label>Site Type</Form.Label>
					<Form.Control
						required
						type='text'
						value={site.site_type}
						onChange={handleChange}
						name='site_type'
					/>
				</Form.Group>
				<Form.Group controlId='marine_life'>
					<Form.Label>Notable Marine Life</Form.Label>
					<Form.Control
						required
						type='text'
						value={site.marine_life}
						onChange={handleChange}
						name='marine_life'
					/>
				</Form.Group>

				<Button className='mt-4' type='submit' disabled={error}>
					{behavior === 'create' && 'Create'}
					{behavior === 'edit' && 'Edit'}
				</Button>
				{error && (
					<Alert variant='danger'>
						Oops, something went wrong! Please try again!
					</Alert>
				)}
			</Form>
		</div>
	);
};

export default SiteForm;
