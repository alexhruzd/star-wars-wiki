import React from 'react';
import { Link } from "react-router-dom";


import "./IndexPageContent.css";

const IndexPageContent = () => {
    return (
        <div className="IndexPageContent">
            <p>
                <b>Star Wars</b> is an American epic space-opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. The franchise holds a Guinness World Records title for the "Most successful film merchandising franchise." In 2020, the Star Wars franchise's total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.
            </p>

            <div className="category_block">
                <Link to="/peoples">
                    <CardCategory
                        imgSrc={`https://starwars-visualguide.com/assets/img/categories/character.jpg`}
                        nameCategory={'Characters'}
                    />
                </Link>
                <Link to="/films">
                    <CardCategory
                        imgSrc={`https://starwars-visualguide.com/assets/img/categories/films.jpg`}
                        nameCategory={'Films'}
                    />
                </Link>
                <Link to="/starships">
                    <CardCategory
                        imgSrc={`https://starwars-visualguide.com/assets/img/categories/starships.jpg`}
                        nameCategory={'Starships'}
                    />
                </Link>
                <Link to="/planets">
                    <CardCategory
                        imgSrc={`https://starwars-visualguide.com/assets/img/categories/planets.jpg`}
                        nameCategory={'Planets'}
                    />
                </Link>

            </div>
        </div>
    );
}

const CardCategory = (props) => {

    const { imgSrc, nameCategory } = props;

    return (
        <div className="CardCategory">
            <img src={imgSrc} alt="category" />
            <span>{nameCategory}</span>
        </div>
    );
}

export default IndexPageContent;
