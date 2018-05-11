import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import HeadInbox from './headInbox';
import ContainInbox from './containInbox';
import './styles.scss';

class Inbox extends React.Component {
    contructor() {}
    
    render() {
        return (
            <div className="inbox">
                <HeadInbox />
                {
                    this.props.inbox.map((v, k)=>{
                        return <ContainInbox inbox={v} key={k} />
                    })
                }
            </div>
        )
    }
}

export default Inbox;