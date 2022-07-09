import React from 'react';

import SwipeCard from './swipeCard';

import './wrapperBar.css';

const WrapperBar = () => {
    return(
        <div className="wrapper">
            <div className="headerWrap">
                <span className="bold"> Climate forecast for 30 days </span>
            
            </div>
 
            <div className="slider">
                <SwipeCard></SwipeCard>
            </div>
            
            
        
        </div>
    )
}

export default WrapperBar
