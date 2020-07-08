import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from '../components/Loading';

function RoomContainer({context}) {
const{loading, sortedRooms, rooms} = context;
if(loading) {
    return <Loading />;
}
return (
    <div>
        hello from rooms container
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms}/>
    </div>
    );
}

export default withRoomConsumer(RoomContainer)

//The code below was commented out so that withRoomConsumer Function could be imported from context for cleaner. Left below for reference. 
// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../context';
// import Loading from '../components/Loading';

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer >
//         {value => {
//             //value shows us all the information stored in state retrieved from context.js
//             // console.log(value);
//             //don't do functionality in return
//             const {loading, sortedRooms, rooms} = value
//       if(loading) {
//           return <Loading />
//       }
//                 return (
//                     <div>
//                     rooms container
//                     <RoomsFilter rooms={rooms} />
//                     <RoomsList  rooms={sortedRooms}/>
//                 </div>    
//                 ); 
//             }}
//         </RoomConsumer>
//     )
// }
