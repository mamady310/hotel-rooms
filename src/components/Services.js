import React, { Component } from 'react';
import Title from './Title';
import { GiFruitBowl } from 'react-icons/gi';
import { FaLuggageCart } from 'react-icons/fa';
import { TiCamera } from 'react-icons/ti';
import { AiFillCar } from 'react-icons/ai';


export default class Services extends Component {
    state = {
        services: [
            {
            icon:<FaLuggageCart />,
            title:"Luggage Forwarding",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",   
            },
            {
            icon:<GiFruitBowl />,
            title:"Meals Anytime",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",   
             },
             {
            icon:<AiFillCar />,
            title:"Chauffer Check-In",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",   
             },
             {
            icon:<TiCamera />,
            title:"Sight Seeing",
            info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",   
             }
        ]
    }
    render() {
        return (
            <section className="services">
              <Title title="services" />
             <div className="services-center"> 
             </div>
             {this.state.services.map((item, index) => {
                 return <article key={index} className="service">
                    <span>{item.icon}</span>
                     <h6>{item.title}</h6>
                     <p>{item.info}</p>
                 </article>
             })}
            </section>
        )
    }
}
