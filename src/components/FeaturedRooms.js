import React, { Component } from 'react';
import { RoomContext } from "../context";
import Loading from '../components/Loading';
import Room from '../components/Room';
export default class FeaturedRooms extends Component {

    static contextType = RoomContext
    render() {
        // const {name, greeting} = this.context;
        // console.log(value);
        const {featuredRooms : rooms } = this.context;
        console.log(rooms);
        return (
            <div>
               FeaturedRooms Component
               <Room />
               <Loading />
            </div>
        )
    }
}
