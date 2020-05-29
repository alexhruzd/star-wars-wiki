import React from 'react';

import SwapiServices from '../../services/SwapiServices';
import './RandomPlanet.css';

export default class RandomPlanet extends React.Component {

    constructor() {
        super();
        this.updatePlanet();
    }

    swapi = new SwapiServices();


    state = {
        name: null,
        diameter: null,
        population: null,
        gravity: null,
    }

    updatePlanet() {
        this.swapi.getPlanet(4)
            .then((planet) => {
                this.setState(
                    {
                        name: planet.name,
                        diameter: planet.diameter,
                        population: planet.population,
                        gravity: planet.gravity,
                    }
                );
                console.log(planet);
                
            });
    }

    render() {

        const { name, diameter, population, gravity } = this.state;

        return (
            <div className='RandomPlanet'>
                <h3>{name}</h3>
                <div className="planet_block d-flex">
                    <img alt="Planet" src='https://icdn.lenta.ru/images/2017/07/18/14/20170718144141447/detail_31a0e9ced0c9d9d04485d31ecba8d169.jpg' />
                    <ul className="planet_info_block">
                        <li>
                            <span>diameter </span>
                            <span>{diameter}</span>
                        </li>
                        <li>
                            <span>population </span>
                            <span>{population}</span>
                        </li>
                        <li>
                            <span>gravity </span>
                            <span>{gravity}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}