import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import BrowserApp from './browser';


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('js-react-app'),
  )
};

render(BrowserApp);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./browser', () => { render(BrowserApp) })
}