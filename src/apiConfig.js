// put backend deployed link in falsey ternary option
const API_URL =
	window.location.hostname === 'localhost' ? 'http://localhost:8000/' : '';

// const API_URL = 'https://esin-drf-restaurants-uploads.herokuapp.com/';

export default API_URL;