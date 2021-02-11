import React from 'react';
import '../styles/header.css';

import {NavLink} from 'react-router-dom';

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
                        <NavLink to="/home" className="header__item-link" activeClassName="header__item-link--active">Home</NavLink>
                   </li>
                   <li className="header__list-item">
                        <NavLink className="header__item-link" to="/about" activeClassName="header__item-link--active">About</NavLink>
                   </li>
                   <li className="header__list-item">
                       <NavLink className="header__item-link" to="/products" activeClassName="header__item-link--active">Products</NavLink>
                   </li>
                   <li className="header__list-item">
                       <NavLink className="header__item-link" to="/services" activeClassName="header__item-link--active">Services</NavLink>
                   </li>
                   <li className="header__list-item">
                       <NavLink className="header__item-link" to="/career" activeClassName="header__item-link--active">Careers</NavLink>
                   </li>
                   <li className="header__list-item">
                       <NavLink className="header__item-link" to="/contact-us" activeClassName="header__item-link--active">Contact us</NavLink>
                   </li>
               </ul>
            </header>
        )
    }
}