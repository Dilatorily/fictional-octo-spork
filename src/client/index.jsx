import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { StyleRoot } from 'radium';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import 'normalize.css';
import 'raleway-webfont/raleway.css';
import 'roboto-mono-webfont/roboto-mono.css';

import '../shared/assets/avatar.jpg';
import '../shared/assets/images';
import getPosts from '../shared/assets/posts';
import '../shared/assets/reset.css';
import App from '../shared/components/App';

OfflinePluginRuntime.install();

(async () => {
  const posts = await getPosts();

  const root = document.getElementById('root');
  const renderComponent = (Component, props) => {
    render(
      <AppContainer>
        <StyleRoot>
          <BrowserRouter>
            <Component {...props} />
          </BrowserRouter>
        </StyleRoot>
      </AppContainer>,
      root,
    );
  };

  renderComponent(App, { posts });
  if (__DEV__ && module.hot) {
    module.hot.accept('../shared/components/App', () => renderComponent(App, { posts }));
  }
})();
