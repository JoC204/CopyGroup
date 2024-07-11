import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div>
      <h1>Services</h1>
      <p>This is Gallery services</p>
    </div>
  );
};

export default Services;
