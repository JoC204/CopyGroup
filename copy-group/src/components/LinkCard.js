// src/components/LinkCard.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/LinkCard.css';

const LinkCard = ({ path, image, altText, title }) => {

  
  return (
    <div className='link-card'>
      <RouterLink to={path} className='link-card-link'>
        <img src={image} alt={altText} className='link-card-image' />
      </RouterLink>
    </div>
  );
};

export default LinkCard;
