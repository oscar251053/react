import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../Context/useAuthContext';

export const RutaProtegida = ({ children }) => {
    const { user } = useAuthContext();

    if (!user) {
        return <Navigate to="/" replace />
    }
    return children;
};