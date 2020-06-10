import React from 'react';

import './ItemsList.css';
import SwapiServices from '../../services/SwapiServices';

export default class ItemsList extends React.Component {

    state = {
        people: [],
    }

    swapi = new SwapiServices();

    componentDidMount() {
        this.swapi.getAllPeople()
            .then((people) => {
                this.setState({
                    people,
                });
            });
    }

    render() {
        const { people } = this.state;

        const elemetsPerson = people.map((person) => {

            const { id, name } = person;

            return (
                <li key={id} className="list-group-item">
                    {name}
                </li>
            );

        });

        return (
            <ul className="list-group ItemsList">
                {elemetsPerson}
            </ul>
        );

    }
}

