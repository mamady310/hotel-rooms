import React, { Component } from 'react';
import { RoomContext } from ''../context';
import Loading from '../components/Loading';

export default class FeaturedRooms extends Component {

    static contextType = RoomContext
    render() {
        // const {name, greeting} = this.context;
        // console.log(value);
        const {featuredRooms : rooms } = this.context;
        console.log(rooms);
        return (
            <div>
               from featured rooms
            </div>
        )
    }
}
