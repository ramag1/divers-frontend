import React from 'react'

function SiteForm({handleSubmit, site, handleChange,}) {
//deconstructed props from CreateSite

	return (
		<div className='siteform__div'>
			<form onSubmit={handleSubmit}>
				<div className='siteform__name'>
					<label>Name</label>
					<input
						required
						type='text'
						name='name'
						defaultValue={site.name}
						onChange={handleChange}
					/>
				</div>
				<div className='siteform__country'>
					<label>Country</label>
					<input
						required
						type='text'
						defaultValue={site.country}
						onChange={handleChange}
						name='country'
					/>
				</div>
				<div className='siteform__maxdepth'>
					<label>Maximum Depth in Meters</label>
					<input
						required
						type='number'
						defaultValue={site.max_depth}
						onChange={handleChange}
						name='max_depth'
					/>
				</div>
				<div className='siteform__site_type'>
					<label>Site Type</label>
					<input
						required
						type='text'
						defaultValue={site.site_type}
						onChange={handleChange}
						name='site_type'
					/>
				</div>
				<div className='marine_life'>
					<label>Notable Marine Life</label>
					<input
						required
						type='text'
						defaultValue={site.marine_life}
						onChange={handleChange}
						name='marine_life'
					/>
				</div>

				<button className='siteform__btn' type='submit' > Create
				</button>
			</form>
		</div>
	);
};

export default SiteForm;
