import React from 'react';
import './ColorfulHeading.css'; // Importa o CSS

const ColorfulHeading = ({ text }) => {
    return (
        <h1 className="colorabout">
            {text.split('').map((char, index) => (
                <span key={index} className={`letter letter-${index}`}>
                    {char}
                </span>
            ))}
        </h1>
    );
};

export default ColorfulHeading;
