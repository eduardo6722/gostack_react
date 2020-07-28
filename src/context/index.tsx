import React from 'react';

import { AuthProvider } from './auth/AuthContext';
import { ToastProvider } from './toast/ToastContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
