import React from 'react';
import '../styles/header.css';

import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log('Header component constructor', props);
        this.state = {
            name: 'Header component',
            id: '',
            firstName: 'first'
        }
    }

    componentDidMount() {        
        this.setState((state, props) => ({name: state.firstName + props.lastName}));
        // this will trigger when the compoents renders on the DOM 
        console.log('Header component did mount');
        console.log('=======');
    }
 
    componentDidUpdate() {
        // State, Props
        console.log('Header component did update');
        console.log('=======');
    }

    componentWillUnmount() {
        console.log('Header component will un mount');
        console.log('=======');
        // It will triger just before component is going to be removed/ unmount from DOM  
    }
    shouldComponentUpdate(prevProps , nextProps) {
        console.log('prevProps:', prevProps);
        console.log('nextProps:', nextProps);
        if(!prevProps.name || prevProps.name === nextProps.name) {
            return false;
        }
        return true;
    }

    render() {
        console.log('Header component render');
        console.log('=======');
        return(
            <header className="header">
               <ul className="header__nav-list">
                   <li className="header__list-item">
                        <Link to="/" className="header__item-link header__item-link--active">Home</Link>
                   </li>
                   <li className="header__list-item">
                        <Link className="header__item-link" to="/about">About</Link>
                   </li>
                   <li className="header__list-item">
                       <Link className="header__item-link" to="/products">Products</Link>
                   </li>
                   <li className="header__list-item">
                       <Link className="header__item-link" to="/services">Services</Link>
                   </li>
                   <li className="header__list-item">
                       <Link className="header__item-link" to="/career">Careers</Link>
                   </li>
                   <li className="header__list-item">
                       <Link className="header__item-link" to="/contact-us">Contact us</Link>
                   </li>
               </ul>
            </header>
        )
    }
}