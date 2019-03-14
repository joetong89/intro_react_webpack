import React from 'react';

class PlayersList extends React.Component {

	render() {
		return (
			<div>
				<div className="list-removal">
					{this.props.players.length <= 0 && <h3>No free agents, everybody is playing!</h3>}
					{this.props.players.length > 0 && <h3>Delete All Players</h3>}
					{this.props.players.length > 0 && <button className="button button-clear" onClick={this.props.handleDeeltePlayers}>Remove All Players</button>}
				</div>
				<div className="player-list">
					{
						this.props.players.map((player) => 
							<Player key={player.name} 
								player={player} 
								handleShowPlayer={this.props.handleShowPlayer} 
								handleDeltePlayers={this.props.handleDeltePlayers} />
						)
					}
				<NewFreeAgentForm handleAddPlayer={this.props.handleAddPlayer} />
				</div>
			</div>
		)
	}
}

export default PlayersList;