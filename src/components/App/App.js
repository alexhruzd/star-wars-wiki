import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';


export default class App extends React.Component {

    state = {
        isRandomPlanet: true,
        selectedPerson: null,
    }

    onTogglePlanet = () => {
        this.setState((prevState) => {
            return {
                isRandomPlanet: !prevState.isRandomPlanet,
            }
        });
    }
    
    onSelectPerson = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                {this.state.isRandomPlanet && <RandomPlanet />}
                <button
                    onClick={this.onTogglePlanet}
                >
                    on/off Planet
                </button>
                <div className="d-flex justify-content-between">
                    <ItemsList onItemClick={this.onSelectPerson}/>
                    <DetailsInfo personId={this.state.selectedPerson} />
                </div>
            </div>
        );

    }
}

