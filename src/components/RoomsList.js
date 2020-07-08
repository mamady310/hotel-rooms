import React from 'react';
import Room from './Room';


export default function RoomsList({rooms}) {
if(rooms.length === 0) {
    return (
        <>
        <h3>No Rooms matched your search parameters</h3>
        </>
    )
}
    return <section className="roomslist">
        <div className="roomslist-center">
           {
            rooms.map(item => {
            return <Room key={item.id} room={item} />
            })   
           }
        </div>
    </section>;
}
