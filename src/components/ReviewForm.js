import { Form, Button, Alert } from 'react-bootstrap';

function ReviewForm({ handleSubmit, formData, handleChange, error }) {
	return (
		<div className='w-75 p-3'>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='visited'>
					<Form.Label>Have you visited this site?</Form.Label>
					<Form.Control
						required
						autoFocus
						type='boolean'
						name='visited'
						value={formData.visited}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='bucket_list'>
					<Form.Label>Add site to Bucket List?</Form.Label>
					<Form.Control
						required
						autoFocus
						type='boolean'
						name='bucket_list'
						value={formData.bucket_list}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='favorite'>
					<Form.Label>Is this a favorite site?</Form.Label>
					<Form.Control
						required
						autoFocus
						type='boolean'
						name='favorite'
						value={formData.favorite}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='comments'>
					<Form.Label>Comments on this site: </Form.Label>
					<Form.Control
						required
						as='textarea'
						rows={5}
						value={formData.comments}
						onChange={handleChange}
						name='comments'
					/>
				</Form.Group>
				<Button className='mt-4' type='submit' disabled={error}>
					Submit
				</Button>
				{error && (
					<Alert variant='danger'>
						Oops, something went wrong! Please try again!
					</Alert>
				)}
			</Form>
		</div>
	);
}

export default ReviewForm;
