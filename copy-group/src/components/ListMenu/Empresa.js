import React, { useEffect } from 'react';
import imgBack from '../../img/background-empresa.png';
import imgDigital from '../../img/impresion-dos.jpg';
import imgSerigrafia from '../../img/impresion-uno.jpg';
import imgRotulados from '../../img/ploteo-uno.jpg';
import imgLonas from '../../img/ploteo-dos.jpg';
import '../../styles/Empresa.css';

const Empresa = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior
  }, []);

  return (
    <div className="empresa-content">
      <div className="header">
        <img src={imgBack} alt="Empresa" className="img-background"/>
        <div className="header-content">
          <h1>Copy Group</h1>
          <p>
            En Copy Group, nos especializamos en ofrecer soluciones de impresión
            de alta calidad adaptadas a las necesidades de nuestros clientes.
          </p>
          
        </div>
      </div>
      <div className="services-content">
        <h2>Nuestros Servicios:</h2>
        <ul>
          <li>
            <h3>Impresiones Digitales:</h3>
            <img src={imgDigital} alt="Impresiones Digitales"></img>
            <p>
              Contamos con la más avanzada tecnología en impresión digital para
              ofrecer resultados precisos y de alta definición en una amplia
              variedad de materiales.
            </p>
          </li>
          <li>
            <h3>Serigrafía:</h3>
            <img src={imgSerigrafia} alt="Serigrafía"></img>
            <p>
              Ofrecemos servicios de serigrafía para producir impresiones
              duraderas y de alta calidad en textiles, plásticos, metales y otros
              soportes.
            </p>
          </li>
          <li>
            <h3>Rotulados:</h3>
            <img src={imgRotulados} alt="Rotulados"></img>
            <p>
              Realizamos rotulados personalizados para vehículos, vidrieras y todo
              tipo de superficies, asegurando una presentación profesional y
              atractiva para su marca.
            </p>
          </li>
          <li>
            <h3>Impresiones en Lonas:</h3>
            <img src={imgLonas} alt="Lonas"></img>
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
        <p className='italic'>
          Confíe en Copy Group para todas sus necesidades de impresión y descubra
          por qué somos líderes en el sector.
        </p>
      </div>
    </div>
  );
};

export default Empresa;
