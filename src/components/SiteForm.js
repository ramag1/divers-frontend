import './SiteForm.css'

function SiteForm({handleSubmit, site, handleChange,}) {
//deconstructed props from CreateSite

	return (
		<div className='siteform__container'>
			<div className='siteform__div'>
				<h2>Create a site:</h2>
				<form onSubmit={handleSubmit}>
					<div className='siteform__field'>
						<label>Name</label>
						<input
							required
							id='name'
							type='text'
							name='name'
							defaultValue={site.name}
							onChange={handleChange}
						/>
					</div>
					<div className='siteform__field'>
						<label>Country</label>
						<input
							required
							id='country'
							type='text'
							defaultValue={site.country}
							onChange={handleChange}
							name='country'
						/>
					</div>
					<div className='siteform__field'>
						<label>Max Depth in Meters</label>
						<input
							required
							id='max_depth'
							type='number'
							defaultValue={site.max_depth}
							onChange={handleChange}
							name='max_depth'
						/>
					</div>
					<div className='siteform__field'>
						<label>Site Type</label>
						<input
							required
							id='site_type'
							type='text'
							defaultValue={site.site_type}
							onChange={handleChange}
							name='site_type'
						/>
					</div>
					<div className='siteform__field'>
						<label>Notable Marine Life</label>
						<input
							required
							id='marine_life'
							type='text'
							defaultValue={site.marine_life}
							onChange={handleChange}
							name='marine_life'
						/>
					</div>
					<button className='siteform__btn' type='submit' > Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default SiteForm;
