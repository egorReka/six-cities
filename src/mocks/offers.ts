import { Offer } from '../types/types';

const offers: Offer[] = [
  {
    id: 1,
    price: 200,
    rating: 4.4,
    title: 'Beautiful & luxurious apartment at great location',
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/apartment-01.jpg',
    type: 'apartment',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 2,
    price: 20,
    rating: 3.4,
    title: 'A apartment at great location beautiful',
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-02.jpg',
    type: 'room',
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    city: {
      name: 'Paris'
    }
  },
  {
    id: 3,
    price: 100,
    rating: 5.0,
    title: 'Great location apartment at great location',
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-03.jpg',
    type: 'house',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
    },
    city: {
      name: 'Paris'
    }
  },
  {
    id: 4,
    price: 100,
    rating: 3.2,
    title: 'Luxurious & beautiful apartment at great location',
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/apartment-01.jpg',
    type: 'hotel',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
    },
    city: {
      name: 'Amsterdam'
    }
  },
];

export default offers;
