import React from 'react';

import './PeoplesList.css';
import SwapiServices from '../../services/SwapiServices';
import withData from '../helpers/withData';

const PeoplesList = (props) => {

    const {data, onItemClick, renderItem} = props;

    const renderItems = (arr) => {
        return (
            arr.map((item) => {
                const text = renderItem(item);
                return (
                    <li
                        key={item.id}
                        className="list-group-item"
                        onClick={() => onItemClick(item.id)}
                    >
                        {text}
                    </li>
                )
            })
        );
    }

    const elemets = renderItems(data);

    return (
        <ul className="list-group PeoplesList ItemsList">
            {elemets}
        </ul>
    );
}

const { getAllPeople } = new SwapiServices();
export default withData(PeoplesList, getAllPeople);