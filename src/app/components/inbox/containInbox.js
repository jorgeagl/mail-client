import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './styles.scss';
import store from './../../../store';

class ContainInbox extends React.Component {
    contructor() {}
    
    render() {
        return (
               
            <div className="inboxes" onClick={ ()=> this.read_email() }>
                <ul>
                    <li className="item">
                        <i></i>
                        <span className="title">{this.props.inbox.subject}</span>
                        <span className="date">{this.props.inbox.date}</span>
                        <p className="sub-title">Amazon SES Address Verification Request</p>
                        <p className="subject-title">Lorep ipsum dolor sit amet, consectetur adip...</p>
                    </li>
                    
                </ul>
            </div>
        )
        
    }
    read_email(email) {
        store.dispatch({
            type: "READ_EMAIL",
            email: email
        });
    }
}

export default ContainInbox;