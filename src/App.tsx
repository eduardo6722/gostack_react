import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/auth/AuthContext';

import ToastContainer from './components/ToastContainer';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
        <ToastContainer />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
