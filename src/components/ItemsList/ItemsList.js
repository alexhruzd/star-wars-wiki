import React from 'react';

import './ItemsList.css';
import Loader from '../Loader';

export default class ItemsList extends React.Component {

    state = {
        item: null,
    }

    componentDidMount() {
        this.props.getData()
            .then((item) => {
                this.setState({
                    item,
                });
            });
    }

    renderItems = (arr) => {
        return (
            arr.map((item) => {
                const text = this.props.renderItem(item);
                return (
                    <li
                        key={item.id}
                        className="list-group-item"
                        onClick={() => this.props.onItemClick(item.id)}
                    >
                        {text}
                    </li>
                )
            })
        );
    }

    render() {
        const { item } = this.state;
        console.log(item);
        

        if (!item) {
            return <div className="ItemsList">
                <Loader />
            </div>
        }

        const elemets = this.renderItems(item);

        return (
            <ul className="list-group ItemsList">
                {elemets}
            </ul>
        );

    }
}

