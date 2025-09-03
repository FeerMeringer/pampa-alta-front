import React from 'react';
import './Productos.css';

export default function Productos() {
    const products = [
        // ==================== PANELES SOLARES ====================
        // Jinko Solar
     { 
    name: "Paneles Jinko Solar - Tecnología Tiger", 
    image: "https://i.postimg.cc/Bnjnjv2P/Jinko-440-1.png",
    specs: [
        "Tiger Neo 440Wp - Mono N-Type - 108 celdas",
        "Tiger Pro 550Wp - Mono PERC - 144 celdas", 
        "Tiger Pro 585Wp - Mono N-Type - 144 celdas",
        "Tiger Pro 590Wp - Mono N-Type - 144 celdas",
        "Tiger Neo 610Wp - Mono N-Type Bifacial - 132 celdas"
    ],
    category: "paneles"
},

        // Trina Solar
        { 
    name: "Paneles Trina Solar - Serie Vertex", 
    image: "https://i.postimg.cc/hG3wfSbv/trina.jpg", 
    specs: [
        "Vertex 565Wp - Mono PERC - 132 celdas",
        "Vertex 570Wp - Mono PERC - 132 celdas", 
        "Vertex 575Wp - Mono PERC - 132 celdas",
        "Vertex 710Wp - N-Type Bifacial - 132 celdas - Doble vidrio"
    ],
    category: "paneles"
},

        // JA Solar
       { 
    name: "Paneles JA Solar - Serie DeepBlue", 
    image: "https://i.postimg.cc/HnKvk3QN/jasolar.jpg", // Buscar imagen de JA Solar
    specs: [
        "DeepBlue 3.0 565W - Mono PERC",
        "DeepBlue 4.0 610W - N-Type Bifacial",
        "DeepBlue 4.0 615W - N-Type Bifacial", 
        "DeepBlue 4.0 620W - N-Type Bifacial"
    ],
    category: "paneles"
},
   //Risen
{ 
    name: "Panel Risen Energy - Titan Series", 
    image: "https://i.postimg.cc/qBt99CcF/risen.jpg", 
    specs: [
        "Titan 640Wp - N-Type Bifacial"
    ],
    category: "paneles"
},
        // Amerisolar
       { 
    name: "Paneles Amerisolar - Baja Potencia", 
    image: "https://i.postimg.cc/FFZLX79j/amerisolar.jpg",
    specs: [
        "100W - Monocristalino - 36 celdas",
        "200W - Monocristalino - 39 celdas",
        "285W - Policristalino - 60 celdas",
        "340W - Policristalino - 72 celdas",
        "430W - N-Type - 108 celdas",
        "470W - N-Type - 120 celdas"
    ],
    category: "paneles"
},
    { 
    name: "Paneles Amerisolar - Alta Potencia", 
    image: "https://i.postimg.cc/FFZLX79j/amerisolar.jpg",
    specs: [
        "550W All Black - Mono PERC - 144 celdas",
        "550W Bifacial - Mono PERC Bifacial - 144 celdas",
        "555W - Mono PERC Bifacial - 144 celdas",
        "580W - N-Type - 144 celdas",
        "Flexible 460W - Mono PERC Flexible - 132 celdas"
    ],
    category: "paneles"
},
        // ==================== INVERSORES ====================
        // Growatt Monofásicos
        { 
    name: "Inversores Growatt - On Grid", 
    image: "https://i.imgur.com/ngpdqHI.jpg",
    specs: [
        "1000W - Incluye Dongle WIFI-X",
        "1500W - ",
        "2000W - Incluye Dongle WIFI-X",
        "2500W - Incluye Dongle WIFI-X", 
        "3000W - Incluye Dongle WIFI-X"
    ],
    category: "inversores"
},
    { 
    name: "Inversores Growatt - On Grid", 
    image: "https://i.imgur.com/ngpdqHI.jpg",
    specs: [
        "3600W - Incluye Dongle WIFI-X",
        "4200W - Incluye Dongle WIFI-X",
        "5000W - Incluye Dongle WIFI-X",
        "6000W - Incluye Dongle WIFI-X"
    ],
    category: "inversores"
},

        // Growatt Off-Grid
       { 
    name: "Inversores Growatt Off-Grid - 3000VA", 
    image: "https://i.imgur.com/ngpdqHI.jpg",
    specs: [
        "3000VA 24V/220V - No paralelizable - Incluye Dongle WIFI-F",
        "3000VA 48V/220V - No paralelizable - Incluye Dongle WIFI-F"
    ],
    category: "inversores"
},
    { 
    name: "Inversores Growatt Off-Grid - Alta Potencia", 
    image: "https://i.imgur.com/ngpdqHI.jpg",
    specs: [
        "3500VA 48V/220V - Amplio rango voltaje - Paralelizable hasta 6 - Incluye Dongle WIFI-F",
        "5000VA 48V/220V - Amplio rango voltaje - Paralelizable hasta 6 - Incluye Dongle WIFI-F", 
        "6000VA 48V/220V - 2 MPPT - Paralelizable hasta 6 - Incluye Dongle WIFI-F"
    ],
    category: "inversores"
},
{
  name: "Inversor Solar Off-Grid Growatt",
  image: "https://i.postimg.cc/q720vXw9/inversor1.jpg", 
  specs: [
    "Paralelizable - modo SUB - hasta 450V y 6000W de paneles",
    "Eficiencia del 93% en conversión",
    "Modo SBU que mezcla red y paneles",
    "Tensión de salida 230V (hogar/comercial)",
    "Puerto USB para comunicación remota"
  ],
  category: "inversores"
},
        //voltronic
        { 
    name: "Inversores Voltronic - Bajas Potencias", 
    image: "https://i.imgur.com/hccXRVI.jpg",
    specs: [
        "1000VA/1000W 12V - MPPT 40A - VOC 102V - Max 500Wp",
        "2000VA/2000W 24V - MPPT 40A - VOC 102V - Max 1000Wp",
        "3000VA/3000W 24V - MPPT 40A - VOC 102V - Max 1000Wp"
    ],
    category: "inversores"
},
    { 
    name: "Inversores Voltronic - Altas Potencias", 
    image: "https://i.imgur.com/hccXRVI.jpg",
    specs: [
        "5000VA/5000W 48V - PWM 50A - VOC 105V - Max 2400Wp",
        "6000VA/6000W 48V - MPPT 120A - VOC 500V - Max 6000Wp - WiFi",
        "6000VA/6000W 48V - MPPT 120A - VOC 500V - Max 6000Wp - No paralelizable - WiFi",
        "11000VA/11000W 48V - 2 MPPT 150A - VOC 500V - Max 11000Wp - Paralelizable - WiFi"
    ],
    category: "inversores"
},


        // ==================== BATERÍAS ====================
        // Pylontech
        { 
    name: "Baterías Pylontech - Litio", 
    image: "https://i.imgur.com/Pzdx0R6.png",
    specs: [
        "3.5kWh - 48V - Paralelizable",
        "4.8kWh - 48V - Paralelizable", 
        "4.8kWh - 48V - Paralelizable"
    ],
    category: "baterias"
},
        { 
    name: "Baterías Growatt - Litio", 
    image: "https://i.imgur.com/63XYiD0.jpg",
    specs: [
        "5.5kWh - 51.2V - Hasta 12 en paralelo",
        "5.12kWh - 51.2V - Hasta 48 en paralelo"
    ],
    category: "baterias"
},

        // Leoch Litio
       { 
    name: "Baterías Leoch - Litio", 
    image: "https://i.imgur.com/xp0xd2v.jpg",
    specs: [
        "25.6V 200Ah - 5.12kWh - Hasta 15 en paralelo",
        "51.2V 100Ah - 5.12kWh - Con Bluetooth y display",
        "Pared 51.2V 100Ah - 5.12kWh - Montaje en pared",
        "12V 100Ah - 1.2kWh - IP65 resistente",
        "12V 200Ah - 2.4kWh - 150A descarga máxima", 
        "24V 100Ah - 2.4kWh - Con Bluetooth"
    ],
    category: "baterias"
},

        // Leoch Plomo-Ácido
       { 
    name: "Baterías Leoch - AGM", 
    image: "https://i.imgur.com/pg14Ewv.jpg",
    specs: [
        "12V 115Ah - Sin mantenimiento",
        "12V 160Ah - Sin mantenimiento",
        "12V 230Ah - Sin mantenimiento"
    ],
    category: "baterias"
},
        // UltraCell GEL
       { 
    name: "Baterías UltraCell - GEL", 
    image: "https://i.imgur.com/lAMsn7c.jpg",
    specs: [
        "12V 100Ah - Sin mantenimiento",
        "12V 150Ah - Sin mantenimiento", 
        "12V 200Ah - Sin mantenimiento",
        "12V 275Ah - Sin mantenimiento"
    ],
    category: "baterias"
},

        // ==================== BOMBAS SOLARES ====================
 { 
    name: "Bombas Handuro Helicoidal Sumergible", 
    image: "https://i.imgur.com/1Aj9h1h.jpg",
    specs: [
        "750W - Helicoidal Sumergible",
        "500W - Helicoidal Sumergible", 
        "210W - Helicoidal Sumergible"
    ],
    category: "bombas"
},

        // ==================== ACCESORIOS ====================
        { 
    name: "Protecciones Suntree", 
    image: "https://i.postimg.cc/Z5ZQq5zj/protector.jpg",
    specs: [
        "Descargador CC Tipo II 500Vcc - 40kA",
        "Descargador CC Tipo II 1000Vcc - 40kA",
        "Descargador CA 2P Tipo II 275V - 30kA",
        "Descargador CA 4P Tipo II 385V - 30kA"
    ],
    category: "accesorios"
},
        { 
    name: "Cajas de Combinación", 
    image: "https://i.postimg.cc/Wbt3HTHW/caja.jpg",
    specs: [
        "1 entrada 1 salida 1000V - Con térmica y fusibles",
        "1 entrada 1 salida 500V - Con térmica y fusibles", 
        "2 entradas 1 salida 500V - Con térmica y fusibles"
    ],
    category: "accesorios"
},
    { 
    name: "Interruptores Termomagnéticos CC", 
    image: "https://i.postimg.cc/j5FVw042/interruptor.jpg",
    specs: [
        "550V 20A - Corriente continua",
        "550V 40A - Corriente continua",
        "550V 63A - Corriente continua", 
        "1000V 40A - Corriente continua"
    ],
    category: "accesorios"
}, 
    { 
    name: "Seccionadores Baterías Suntree", 
    image: "https://i.postimg.cc/d0XPDcB1/seccionadores.jpg",
    specs: [
        "12V/24V - Hasta 275A",
        "48V - Hasta 275A"
    ],
    category: "accesorios"
},
    { 
    name: "Conectores MC4 Slocable", 
    image: "https://i.postimg.cc/Prcm662D/conectores.jpg",
    specs: [
        "Par macho/hembra - Para cables 2.5-6.5mm²",
        "T Branch 2-1 - 2 entradas 1 salida",
        "T Branch 3-1 - 3 entradas 1 salida"
    ],
    category: "accesorios"
},
    { 
    name: "Manta Solar", 
    image: "https://i.postimg.cc/TwCbnQKp/manta.jpg", 
    specs: [
        "Material: Polietileno resistente",
        "Uso: Cobertura de piscinas",
        "Función: Captación calor solar",
        "Formato: Panel flotante"
    ],
    category: "accesorios"
},
 { 
    name: "Proyector Solar", 
    image: "https://i.postimg.cc/vB7mkvfY/proyectorsolar1.jpg", 
    specs: [
        "Potencia: 150 W (≈ 24 000 lúmenes, luz fría)",
    "Batería LiFePO₄ 3.2 V 6 000 mAh",
    "Autonomía: 10–15 horas tras carga completa",
    "Tiempo de carga solar: 6–8 horas",
    "Panel solar monocristalino incluido",
    "Protección IP67; carcasa de aluminio resistente",
    "Consulta por mas modelos"
    ],
    category: "accesorios"
},
    ];

    const [activeCategory, setActiveCategory] = React.useState("todos");
    const [flippedCards, setFlippedCards] = React.useState([]);

    const toggleFlip = (index) => {
        if (flippedCards.includes(index)) {
            setFlippedCards(flippedCards.filter(i => i !== index));
        } else {
            setFlippedCards([...flippedCards, index]);
        }
    };

    const filteredProducts = activeCategory === "todos" 
        ? products 
        : products.filter(product => product.category === activeCategory);

    return (
        <section className='productos-section'>
            <div className='productos-header'>
                <h1 className='productos-titulo-principal'>Nuestros Productos</h1>
                <p className='productos-descripcion'>
                    Haz clic en las tarjetas para ver las especificaciones técnicas completas.
                </p>
                
                {/* Filtros por categoría */}
                <div className="filtros-categoria">
                    {["todos", "paneles", "inversores", "baterias", "bombas", "accesorios"].map((category) => (
                        <button
                            key={category}
                            className={`filtro-btn ${activeCategory === category ? "active" : ""}`}
                            onClick={() => {
                                setActiveCategory(category);
                                setFlippedCards([]);
                            }}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        
            <div className="productos-grid">
                {filteredProducts.map((product, index) => (
                    <div 
                        className={`flip-card ${flippedCards.includes(index) ? "flipped" : ""}`} 
                        key={index}
                        onClick={() => toggleFlip(index)}
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='producto-imagen' src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <span className="producto-categoria">{product.category}</span>
                            </div>
                            <div className="flip-card-back">
                                <h3>{product.name}</h3>
                                <ul>
                                    {product.specs.map((spec, i) => (
                                        <li key={i}>{spec}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botón de WhatsApp */}
            <a 
                href="https://api.whatsapp.com/send?phone=3516803734" 
                target="_blank" 
                className="whatsapp-float" 
                rel="noopener noreferrer"
            >
                <img 
                    className="img-whatsapp" 
                    src="https://i.imgur.com/NQEJITk.png" 
                    alt="Contactar por WhatsApp" 
                />
            </a>
        </section>
    );
}