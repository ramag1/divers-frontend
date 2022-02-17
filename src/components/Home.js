import React from 'react';
import { UserContext } from '../userContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

function Home(props) {
    const {userInfo} = useContext(UserContext);

    if (!userInfo) {
            return (
                <div className='home__container'>
                    <div className='home__div'>
                    Please log in to see your sites or <Link to={'/browsesites'}>browse</Link> our list of top sites for inspiration.
                    </div>
                </div>
            );
        }
    return (
        <div className='home__container'>
            <div className='home__div'>
                Welcome back to Divers Discovery, {userInfo.username}!
                <br/> 
                <br/>
                Get inspiration for your next Diving trip, or help fellow divers find theirs by sharing your favorite dive sites.
            </div>
        </div>
    );
}

export default Home;