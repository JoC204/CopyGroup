// src/components/LinkCard.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/LinkCard.css';

const LinkCard = ({ path, image, altText, title }) => {

  
  return (
    <div className='link-card'>
      <RouterLink to={path} className='link-card-link'>
        <img src={image} alt={altText} className='link-card-image' />
        <div className='link-card-title'>{title}</div>
        <div className='go-corner'>
          <div className='go-arrow'>→</div>
        </div>
      </RouterLink>
    </div>
  );
};

export default LinkCard;
