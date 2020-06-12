import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';


export default class App extends React.Component {

    state = {
        isRandomPlanet: true,
    }

    onTogglePlanet = () => {
        this.setState((prevState) => {
            return {
                isRandomPlanet: !prevState.isRandomPlanet,
            }
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                {this.state.isRandomPlanet && <RandomPlanet />}
                {/* <button
                    onClick={this.onTogglePlanet}
                >
                    on/off Planet
                </button> */}
                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        );

    }
}

