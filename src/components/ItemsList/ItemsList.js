import React from 'react';

import './ItemsList.css';
import SwapiServices from '../../services/SwapiServices';
import Loader from '../Loader';

export default class ItemsList extends React.Component {

    state = {
        people: null,
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

    renderItem = (arrPeople) => {
        return (
            arrPeople.map((person) => {
                return (
                    <li
                        key={person.id}
                        className="list-group-item"
                        onClick={() => this.props.onItemClick(person.id)}
                    >
                        {person.name}
                    </li>
                )
            })
        );
    }

    render() {
        const { people } = this.state;

        if (!people) {
            return <Loader />
        }

        const elemetsPerson = this.renderItem(people);

        return (
            <ul className="list-group ItemsList">
                {elemetsPerson}
            </ul>
        );

    }
}

