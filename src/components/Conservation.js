import React from 'react';
import YouTube from 'react-youtube';
import './Conservation.css'

//reference https://openbase.com/js/react-youtube for setting up video dependencies
class Conservation extends React.Component {
	render() {
		const opts = {
			height: '390',
			width: '640',
			playerVars: {
				autoplay: 1,
			},
		};

		return (
			<div className='conservation__div'>
				<h2>Conservation Topics</h2>
                <h3 className='conservation__h3'>
                    Coral Reef Bleaching Events & Restoration
                </h3>
				<YouTube videoId='8hknaJQRh8s' opts={opts} onReady={this._onReady} />
			</div>
		);
	}

	_onReady(event) {
		event.target.pauseVideo();
	}
}

export default Conservation