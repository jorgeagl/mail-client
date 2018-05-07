import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Minimal React Webpack Babel Setup';
if (module.hot) {
  module.hot.accept();
}
ReactDOM.render(
  <div>{title}</div>, document.getElementById('app')
);
