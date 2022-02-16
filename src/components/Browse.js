import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Browse.css'
import API_URL from '../apiConfig';

function Browse(props) {
	const [sites, setSites] = useState([]);

	useEffect(() => {
		axios(API_URL + `api/sites/`)
			.then((res) => setSites(res.data))
			.catch(console.error);
	}, []);

	if (!sites.length) {
		return <h1>Loading...</h1>;
	}

	return (
        <div className='browse__container'>
            <div className='browse__div'>
                <h2>Browse our Sites</h2>
                <p>Don't see your favorite site? <Link to='/createsite'>Create one here!</Link></p>
                <ul className='browse__ul'>
                    {sites.map((site) => (
                        <li key={site.id}><Link to={`/site/${site.id}`}>{site.name} - {site.country}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
	);
}

export default Browse;