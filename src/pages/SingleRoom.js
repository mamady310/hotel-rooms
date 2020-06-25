import React, { Component } from 'react';
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from '../context';   
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
    constructor (props){
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.single,
            defaultBcg
        };
        
    }
    static contextType = RoomContext;

    // componentDidMount(){

    // }
    render() {

        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);

        if(!room) {
            return (
            <div className="error">
                <h3>Not Found</h3>
                <Link to="/rooms" className="btn-primary">Rooms</Link>
            </div>
            );
        }
        // const {name} = room
        const {name,
            description, 
            capacity, 
            size,
            price, 
            extras, 
            breafast, 
            pets, 
            images} = room
        return (
            <>
          <StyledHero img={images[0] || this.defaultBcg}>
         <Banner title={`${name} room`}>
             <Link to='/rooms' className='btn-primary'>
             Back to rooms
             </Link>
        </Banner>
        </StyledHero>
        </>
        );
        
    }
}
