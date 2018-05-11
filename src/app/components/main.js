import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import Inbox from './../components/inbox/inbox';
import Details from './../components/details/details';

let inbox = [
    {
        "from":"mhallatt0@hotmail.com",
        "to":"jorge@gmail.com",
        "subject":"Amazon.com",
        "body":"condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
        "date":"2/03/2018",
        "isReaded":false,
        "avatar":"https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
        "tag":"Indigo",
        "attachements":[
                {"file":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff","name":"ut_nulla_sed.jpeg"}
        ]
    },
    {
        "from":"mhallatt0@gmail.com",
        "to":"jorge@gmail.com",
        "subject":"Google.com",
        "body":"condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
        "date":"3/31/2017",
        "isReaded":true,
        "avatar":"https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
        "tag":"Indigo",
        "attachements":[
                {"file":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff","name":"ut_nulla_sed.jpeg"}
        ]
    },
    {
        "from":"mhallatt0@walmart.com",
        "to":"jorge@gmail.com",
        "subject":"Facebook.com",
        "body":"condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
        "date":"3/31/2017",
        "isReaded":true,
        "avatar":"https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
        "tag":"Indigo",
        "attachements":[
                {"file":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff","name":"ut_nulla_sed.jpeg"}
        ]
    }
]

ReactDOM.render(<Inbox inbox={inbox} />, document.getElementById('inbox'));
ReactDOM.render(<Details />, document.getElementById('details'));

export default Main;