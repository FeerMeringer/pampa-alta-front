import React from 'react';
import './Instalacion.css';

export default function Instalacion() {
    const instalacionProjects = [
        { 
            description: "Somos especialistas en la instalación de sistemas de energía solar. Nos encargamos de todo el proceso, desde la evaluación inicial hasta la puesta en marcha, garantizando un servicio de alta calidad y un resultado impecable. Nuestro objetivo es proporcionarte una solución energética a medida, eficiente y sostenible.",
            image: "https://i.postimg.cc/NffcND5Q/imagen6.jpg" 
        }
    ];

    const completedWorks = [
        { name: "", image: "https://i.postimg.cc/8cbT7nc0/Whats-App-Image-2025-08-21-at-20-02-37.jpg" },
        { name: "", image: "https://i.postimg.cc/90chHtbt/imagen2.jpg" },
        { name: "", image: "https://i.postimg.cc/MpCg8mKM/imagen3.jpg" },
        { name: "", image: "https://i.postimg.cc/zDxMfrG1/imagen4.jpg" },
        { name: "", image: "https://i.postimg.cc/K8MsQ3rZ/imagen5.jpg" },
        { name: "", image: "https://i.postimg.cc/0y4PKS5P/imagen1.jpg" }
    ];

    return (
        <section className="instalacion-section">
            <h1 className="instalacion-titulo-principal">Instalación</h1>
            
            <div className="instalacion-info">
                <img src={instalacionProjects[0].image} alt="Instalación de paneles solares" className="instalacion-imagen" />
                <p className="instalacion-parrafo-principal">
                    {instalacionProjects[0].description}
                </p>
            </div>
            
            <h2 className="instalacion-titulo-secundario">Trabajos Realizados</h2>
            
            <div className="trabajos-grid">
                {completedWorks.map((work, index) => (
                    <div className="trabajo-card" key={index}>
                        <img src={work.image} alt={work.name} className="trabajo-imagen" />
                        <p className="trabajo-nombre">{work.name}</p>
                    </div>
                ))}
            </div>
            
            {/* Botón de WhatsApp flotante */}
            <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" className="whatsapp-float" rel="noopener noreferrer">
                <img className="img-whatsapp" src="https://i.imgur.com/NQEJITk.png" alt="WhatsApp" />
            </a>
        </section>
    );
}