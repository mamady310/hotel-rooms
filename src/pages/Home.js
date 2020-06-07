import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';


export default function Home(){
    return <div>
    <Hero>
        <Banner title="Lavish Rooms" subtitle="Rooms starting at $299">
            <Link to='/rooms' className="btn-primary">
                Rooms
            </Link>
        </Banner>
    </Hero>
    ;
    </div>
}