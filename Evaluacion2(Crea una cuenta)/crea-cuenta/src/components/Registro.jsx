// src/components/Registro.jsx
import React, { useState } from 'react';
import Formulario from './Formulario';
import SocialButtons from './SocialButton';
import Alert from './Alert';

const Registro = () => {
    const [message, setMessage] = useState('');

    return (
        <div>
            <SocialButtons />
            <Formulario setMessage={setMessage} />
            {message && <Alert message={message} />}
        </div>
    );
};

export default Registro;
