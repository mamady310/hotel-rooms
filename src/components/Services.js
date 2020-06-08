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
            info:"This services inlcudes packing and unpacking for guests to save you time and worries. We ensure that your things arrive safely.",   
            },
            {
            icon:<GiFruitBowl />,
            title:"Meals Anytime",
            info:"Great gourmet made to order anytime of the day anywhere on the hotel property. We even have all day breakfast!",   
             },
             {
            icon:<AiFillCar />,
            title:"Chauffer Check-In",
            info:"We can have a driver pick you up at the airport and begin the checkin process in the car. Once you reac the hotel you just head straight to you room!",   
             },
             {
            icon:<TiCamera />,
            title:"Sight Seeing",
            info:"Want to get out and see all the great things your destination has to offer? We have plenty of tours that we can arrange for you, just ask!",   
             }
        ]
    }
    render() {
        return (
            <section className="services">
              <Title title="services" />
             <div className="services-center"> 
             {this.state.services.map((item, index) => {
                 return <article key={index} className="service">
                    <span>{item.icon}</span>
                     <h6>{item.title}</h6>
                     <p>{item.info}</p>
                 </article>
             })}
             </div>
            </section>
        )
    }
}
