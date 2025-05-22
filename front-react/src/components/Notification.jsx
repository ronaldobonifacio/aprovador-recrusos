import React, { useEffect } from 'react';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type}`}>
      <div className="notification-content">
        {type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
        <span>{message}</span>
      </div>
      <button onClick={onClose} className="notification-close">
        <FiX />
      </button>
    </div>
  );
};

export default Notification;