import React from 'react';

import SwapiServices from '../../services/SwapiServices';
import './RandomPlanet.css';
import Loader from '../Loader';

export default class RandomPlanet extends React.Component {

    constructor() {
        super();
        this.updatePlanet();
    }

    swapi = new SwapiServices();


    state = {
        planet: {},
        load: true,
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            load: false,
        });
    }

    updatePlanet() {
        const id = Math.round(Math.random() * 30);
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {

        const { planet: { id, name, diameter, population, gravity }, load } = this.state;

        if (load) {
            return (
                <div className='RandomPlanet'>
                    <Loader />
                </div>
            )
        }

        //return <Loader />;

        return (
            <div className='RandomPlanet'>
                <h3>{name}</h3>
                <div className="planet_block d-flex">
                    <img alt="Planet" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
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