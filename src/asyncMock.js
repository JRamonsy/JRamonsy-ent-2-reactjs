const products = [
  {
    id: 1,
    title: 'Disco',
    price: '500',
    category: 'repuestos',
    description: 'Mejora el rendimiento de frenado de tu vehículo con este disco de freno de alta calidad. Ideal para una conducción segura y precisa en todo tipo de terreno.',
    image: '/disco de freno.jpeg',
  },
  {
    id: 2,
    title: 'Sensor Map',
    price: '900',
    category: 'sensores',
    description: 'Optimiza el rendimiento de tu motor con el sensor MAP (Presión Absoluta del Múltiple). Asegura un control preciso de la mezcla de aire y combustible para mayor eficiencia y potencia.',
    image: '/sensor Map.jpeg',
  },
  {
    id: 3,
    title: 'Autoestereo',
    price: '2000',
    category: 'dispositivos',
    description: 'Moderniza tu auto con esta pantalla de autoestéreo universal, equipada con funciones multimedia avanzadas y una interfaz táctil intuitiva para un entretenimiento de primer nivel.',
    image: '/pantalla universal.jpeg',
  }
  ,
  {
    id: 4,
    title: 'Tornillo estabilizador',
    price: '600',
    category: 'repuestos',
    description: 'Mantén la estabilidad de tu vehículo en las curvas y terrenos difíciles con este tornillo estabilizador resistente y de fácil instalación, ideal para una conducción suave.',
    image: '/tornillo estabilizador.webp',
  },
  {
    id: 5,
    title: 'Bieleta',
    price: '550',
    category: 'repuestos',
    description: 'Aumenta la vida útil de tu sistema de dirección con esta bieleta de terminal de alta durabilidad, diseñada para ofrecer un manejo preciso y estable en todas las condiciones.',
    image: '/bieleta.jpeg',
  },
  {
    id: 6,
    title: 'Sensor de aceite',
    price: '1900',
    category: 'sensores',
    description: 'Protege tu motor con el sensor de aceite que mide la temperatura y la presión de manera precisa. Asegura el funcionamiento óptimo de tu vehículo y previene daños costosos.',
    image: '/sensor de aceite.jpeg',
  },
  {
    id: 7,
    title: 'Sensor de calister',
    price: '1550',
    category: 'sensores',
    description: 'Mejora el control de emisiones de tu vehículo con este sensor de oxígeno en el calister, diseñado para mantener la eficiencia de combustible y reducir el impacto ambiental.',
    image: '/sensor calister.jpeg',
  },
  {
    id: 8,
    title: 'Camara de reversa universal',
    price: '650',
    category: 'dispositivos',
    description: 'Aparca con total seguridad y precisión gracias a esta cámara de reversa universal con luz LED, que proporciona una imagen clara y nítida incluso en condiciones de poca luz.',
    image: '/camara.jpg',
  },
  {
    id: 9,
    title: 'kit vidrios electricos',
    price: '2800',
    category: 'dispositivos',
    description: 'Convierte tu sistema manual en uno eléctrico con este kit de vidrios eléctricos universales. Fácil de instalar, mejora la comodidad y el estilo de tu vehículo.',
    image: '/kit vidrios.webp',
  }

]

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
  resolve(products)
  }, 2000)
})

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
  return products.filter((product) => product.category === category);
};