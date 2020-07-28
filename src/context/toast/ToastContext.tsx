import React from 'react';
import ToastContainer from '../../components/ToastContainer';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = React.createContext<ToastContextData>(
  {} as ToastContextData,
);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = React.useCallback(() => {
    console.log();
  }, []);

  const removeToast = React.useCallback(() => {
    console.log('addToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
