import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Browse.css'

function Browse(props) {
	const [sites, setSites] = useState([]);

	useEffect(() => {
		axios(`http://localhost:8000/api/sites/`)
			.then((res) => setSites(res.data))
			.catch(console.error);
	}, []);

	if (!sites.length) {
		return <h1>Loading...</h1>;
	}

	return (
        <div className='browse__container'>
            <h2>Don't see a site? <Link to='/createsite'>Create one here!</Link></h2>
            <ul className='browse__ul'>
                {sites.map((site) => (
                    <li key={site.id}><Link to={`/site/${site.id}`}>{site.name} - {site.country}</Link></li>
                ))}
            </ul>
        </div>
	);
}

export default Browse;