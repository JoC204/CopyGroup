// src/components/LinkCard.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/LinkCard.css';

const LinkCard = ({path, image, altText, title }) => {
    return (
        <di>
            <RouterLink to={path}>
                <img src={image} alt={altText} className='Link-card-image'></img>
            </RouterLink>
        </di>
    );
};

export default LinkCard;