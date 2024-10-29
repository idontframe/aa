// src/components/Alert.jsx
import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ message }) => {
    return (
        <BootstrapAlert variant="success" style={{ margin: '20px auto' }}>
            {message}
        </BootstrapAlert>
    );
};

export default Alert;
