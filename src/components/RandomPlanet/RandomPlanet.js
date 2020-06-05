import React from 'react';

import SwapiServices from '../../services/SwapiServices';
import './RandomPlanet.css';
import Loader from '../Loader';
import ErrorComponent from '../ErrorComponent';

export default class RandomPlanet extends React.Component {

    swapi = new SwapiServices();


    state = {
        planet: {},
        load: true,
        error: false,
    }

    componentDidMount() {
        this.updatePlanet();
        setInterval(this.updatePlanet, 5000);
    }

    onError = () => {
        this.setState({
            error: true,
            load: false,
        });

    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            load: false,
        });
    }

    updatePlanet = () => {
        const id = Math.round(Math.random() * 30);
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {

        const { planet, load, error } = this.state;

        const loader = load ? <Loader /> : null;
        const content = (!load && !error) ? <PlanetView planet={planet} /> : null;
        const err = error ? <ErrorComponent /> : null;

        return (
            <div className="RandomPlanet">
                {err}
                {loader}
                {content}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, diameter, population, gravity } = planet;
    return (
        <>
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
        </>
    );

}