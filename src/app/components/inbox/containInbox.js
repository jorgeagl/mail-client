import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './styles.scss';

class ContainInbox extends React.Component {
    contructor() {}
    
    render() {
        
        
        
        return (
            this.props.inbox.map((v)=>{
                return(
                    <div className="inboxes" onClick={ ()=> this.check_email() }>
                        <ul>
                            <li className="item">
                                <i></i>
                                <span className="title">{v.subject}</span>
                                <span className="date">{v.date}</span>
                                <p className="sub-title">Amazon SES Address Verification Request</p>
                                <p className="subject-title">Lorep ipsum dolor sit amet, consectetur adip...</p>
                            </li>
                            
                        </ul>
                    </div>
                )
            })
        )
        
    }
    check_email() {
        
    }
}

export default ContainInbox;