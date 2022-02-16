
function ReviewForm({ handleSubmit, formData, handleChange }) {
    //deconstructed props from SiteReview

	return (
		<div className='reviewform__div'>
			<form onSubmit={handleSubmit}>
				<div className='reviewform__field'>
					Visited this site? <br />
					<input
						autoFocus
						name='visited'
						type='radio'
						label='Yes'
						defaultChecked={formData.visited === true}
						value={true}
						onChange={handleChange}
					/>
					<label>Yes</label>
					<input
						autoFocus
						name='visited'
						type='radio'
						label='No'
						defaultChecked={formData.visited === false}
						value={false}
						onChange={handleChange}
					/>
					<label>No</label>
				</div>
				<div className='reviewform__field'>
					Add to Favorites? <br />
					<input
						autoFocus
						name='favorite'
						type='radio'
						label='Yes'
						defaultChecked={formData.favorite === true}
						value={true}
						onChange={handleChange}
					/>
					<label>Yes</label>
					<input
						autoFocus
						name='favorite'
						type='radio'
						label='No'
						defaultChecked={formData.favorite === false}
						value={false}
						onChange={handleChange}
					/>
					<label>No</label>
				</div>
				<div className='reviewform__field'>
					Add to Bucket List? <br />
					<input
						autoFocus
						name='bucket_list'
						type='radio'
						label='Yes'
						defaultChecked={formData.bucket_list === true}
						value={true}
						onChange={handleChange}
					/>
					<label>Yes</label>
					<input
						autoFocus
						name='bucket_list'
						type='radio'
						label='No'
						defaultChecked={formData.bucket_list === false}
						value={false}
						onChange={handleChange}
					/>
					<label>No</label>
				</div>
				<div className='reviewform__field'>
					<label>Comments on this site: </label>
					<input
						as='textarea'
						rows={5}
						value={formData.comments}
						onChange={handleChange}
						name='comments'
					/>
				</div>
				<button className='reviewform__btn' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ReviewForm;
