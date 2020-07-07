import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <div className="App">
      <SignIn />
      <GlobalStyle />
    </div>
  );
};

export default App;
