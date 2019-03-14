import React from 'react';
import Modal from 'react-modal';

import Header from './Header';
import Body from './Body';

class FreeAgentTracker extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleDeletePlayer = this.handleDeletePlayer.bind(this);
        this.handleDeleteAllPlayer = this.handleDeleteAllPlayer.bind(this);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            players: [],
            modalIsOpen: false,
            curPlayer: {},
        };
    }
    
    componentDidMount() {
        const players = JSON.parse(localStorage.getItem('freeagentplayers'));
        if (players) {
            this.setState( (prevState) => {
                return {
                    players: players,
                }
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('freeagentplayers', JSON.stringify(this.state.players));
    }

    handleAddPlayer(player) {
        if (!player.name) {
            return "Please enter a player name";
        }

        this.setState((prevState) => {
            return {
                players: prevState.players.concat(player),
            }
        });
    }

    handleShowPlayer(player) {
        this.setState((prevState) => {
            return {
                curPlayer: player,
                modalIsOpen: true
            }
        })
    }

    handleDeletePlayer(playerToDelete) {
        this.setState( (prevState) => {
            return {
                players: prevState.players.filter( (player) => {
                    return !(player.name == playerToDelete.name 
                        && player.skillLevel == playerToDelete.skillLevel
                        && player.age == playerToDelete.age); 
                }),
            }
        });
    }

    handleDeleteAllPlayer() {
        this.setState((prevState) => {
            return {
                players:[],
            }
        });
    }

    openModal(thePlayer) {
        this.setState((prevState) => {
          return {
            modalIsOpen: true,
            curPlayer: thePlayer,
          }
        })
    }

    closeModal() {
        this.setState((prevState) => {
          return {
            modalIsOpen: false
          }
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <Body
                    players={this.state.players}
                    handleAddPlayer={this.handleAddPlayer}
                    handleDeletePlayer={this.handleDeletePlayer}
                    handleDeleteAllPlayer={this.handleDeleteAllPlayer}
                    handleShowPlayer={this.handleShowPlayer}
                    openModal={this.openModal}
                />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    handleShowPlayer={this.handleShowPlayer}
                    onRequestClose={this.closeModal}
                    contentLabel="Show Test Modal"
                    className="modal"
                >
                    <h2>{this.state.curPlayer.name}</h2>
                    <h3>{this.state.curPlayer.gender}</h3>
                    <p>{this.state.curPlayer.message}</p>
                    <button className="button" onClick={this.closeModal}></button>
                </Modal>
            </div>
        );
    }
}

export default FreeAgentTracker;