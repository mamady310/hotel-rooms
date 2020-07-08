import React from 'react';
import { useContext } from 'react';
import { RoomContext} from '../context';
import Title from '../components/Title';

//get unique values for options dropdown so that each room type is only rendered once
const getUnique = (item, value) =>{
    return [...new Set(item.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    // console.log(context);
    const {
        handleChange, 
        type, 
        capacity, 
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    //get unique types for options
    let types = getUnique(rooms, 'type');
    //add all 
    types = ['all',...types];
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
       <Title title="Search Rooms" />
       <form className="filter-form">
        {/* {slect type} */}
        <div className="form-group">
            <label htmlFor="">room type</label>
            <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
               {types}
            </select>
        </div>
        {/* {end select type} */}
        </form>    
        </section>
    )
}
