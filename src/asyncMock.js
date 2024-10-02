const products = [
  {
    id: 1,
    title: 'Disco',
    price: '500',
    category: 'spare parts',
    description: 'disco delantero de freno',
    image: '',
  },
  {
    id: 1,
    title: 'Sensor Map',
    price: '900',
    category: 'sensors',
    description: 'sensor de aire Map ',
    image: '',
  },
  {
    id: 1,
    title: 'Autoestereo',
    price: '2000',
    category: 'devices',
    description: 'Autoestereo universal',
    image: '',
  }

]

const getProducts = new Promise((resolve) => {
  setTimeout(() => {
  resolve(Products)
  }, 2000)
})