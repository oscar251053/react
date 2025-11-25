// ...existing code...
import { useState } from "react";
import { useAuthContext } from "../Context/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useNotification } from '../Context/NotificationContext/NotificationContext';
import "./Login.css";

export const Login = () => {
    const [userForm, setUserForm] = useState({name: '', password: ''});
    const {user, login } = useAuthContext();
    const { notify } = useNotification();

    const navigate = useNavigate();
    
    if(user){
        return <Navigate to="/admin/alta-productos" />;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(userForm.name, userForm.password);
        if(success){
            navigate("/admin/alta-productos");
        }else{
            notify("Credenciales inválidas", "error");
        }
        setUserForm({name: '', password: ''});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({...userForm, [name]: value});
    };

    return (
        <form className="login-card" onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <div>
                <label>Usuario:</label>
                <input
                    type="text"
                    name="name"
                    value={userForm.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    name="password"
                    value={userForm.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};