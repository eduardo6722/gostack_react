import React from 'react';
import {
  FiInfo,
  FiXCircle,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';

import { ToastContainer } from './styled';

import { useToast, ToastMessage } from '../../../context/toast/ToastContext';

interface ToastProps {
  message: ToastMessage;
  style: Record<string, unknown>;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({
  message: { id, title, description, type },
  style,
}) => {
  const { removeToast } = useToast();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [removeToast, id]);

  return (
    <ToastContainer type={type} hasDescription={!!description} style={style}>
      {icons[type || 'info']}
      <div>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>
      <button type="button" onClick={() => removeToast(id)}>
        <FiXCircle size={20} />
      </button>
    </ToastContainer>
  );
};

export default Toast;
