import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import PlanetPage from '../PlanetPage';

import SwapiContext from "../SwapiServiceContext";

import { BrowserRouter as Router, Route } from "react-router-dom";
import StarshipsPage from '../StarshipsPage';
import IndexPageContent from '../IndexPageContent/IndexPageContent';
import FilmsPage from '../FilmsPage/FilmsPage';


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
            <SwapiContext.Provider value={this.swapi}>
                <Router>
                    <div className="App">
                        <Header />
                        {this.state.isRandomPlanet && <RandomPlanet />}
                        <Route path="/" exact>
                            <h3>Hello, my dear Jedi!</h3>
                            <IndexPageContent />
                        </Route>
                        <Route path="/films">
                            <h3>Films</h3>
                            <FilmsPage />
                        </Route>   
                        <Route path="/peoples">
                            <h3>Characters</h3>
                            <PeoplePage />
                        </Route>

                        <Route path="/planets">
                            <h3>Planets</h3>
                            <PlanetPage />
                        </Route>

                        <Route path="/starships">
                            <h3>Starships</h3>
                            <StarshipsPage />
                        </Route>

                    </div>
                </Router>
            </SwapiContext.Provider>
        );
    }
}

