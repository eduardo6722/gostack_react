import React from 'react';

import api from '../../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = React.useCallback(async ({ email, password }) => {
    const response = await api.post('auth', { email, password });
    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Eduardo ', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
