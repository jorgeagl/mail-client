import React from 'react';
import { render } from 'react-dom';
import './app.scss';

const App = () => <h1>Hola React
</h1>


render(
    <App />,
    document.getElementById('app')
)