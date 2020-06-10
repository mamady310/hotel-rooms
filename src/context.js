import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

//change class name from context to RoomProvider 
class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms:[],
        featuredRooms: [],
        loading: true,
    };
    // getData

    componentDidMount() {
        // let rooms = this.formatData(items)
           let rooms = items;
           console.log(rooms);
          

        let featuredRooms = rooms.filter( room => room.fields.featured === true);
        this.setState({
            rooms, 
            featuredRooms,
            sortedRooms: rooms, 
            loading:false
        });
    }
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image =>
            image.fields.file.url);

            let room = { ...items.fields, images, id };
            return room;
            
        });
        
        return tempItems;
    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext}