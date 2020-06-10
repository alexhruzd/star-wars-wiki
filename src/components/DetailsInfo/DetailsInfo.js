import React from 'react';

import './DetailsInfo.css';
import SwapiServices from '../../services/SwapiServices';

export default class DetailsInfo extends React.Component {

    swapi = new SwapiServices();

    state = {
        person: null,
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if (!personId)
            return;

        this.swapi.getPerson(personId)
            .then((person) => {
                this.setState({ person });
            });
    }

    render() {

        const { person } = this.state;

        if (!person) {
            return (
                <div className="DetailsInfo">
                    <p>
                        Please, select person!
                    </p>
                </div>
            );
        }

        const { id, name, mass, birthDate, gender } = person;


        return (
            <div className="DetailsInfo">
                <h3>{name}</h3>
                <div className="d-flex info_block">
                    <img
                        alt="Person"
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                        onError={e => { e.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg` }}
                    />
                    <ul className="detail_info_block">
                        <li>
                            <span>mass </span>
                            <span>{mass}</span>
                        </li>
                        <li>
                            <span>birth date </span>
                            <span>{birthDate}</span>
                        </li>
                        <li>
                            <span>gender </span>
                            <span>{gender}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

