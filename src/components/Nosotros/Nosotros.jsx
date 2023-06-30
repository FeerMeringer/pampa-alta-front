import React from 'react';
import './Nosotros.css';
import YouTube from 'react-youtube';

export default function Nosotros() {
  const videoId = 'kGqaldu8RCs';

  return (
    <section className="nosotros">
  <div className="acerca">
    <h1 className="tituloAcerca">Acerca De Nosotros</h1>
    <p className="parrafoAcerca">
      En nuestra empresa, nos enorgullece ser una familia comprometida con un estilo de vida autosustentable. A través de nuestro trabajo, buscamos promover activamente el cuidado y el respeto por el medio ambiente, así como brindar una solución a la creciente problemática energética que enfrentamos en la actualidad.
      Nos enfocamos en ofrecer productos de la más alta calidad, respaldados por una sólida garantía, para garantizar la satisfacción total de nuestros clientes. Nuestro compromiso no se limita solo a la venta de productos, sino que también brindamos un servicio de instalación experto, llevado a cabo por nuestro equipo altamente capacitado.
      Además, entendemos la importancia de brindar un servicio excepcional incluso después de la venta. Es por eso que nos destacamos por nuestro marcado servicio de post venta, brindando asesoramiento continuo, atención personalizada y soluciones rápidas a cualquier consulta o requerimiento que nuestros clientes puedan tener.
      En resumen, somos mucho más que una empresa familiar. Somos un equipo comprometido con el medio ambiente y con la misión de ofrecer productos de calidad, soluciones energéticas y un servicio integral que va más allá de la venta inicial. Nos enorgullece ser parte del cambio hacia un futuro más sostenible y estamos aquí para apoyarte en cada paso del camino.
    </p>
  </div>
  <div className="videoAcerca">
    <YouTube videoId={videoId} />
  </div>
  <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" className="whatsapp-float">
    <img className="imgWhats" src="https://i.imgur.com/NQEJITk.png" alt="WhatsApp" />
  </a>
</section>

  );
}


