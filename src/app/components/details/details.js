import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './details.scss';
import store from '../../../store';

class Details extends React.Component {
    

    render() {
        let email = [];
        store.subscribe(() => {
            this.setState({
                email: store.getState().email
            })
            //console.log(store.getState().email);
        })
        
        return (

            <div className="details">
            
                <p className="title">Amazon SES Address Verification Request</p>
                <div className="contain">
                    <div className="detail">
                        <div className="title-subject">
                            <span className="subject">Amazon.com</span>
                            <span className="email"> noreply@amazon.com </span>
                        </div>

                        <p className="text">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                        </p>
                        
                    </div>
                </div>
            </div>
        )
    }
    subscribe(){
        subscribe
    }
    
}

export default Details;