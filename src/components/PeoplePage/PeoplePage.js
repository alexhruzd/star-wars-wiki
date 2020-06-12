import React from 'react';
import './PeoplePage.css';

import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';
import SwapiServices from '../../services/SwapiServices';


const Row = ({ left, right }) => {
    return (
        <div className="Row row">
            <div className="col">
                {left}
            </div>
            <div className="col">
                {right}
            </div>
        </div>
    );
}

export default class PeoplePage extends React.Component {

    state = {
        selectedPerson: null,
    }

    swapi = new SwapiServices();

    onSelectPerson = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    render() {

        const itemsList = (
            <ItemsList
                onItemClick={this.onSelectPerson}
                getData={this.swapi.getAllPeople}
                renderItem={(item) =>
                    `${item.name} (${item.gender}, ${item.mass}kg)`}
            />
        );

        const detailsInfo = (
            <DetailsInfo personId={this.state.selectedPerson} />
        );

        return (
            <div className="PeoplePage">
                <Row
                    left={itemsList}
                    right={detailsInfo}
                />
            </div>
        )
    }
}
