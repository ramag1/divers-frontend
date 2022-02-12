import './App.css';
import {Route,Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Faves from './components/Faves';
import Bucket from './components/Bucket';
import Conservation from './components/Conservation'
import Browse from './components/Browse'

function App() {
  return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favorites' element={<Faves />} />
				<Route path='/bucketlist' element={<Bucket />} />
				<Route path='/browsesites' element={<Browse />} />
				<Route path='/conservation' element={<Conservation />} />
			</Routes>
		</div>
	);
}

export default App;
