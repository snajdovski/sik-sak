import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Zones from './components/containers/Zones'
import Home from './components/layout/Home'
class App extends Component {
    render() {
       
        return (
            <div className = "App">
                        <h2>Sik-Sak</h2>
                        <p>The Best App Ever</p>
                        <Home />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));