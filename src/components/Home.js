import React from 'react';
import { UserContext } from '../userContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom'

function Home(props) {
    const {userInfo} = useContext(UserContext);
	// console.log(userInfo)

    if (!userInfo) {
            return <p>Please log in to see your sites or <Link to={'/browsesites'}>browse</Link> our list of top sites for inspiration.</p>;
        }
    return (
        <div>
            Welcome back to Divers Discovery, {userInfo.username}!<br/>
            Get inspiration for your next Diving trip, or help fellow divers find theirs by sharing your favorite dive sites.
        </div>
    );
}

export default Home;