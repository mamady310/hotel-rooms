import React from 'react';
import { useContext } from 'react';
import { RoomContext} from '../context';
import Title from '../components/Title';

//get unique values for options dropdown so that each room type is only rendered once
const getUnique = (item, value) => {
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
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
       <Title title="Search Rooms" />
       <form className="filter-form">
        {/* slect type */}
        <div className="form-group">
            <label htmlFor="type">room type</label>
            <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
               {types}
            </select>
        </div>
        {/* end select type */}
         {/* guests */}
         <div className="form-group">
            <label htmlFor="capacity">guests</label>
            <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
               {people}
            </select>
        </div>
        {/* {end guests} */}
        {/* room price*/}
        <div className="form-goup">
        <label htmlFor="price">
        room price ${price}
        </label>
        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange}className="form-control"/>
        </div>
        {/* end room price */}
        </form>    
        </section>
    )
}
