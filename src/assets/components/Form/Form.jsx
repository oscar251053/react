import React, { useState } from "react";
export const Form = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nombre: ${nombre}, Email: ${email}, Contraseña: ${pass}`);
        setNombre("");
        setEmail("");
        setPass("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
            <input type="email" placeholder="Ingrese su email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Ingrese su contraseña" name="pass" value={pass} onChange={e => setPass(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
    );
};