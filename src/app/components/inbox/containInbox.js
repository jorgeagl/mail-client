import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './styles.scss';
import store from './../../../store';
import { readEmail } from './../../../actionsCreators';
import { connect } from 'react-redux';


class ContainInbox extends React.Component {
    
    render() {
        return (
            <div className="inboxes" onClick={ ()=> this.read_email(this.props.inbox) }>
                <ul>
                    <li className="item">
                        <i className="fa fa-user-circle"></i>
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
        store.dispatch(readEmail(email));
    }

    remove_email(email) {
        store.dispatch();
    }
    
    
}

const mapStateToProps = state => {
     return {
        
     }
}

const mapDispatchToProps = dispatch =>{
    return {
        read_email(email){
            dispatch(readEmail(email))
        }
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(ContainInbox);
export default ContainInbox;