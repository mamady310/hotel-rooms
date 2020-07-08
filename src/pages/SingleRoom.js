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
        // console.log(room);

        //handles page not found error when /rooms/(slug) doesn't match what is in data
        if(!room) {
            return (
            
            // <div className="error">
            //     <h3>Not Found</h3>
            //     <Link to="/rooms" className="btn-primary">Rooms</Link>
            // </div>

                <Hero hero="roomsHero">
                <Banner title="404" subtitle="Page Not found">
                <Link to='/rooms' className='btn-primary'>
                    RETURN TO Rooms
                </Link>
                </Banner>
                </Hero>
        
            );
        }
   
        const {name,
            description, 
            capacity, 
            size,
            price, 
            extras, 
            breakfast, 
            pets, 
            images} = room

        
        //can use the rest operator to only show 3 out of the 4 images of each featured room mapping over the new variable defaultImgs.map
        // const [mainImg,...defaultImgs] = images;
        // console.log(defaultImgs);

        return (
            <>
          <StyledHero img={images[0] || this.defaultBcg}>
         <Banner title={`${name} room`}>
             <Link to='/rooms' className='btn-primary'>
             Back to rooms
             </Link>
        </Banner>
        </StyledHero>
           <section className="single-room" >
               <div className="single-room-images">
                   {images.map((item, index) =>{
                      return <img key={index} src={item} alt={name}/>
                   } )}
              </div> 
              <div className="single-room-info">
                  <article classname="desc">
                      <h3>Details</h3>
                        <p>{description}</p>
                           <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT </h6>
                            <h6>
                                max capacity: {
                                    capacity > 1? `${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>
                            { pets? "Pets allowed" : "No pets allowed"}
                            </h6>
                            <h6>
                              {breakfast && "Free breakfast included"}  
                            </h6>
                            </article> 
                  </article>
              </div>
           </section>
           <section className="room-extras">
                 <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>
                            - {item}
                        </li>
                    })}
                </ul>
           </section>
        </>
        );
        
    }
}
