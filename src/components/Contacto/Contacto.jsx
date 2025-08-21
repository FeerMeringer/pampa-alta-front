import React, { useState } from 'react';
import './Contacto.css';

export default function Contacto() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [formStatus, setFormStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFormStatus(null);

        const formData = { name, email, message, subject };
        const url = 'https://pampa-alta-back.onrender.com/contacts';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus({ type: 'success', message: '¡Mensaje enviado con éxito!' });
                setShowModal(true);
            } else {
                setFormStatus({ type: 'error', message: 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.' });
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setFormStatus({ type: 'error', message: 'No se pudo conectar con el servidor. Por favor, revisa tu conexión.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
    };

    return (
        <section className="contacto-section">
            <h1 className="contacto-titulo-principal">Contacto</h1>
            
            <div className="contacto-container">
                <div className="contacto-info">
                    <h2 className="contacto-subtitulo">Mejora la eficiencia energética de tu hogar</h2>
                    <p className="contacto-parrafo">
                        Completa el formulario y nos pondremos en contacto contigo para asesorarte sobre la mejor solución solar para tus necesidades.
                    </p>
                </div>
                
                <form className="contacto-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="subject">Asunto:</label>
                        <select
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        >
                            <option value="">Seleccionar</option>
                            <option value="instalacion">Instalación/Servicio</option>
                            <option value="paneles">Paneles Solares</option>
                            <option value="inversores">Inversores</option>
                            <option value="baterias">Baterías De Litio</option>
                            <option value="termotanques">Termotanques</option>
                            <option value="climatizadores">Climatizadores</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            required
                        />
                    </div>
                    
                    {formStatus && formStatus.type === 'error' && !showModal && (
                        <div className="form-error">
                            {formStatus.message}
                        </div>
                    )}
                    
                    <button type="submit" disabled={isLoading} className="submit-button">
                        {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                </form>
            </div>
            
            {/* Botón de WhatsApp flotante */}
            <a href="https://api.whatsapp.com/send?phone=3516803734" target="_blank" className="whatsapp-float" rel="noopener noreferrer">
                <img className="img-whatsapp" src="https://i.imgur.com/NQEJITk.png" alt="WhatsApp" />
            </a>
            
            {/* Modal de confirmación */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3>¡Mensaje Enviado!</h3>
                        <p>Hemos recibido tu mensaje con éxito. Te responderemos a la brevedad.</p>
                        <button onClick={handleCloseModal} className="modal-button">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}