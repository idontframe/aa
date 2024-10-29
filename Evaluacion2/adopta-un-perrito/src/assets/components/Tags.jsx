/* src/components/Tags.jsx */
import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = ({ text, color }) => {
    return (
        <Badge style={{ backgroundColor: color, color: 'white' }} className="me-1">
            {text}
        </Badge>
    );
};

export default Tags;
