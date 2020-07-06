import React from 'react';
import './FilmsPage.css';

import FilmsList from '../FilmsList';
import DetailsInfo from '../DetailsInfo';
import SwapiServices from '../../services/SwapiServices';
import Row from '../Row';

export default class FilmsPage extends React.Component {

    state = {
        selectedFilm: null,
    }

    swapi = new SwapiServices();

    onSelectFilm = (id) => {
        this.setState({
            selectedFilm: id
        });
    }

    render() {

        const { selectedFilm } = this.state;

        const FilmsItemsList = (
            <FilmsList
                onItemClick={this.onSelectFilm}
                renderItem={(item) =>
                    `Episode ${item.episodeId}: ${item.title}`}
            />
        );

        const FilmDetailsInfo = (
            <DetailsInfo
                itemId={selectedFilm}
                getData={this.swapi.getFilm}
                itemInfo={
                    ['director', 'producer', 'releaseDate']
                }
                srcImg={`https://starwars-visualguide.com/assets/img/films/`}
            />
        );

        return (
            <div className="FilmsPage">
                <Row
                    left={FilmsItemsList}
                    right={FilmDetailsInfo}
                />
            </div>
        )
    }
}