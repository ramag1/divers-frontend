import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './SiteDetail.css'
import API_URL from '../apiConfig';


function SiteDetail(props) {
	const [detail, setDetail] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios(API_URL + `api/sites/${id}`)
			.then((res) => setDetail(res.data))
			.catch(console.error);
	}, [] );

	if (!detail) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='sitedetail__container'>
            <h2>Site Details</h2>
            <div className='sitedetail__div'>
                <p>{detail.name}</p>
                <p>Located in {detail.country}</p>
                <p>Maximum Depth is {detail.max_depth} meters</p>
                <p>Site type is {detail.site_type}</p>
                <p>Notable marine life: {detail.marine_life}</p>
                <p><Link to={`/site/${id}/${detail.name}/createreview`}>Review this site or add to Bucket List?</Link></p>
            </div>
        </div>
	);
}

export default SiteDetail;