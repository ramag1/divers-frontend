import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

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
        <div>
            <p>Don't see a site? <Link to='/createsite'>Create here!</Link></p>
            <ul>
                {sites.map((site) => (
                    <li key={site.id}><Link to={`/site/${site.id}`}>{site.name}</Link></li>
                ))}
            </ul>
        </div>
	);
}

export default Browse;