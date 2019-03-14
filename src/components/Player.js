import React from 'react';

class Player extends React.Component {
	
	constructor(props){
		super(props);

		this.showPlayerModal = this.showPlayerModal.bind(this);
		this.deleltePlayer = this.deleltePlayer.bind(this);
	}

	showPlayerModal() {
		this.props.showPlayerModal(this.props.player);
	}

	deleltePlayer() {
		this.props.deleltePlayer(this.props.player);
	}

	render() {
		return (
			<div className="player">
				<div className="player-info">
					<p onClick={this.showPlayerModal}>{this.props.player.name} ({this.props.player.gender})</p>
					<button onClick={this.deleltePlayer} className="button button-clear">Remove</button>
				</div>
			</div>
		);
	}
}

export default Player;