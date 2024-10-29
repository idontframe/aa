// src/components/SocialButton.jsx
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaReddit, FaGithub} from 'react-icons/fa';

const SocialButton = ({ icon }) => {
    return (
        <Button variant="light" style={{ margin: '5px' }}>
            {icon}
        </Button>
    );
};

const SocialButtons = () => {
    return (
        <div>
            <SocialButton icon={<FaFacebook />} />
            <SocialButton icon={<FaGoogle />} />
            <SocialButton icon={<FaReddit />} />
            <SocialButton icon={<FaGithub />} />
        </div>
    );
};

export default SocialButtons;
