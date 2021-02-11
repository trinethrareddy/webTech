import React from 'react';

import '../styles/Banner.css';
import bannerImg from '../assets/images/banner.png';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="banner">
               <div className="banner__container">
                   <div className="banner__left">
                       <h2>IT Products & services provider</h2>
                       <p>
                       We provide clients with Enterprise world-class solutions addressing their local business needs.
                       </p>
                       <button type="button">Let's talk</button>
                   </div>
                   <div className="banner__right">
                       <img src={bannerImg} alt="banner"/>
                   </div>
               </div>
            </div>
        )
    }
}