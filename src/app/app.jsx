import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import Inbox from './components/inbox/inbox';
import Details from './components/details/details';

import './app.scss';

class Welcome extends React.Component {
    contructor(prop){
        //this.state = {name: 'Medium'};
    }
    
}


ReactDOM.render(<Inbox />, document.getElementById('inbox'));
ReactDOM.render(<Details />, document.getElementById('details'));
