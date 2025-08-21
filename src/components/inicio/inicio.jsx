import React from 'react';
import './inicio.css';

export default function Inicio() {
    return (
        <section className='inicio'>
            {/* Sección de encabezado principal (antes el primer slide) */}
            <div className='hero-header'>
                <img className="hero-image" src="https://i.imgur.com/UF6dzRl.jpg" alt="Instalación de paneles solares" />
                <div className='hero-content'>
                    <h1 className='titulo-principal'>Pampa Alta Solar</h1>
                    <h3 className='subtitulo'>Potencia tu hogar con energía renovable</h3>
                    <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" className="btn-cta" rel="noopener noreferrer">
                        Solicita un Presupuesto
                    </a>
                </div>
            </div>
            
            {/* Sección de beneficios */}
            <div className='section-razones'>
                <h2 className='titulo-razones'>Una Elección Inteligente para tu Hogar</h2>
                <ul className='lista-razones'>
                    <li>
                        <span className="icon-list">💰</span>
                        <p>
                            **Ahorro en costos de energía:** Reduce tus gastos mensuales de electricidad y toma el control de tus costos energéticos.
                        </p>
                    </li>
                    <li>
                        <span className="icon-list">🌿</span>
                        <p>
                            **Sostenibilidad ambiental:** Contribuye a la protección del medio ambiente al utilizar una fuente de energía limpia y renovable.
                        </p>
                    </li>
                    <li>
                        <span className="icon-list">💡</span>
                        <p>
                            **Independencia energética:** Disfruta de electricidad confiable incluso en áreas remotas y durante cortes de energía.
                        </p>
                    </li>
                    <li>
                        <span className="icon-list">📈</span>
                        <p>
                            **Valorización de tu hogar:** Aumenta el valor de tu propiedad al incorporar sistemas de energía solar.
                        </p>
                    </li>
                    <li>
                        <span className="icon-list">🛠️</span>
                        <p>
                            **Durabilidad y bajo mantenimiento:** Los paneles solares son resistentes y requieren poco mantenimiento a lo largo de su vida útil.
                        </p>
                    </li>
                    <li>
                        <span className="icon-list">🌍</span>
                        <p>
                            **Compromiso con un futuro sostenible:** Tu elección de energía solar tiene un impacto positivo en la reducción de emisiones y en la preservación del medio ambiente.
                        </p>
                    </li>
                </ul>
                <p className='razones-texto-final'>Aprovecha los beneficios de la energía solar y descubre una forma más rentable y sostenible de obtener energía para tu hogar.</p>
            </div>
            
            {/* Botón de WhatsApp flotante */}
            <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" className="whatsapp-float" rel="noopener noreferrer">
                <img className='img-whatsapp' src="https://i.imgur.com/NQEJITk.png" alt="WhatsApp" />
            </a>
        </section >
    );
}