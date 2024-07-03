// src/components/LinkCard.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/LinkCard.css';

const LinkCard = ({path, image, altText, title }) => {
    return (
        <div>
            <RouterLink to={path}>
                <img src={image} alt={altText} className='Link-card-image'></img>
                <h2>{title}</h2>
            </RouterLink>
        </div>
    );
};

export default LinkCard;