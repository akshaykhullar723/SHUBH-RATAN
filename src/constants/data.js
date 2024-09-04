import images from './images';

const wines = [
  {
    title: 'Cheese Balls',
    price: '$',
    tags: 'cheesy',
  },
  {
    title: 'Vegetable Spring Rolls',
    price: '$',
    tags: 'Crunchy',
  },
  {
    title: 'Masala Vada',
    price: '$',
    tags: 'Crispy',
  },
  {
    title: 'Stuffed Mushrooms',
    price: '$',
    tags: 'Umami',
  },
  {
    title: 'Chilli Paneer',
    price: '$',
    tags: 'Spicy',
  },
];

const cocktails = [
  {
    title: 'Paneer Butter Masala',
    price: '$',
    tags: 'Creamy',
  },
  {
    title: "'N' Malai Kofta",
    price: '$',
    tags: 'RICH',
  },
  {
    title: 'Kadai Paneer',
    price: '$',
    tags: 'Spicy',
  },
  {
    title: 'Dal Makhani',
    price: '$',
    tags: 'Bourbon',
  },
  {
    title: 'Vegetable Pulao',
    price: '$',
    tags: ' Sweet Vermouth ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Got one when everyone else left behind',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Shubh ratan is star like a real one.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'As shubh ratan is restaurant as well as hotel so its great in this field.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'We have best chef that you will not find anywhere else.',
  },
];

export default { wines, cocktails, awards };
