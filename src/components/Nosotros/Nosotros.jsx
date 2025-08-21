import React from 'react';
import './Nosotros.css';
import YouTube from 'react-youtube';

export default function Nosotros() {
    const videoId = 'kGqaldu8RCs';

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <section className="nosotros-section">
            <div className="acerca-container">
                <h1 className="acerca-titulo">Acerca De Nosotros</h1>
                <p className="acerca-parrafo">
                    En nuestra empresa, nos enorgullece ser una familia comprometida con un estilo de vida autosustentable. A través de nuestro trabajo, buscamos promover activamente el cuidado y el respeto por el medio ambiente, así como brindar una solución a la creciente problemática energética que enfrentamos en la actualidad.
                    <br/><br/>
                    Nos enfocamos en ofrecer productos de la más alta calidad, respaldados por una sólida garantía, para garantizar la satisfacción total de nuestros clientes. Nuestro compromiso no se limita solo a la venta de productos, sino que también brindamos un servicio de instalación experto, llevado a cabo por nuestro equipo altamente capacitado.
                    <br/><br/>
                    Además, entendemos la importancia de brindar un servicio excepcional incluso después de la venta. Es por eso que nos destacamos por nuestro marcado servicio de post venta, brindando asesoramiento continuo, atención personalizada y soluciones rápidas a cualquier consulta o requerimiento que nuestros clientes puedan tener.
                    <br/><br/>
                    En resumen, somos mucho más que una empresa familiar. Somos un equipo comprometido con el medio ambiente y con la misión de ofrecer productos de calidad, soluciones energéticas y un servicio integral que va más allá de la venta inicial. Nos enorgullece ser parte del cambio hacia un futuro más sostenible y estamos aquí para apoyarte en cada paso del camino.
                </p>
            </div>
            
            <div className="video-container">
                <YouTube videoId={videoId} opts={opts} className="responsive-video" />
            </div>

            <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" className="whatsapp-float" rel="noopener noreferrer">
                <img className="img-whatsapp" src="https://i.imgur.com/NQEJITk.png" alt="WhatsApp" />
            </a>
        </section>
    );
}