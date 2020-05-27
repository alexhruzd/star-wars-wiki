import React from 'react';
import SwapiServices from '../../services/SwapiServices';

const App = () => {
    const swapi = new SwapiServices();
    swapi.getAllPeople()
        .then((body) => {
            console.log(body);
        });

    swapi.getPerson(5)
        .then((body) => {
            console.log(body);
        });
    console.log('app');

    return (
        <div>
            Header
        </div>
    )
}

export default App;
