import React, { useEffect, useRef } from "react";
import imgBack from "../../img/background-empresa-movile.png";
import imgDigital from "../../img/7.jpg";
import imgSerigrafia from "../../img/8.jpg";
import imgRotulados from "../../img/11.jpg";
import imgLonas from "../../img/9.jpg";
import "../../styles/Empresa.css";
import "../../styles/Body-routes.css";
const Empresa = () => {
  const imgRef = useRef(null); // Referencia para la imagen de fondo
  const serviceImagesRefs = useRef([]); // Referencias para las imágenes de servicios

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior

    // Función para manejar la animación de la imagen de fondo
    const handleScroll = () => {
      if (imgRef.current) {
        const scrollY = window.scrollY;
        // const windowHeight = window.innerHeight;
        const threshold = 600; // Umbral para el cambio de visibilidad
        const progress = Math.min(scrollY / threshold, 1); // Progreso de 0 a 1 basado en el scroll
        const opacityValue = 1 - progress; // Opacidad de 1 a 0
        imgRef.current.style.opacity = opacityValue;
        imgRef.current.style.transform = `scale(${1 + progress * 2})`;
      }
    };

    // Función para animar las imágenes de servicio
    const animateServiceImages = (entries) => {
      entries.forEach((entry) => {
        const img = entry.target;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Umbral para la animación de las imágenes de servicio
        const threshold = windowHeight * 0.5; // Cambia el valor según tus necesidades

        if (entry.isIntersecting || scrollY < threshold) {
          // Imagen entrando en el viewport o aún no alcanzado el umbral
          img.style.transition = "transform 1.2s, opacity 0.8s";
          img.style.transform = "scale(1)";
          img.style.opacity = "1";
        } else {
          // Imagen saliendo del viewport
          img.style.transition = "transform 1.2s, opacity 0.8s";
          img.style.transform = "scale(0.5)";
          img.style.opacity = "0";
        }
      });
    };

    const observerOptions = {
      threshold: [0.1, 0.5, 1], // Umbrales para activar la animación
    };

    const observer = new IntersectionObserver(
      animateServiceImages,
      observerOptions
    );

    // Observar cada imagen de servicio
    serviceImagesRefs.current.forEach((img) => {
      if (img) {
        img.style.transform = "scale(0.5)";
        img.style.opacity = "0";
        observer.observe(img);
      }
    });

    // Añadir el evento de scroll para la imagen de fondo
    window.addEventListener("scroll", handleScroll);

    // Llamar a la función de animación de la imagen de fondo al montar el componente
    handleScroll(); // Llamar para establecer el estado inicial de la imagen de fondo

    // Limpieza del observador y el evento de scroll cuando el componente se desmonta
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="empresa-content">
      <div className="header">
        <img
          ref={imgRef}
          src={imgBack}
          alt="Empresa"
          className="img-background"
        />
        <div className="header-content">
          <h1>Copy Group</h1>
          <p>
            En Copy Group, nos especializamos en ofrecer soluciones de impresión
            de alta calidad adaptadas a las necesidades de nuestros clientes.
          </p>
        </div>
      </div>
      <div className="services-content">
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>
            <h3>Impresiones Digitales</h3>
            <img
              ref={(el) => (serviceImagesRefs.current[0] = el)}
              src={imgDigital}
              alt="Impresiones Digitales"
              className="service-image"
            />
            <p>
              Contamos con la más avanzada tecnología en impresión digital para
              ofrecer resultados precisos y de alta definición en una amplia
              variedad de materiales.
            </p>
          </li>
          <li>
            <h3>Serigrafía:</h3>
            <img
              ref={(el) => (serviceImagesRefs.current[1] = el)}
              src={imgSerigrafia}
              alt="Serigrafía"
              className="service-image"
            />
            <p>
              Ofrecemos servicios de serigrafía para producir impresiones
              duraderas y de alta calidad en textiles, plásticos, metales y
              otros soportes.
            </p>
          </li>
          <li>
            <h3>Rotulados:</h3>
            <img
              ref={(el) => (serviceImagesRefs.current[2] = el)}
              src={imgRotulados}
              alt="Rotulados"
              className="service-image"
            />
            <p>
              Realizamos rotulados personalizados para vehículos, vidrieras y
              todo tipo de superficies, asegurando una presentación profesional
              y atractiva para su marca.
            </p>
          </li>
          <li>
            <h3>Impresiones en Lonas:</h3>
            <img
              ref={(el) => (serviceImagesRefs.current[3] = el)}
              src={imgLonas}
              alt="Lonas"
              className="service-image"
            />
            <p>
              Producimos lonas publicitarias y decorativas con impresiones
              resistentes y vibrantes, ideales para eventos, promociones y
              decoración de espacios.
            </p>
          </li>
        </ul>
        <p>
          En Copy Group, nos comprometemos con la excelencia en cada proyecto,
          brindando un servicio integral que abarca desde el diseño hasta la
          entrega final del producto. Nuestro equipo de profesionales está
          dedicado a asegurar que cada impresión cumpla con los más altos
          estándares de calidad y satisfacción del cliente.
        </p>
        <p className="italic">
          Confíe en Copy Group para todas sus necesidades de impresión y
          descubra por qué somos líderes en el sector.
        </p>
      </div>
    </div>
  );
};

export default Empresa;
