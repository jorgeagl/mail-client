import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './styles.scss';

class HeadInbox extends React.Component {
    render() {
        return (
            <div className="inbox">
                <div className="header">
                    <div className="item active">
                        <i className="fa fa-user-circle"></i>
                        <span className="title">Inbox</span>
                    </div>
                    <div className="item">
                        <i></i>
                        <span className="title">Trash</span>
                    </div>
                    <div className="item">
                        <i></i>
                        <span className="title">Spam</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeadInbox;