import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';


const App = () => {
    // const swapi = new SwapiServices();
    // swapi.getAllPeople()
    //     .then((body) => {
    //         console.log(body);
    //     });

    // swapi.getPerson(5)
    //     .then((body) => {
    //         console.log(body);
    //     });

    // swapi.getAllPlanets()
    //     .then((body) => {
    //         console.log(body);
    //     });

    // swapi.getPlanet(5)
    //     .then((body) => {
    //         console.log(body);
    //     });

    // swapi.getAllStarships()
    //     .then((body) => {
    //         console.log(body);
    //     });

    // swapi.getStrship(5)
    //     .then((body) => {
    //         console.log(body);
    //     });

    return (
        <div className="App">
            <Header />
            <RandomPlanet />
            <div className="d-flex justify-content-between">
                <ItemsList />
                <DetailsInfo />
            </div>
        </div>
    )
}

export default App;
