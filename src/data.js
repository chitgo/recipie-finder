import {
  slider_images,
  cuisines_images,
  meals_images,
  dishes_images,
} from './utils/images'

const sliderData = [
  {
    id: 1,
    title: 'Baked Chicken Breast',
    text: 'A succulent blend of flavors, baked chicken delights the palate with simplicity.',
    image: slider_images[0],
  },
  {
    id: 2,
    title: 'Homemade Chicken Tikka Masala',
    text: 'Experience the allure of homemade Chicken Tikka Masala. Each bite, a delight of Indian flavors.',
    image: slider_images[1],
  },
  {
    id: 3,
    title: 'Meat Burger with salad cheese tomato and ketchup',
    text: 'Savor the classic meat burger: juicy patty, crisp lettuce, ripe tomato, creamy cheese, and tangy ketchup.',
    image: slider_images[2],
  },
  {
    id: 4,
    title: 'Raspberry Tartlet dessert with almond flakes',
    text: 'Indulge in a delightful Raspberry Tartlet, adorned with delicate almond flakes.',
    image: slider_images[3],
  },
]

const cuisinesData = [
  {
    type: 'American',
    image: cuisines_images[0],
  },
  {
    type: 'Asian',
    image: cuisines_images[1],
  },
  {
    type: 'Chinese',
    image: cuisines_images[2],
  },
  {
    type: 'French',
    image: cuisines_images[3],
  },
  {
    type: 'Mexican',
    image: cuisines_images[4],
  },
  {
    type: 'Middle Eastern',
    image: cuisines_images[5],
  },
  {
    type: 'Japanese',
    image: cuisines_images[6],
  },
  {
    type: 'Italian',
    image: cuisines_images[7],
  },
]

const mealTypeData = [
  {
    type: 'Breakfast',
    image: meals_images[0],
  },
  {
    type: 'Lunch',
    image: meals_images[1],
  },
  {
    type: 'Dinner',
    image: meals_images[2],
  },
  {
    type: 'Snack',
    image: meals_images[3],
  },
  {
    type: 'Teatime',
    image: meals_images[4],
  },
]

const dishTypeData = [
  {
    type: 'Alcohol-cocktail',
    image: dishes_images[0],
  },
  {
    type: 'Biscuits and cookies',
    image: dishes_images[1],
  },
  {
    type: 'Desserts',
    image: dishes_images[2],
  },
  {
    type: 'Starter',
    image: dishes_images[3],
  },
  {
    type: 'Soup',
    image: dishes_images[4],
  },
  {
    type: 'Pancake',
    image: dishes_images[5],
  },
  {
    type: 'Main course',
    image: dishes_images[6],
  },
  {
    type: 'Condiments and sauces',
    image: dishes_images[7],
  },
  {
    type: 'Salad',
    image: dishes_images[8],
  },
]

const footerLinksData = [
  {
    linkId: 'recipe-glossary',
    linkName: 'Recipe Glossary',
  },
  {
    linkId: 'press-&-media',
    linkName: 'Press & Media',
  },
  {
    linkId: 'privacy-policy',
    linkName: 'Privacy Policy',
  },
  {
    linkId: 'terms-&-conditions',
    linkName: 'Terms & Conditions',
  },
]

export { sliderData, cuisinesData, mealTypeData, dishTypeData, footerLinksData }
