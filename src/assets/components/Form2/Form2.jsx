import React, { useState } from "react";

export const Form2 = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        pass: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nombre: ${user.name}, Email: ${user.email}, Contraseña: ${user.pass}`);
        setUser({
            name: "",
            email: "",
            pass: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Nombre"
                required
            />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="password"
                name="pass"
                value={user.pass}
                onChange={handleChange}
                placeholder="Contraseña"
                required
            />
            <input type="submit" value="Enviar" />
        </form>
    );
};


