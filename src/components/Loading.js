import React from 'react';
import loadingPic from '../images/gif/loading-gear.gif/';

export default function Loading() {
    return (
        <div classname="loading">
            <h4>loading...</h4>
            <img src={loadingPic} alt="loading" />
        </div>
    );
}
