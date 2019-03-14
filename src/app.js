import React from 'react';
import ReactDOM from 'react-dom';
import FreeAgentTracker from './components/FreeAgentTracker';
import 'normalize.css/normalize.css';
import './styles/style.scss';

// let person = {
//     firstName: 'Rob',
//     lastName: 'Myers',
//     welcomeMessage: function() {
//         console.log("Hey there " + this.firstName+ " " + this.lastName);
//     }
// }

// let message = person.welcomeMessage.bind(person);
// message();


ReactDOM.render(<FreeAgentTracker />, document.getElementById('app'));