import React from 'react';

import './ItemsList.css';
import SwapiServices from '../../services/SwapiServices';

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

    render() {
        return (
            <ul className="ItemsList">
                <li>
                    First Person
            </li>
                <li>
                    Second Person
            </li>
                <li>
                    Third Person
            </li>
                <li>
                    Fourth Person
            </li>
            </ul>
        );

    }
}

