import React, {createContext, useContext, useState, useCallback} from 'react';
import './Notification.css';

export const NotificationContext = createContext();
export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);
    const [confirmState, setConfirmState] = useState(null);

    const addToast = useCallback((message, type = 'info', timeout = 3000) => {
        const id = Date.now() + Math.random();
        setToasts((t) => [...t, { id, message, type }]);
        if (timeout > 0) {
            setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), timeout);
        }
    }, []);

    const notify = (message, type = 'info', timeout = 3000) => addToast(message, type, timeout);

    const confirm = (message) =>
        new Promise((resolve) => {
            setConfirmState({ message, resolve });
        });

    const handleConfirmResponse = (answer) => {
        if (confirmState?.resolve) confirmState.resolve(answer);
        setConfirmState(null);
    };

    return (
        <NotificationContext.Provider value={{ notify, confirm }}>
            {children}
            <div className="notification-root" role="status" aria-live="polite">
                {toasts.map((t) => (
                    <div key={t.id} className={`toast ${t.type}`}>
                        <span>{t.message}</span>
                        <button className="toast-close" onClick={() => setToasts((v) => v.filter((x) => x.id !== t.id))}>×</button>
                    </div>
                ))}
            </div>

            {confirmState && (
                <div className="confirm-overlay">
                    <div className="confirm-modal">
                        <p>{confirmState.message}</p>
                        <div className="confirm-buttons">
                            <button className="btn-confirm" onClick={() => handleConfirmResponse(true)}>Sí</button>
                            <button className="btn-cancel" onClick={() => handleConfirmResponse(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </NotificationContext.Provider>
    );
};