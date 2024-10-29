// src/components/Formulario.jsx
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Formulario = ({ setMessage }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const almacen = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            setMessage('Por favor, llena todos los campos.');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden.');
            return;
        }

        setMessage('Registro exitoso!');
    };

    return (
        <Card style={{ width: '30rem', margin: '20px auto' }}>
            <Card.Body>
                <Card.Title>Registro</Card.Title>
                <Form onSubmit={almacen}>
                    
                    <Form.Group controlId="formName">
                        <Form.Label><FaUser /> Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label><FaEnvelope /> Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label><FaLock /> Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label><FaLock /> Confirmar Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirma tu contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
                        Registrarse
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Formulario;
