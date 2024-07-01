import React, { useEffect, useRef } from 'react';
import '../../styles/Empresa.css';

// Importa las imágenes locales
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
// ... importa otras imágenes

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  // ... agrega otras imágenes importadas
];

const GalleryEmpresa = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const currentImageRefs = imageRefs.current;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Reemplaza el atributo src con data-src
            img.classList.add('visible');
            observer.unobserve(img);
          }
        });
      },
      {
        threshold: [0, 0.5, 1]
      }
    );

    imageRefs.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => {
      currentImageRefs.forEach(img => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div className="gallery-empresa">
      {images.map((image, index) => (
        <img
          key={index}
          data-src={image} // Utiliza data-src para lazy loading
          alt={`Gallery ${index + 1}`} // Atributo alt sin las palabras "image", "photo" o "picture"
          ref={el => imageRefs.current[index] = el}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default GalleryEmpresa;
