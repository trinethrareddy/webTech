import React from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import UserData from '../Components/UserData';
import Services from '../Components/Services';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'home page',
            id: 123
        }
        console.log('Home component constructor');
    }

    componentDidMount() {
        // this will trigger when the compoents renders on the DOM 
        console.log('Home page component did mount');
        console.log('=======');
    }
 
    componentDidUpdate() {
        // State, Props
        console.log('Home page component did update');
        console.log('=======');
    }

    componentWillUnmount() {
        console.log('Home page component will un mount');
        console.log('=======');
        // It will triger just before component is going to be removed/ unmount from DOM  
    }

    onChildMethodClick = (event) => {
        console.log('In Parent Component:::', event);
    }


    render() {
        console.log('Home page component render');
        console.log('=======');
        return(
            <main>
            
                <Banner/>
                <Services parentData="data from parent" onChildMethodClick={this.onChildMethodClick}/>

                <UserData onChildMethodClick={this.onChildMethodClick} />
            </main>
        )
    }
}