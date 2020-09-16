import './app.scss';
import 'bootstrap';
import { createNav } from './components/nav';
import homePage from './components/home';
import menu from './components/menu';

const main = document.querySelector('#content');

const menuList = [
  {
    imgSrc: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/be22d87a-75bc-4653-a3ce-c8590aa326ea-beef-bourguignon.jpg',
    title: 'Barramundi',
    description: 'This classic French dish might look rustic, but plenty of work and skill goes into making it just right. Consisting of beef slowly braised in red wine, plus beef stock, carrots, onions and sometimes mushrooms',
  },
  {
    imgSrc: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/ecdfbba0-eb56-41c0-8878-2eaef36e7d7f-raclette.jpg',
    title: 'Pho',
    description: 'Both the name of a cheese and a full dish, this is a traditional après-ski meal. The cheese is either melted under a grill or in a little pan and then served with potatoes, cornichons, pickled onions.',
  },
  {
    imgSrc: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/6293c8b5-5d05-43db-8103-7b006a16d1a1-biryani.jpg',
    title: 'Biryani',
    description: "A celebration of spices and rice, biryani's origins lie with the Muslims of the Indian subcontinent",
  },
  {
    imgSrc: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/d066b151-b43c-4704-bfc6-8be062316bf0-smorrebrod.jpg',
    title: 'Smørrebrød',
    description: 'A dish commonly found across all Scandinavian and Baltic countries, this open-faced sandwich has its roots in Denmark',
  },
  {
    imgSrc: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/1c525bb3-0aab-4b68-a1e2-506255e7f4ed-36-schnitzel.jpg',
    title: 'Wiener schnitzel',
    description: 'A thin, pan-fried veal cutlet that has been pounded, salted and rolled in a crust of flour, eggs and breadcrumbs, the wiener schnitzel is a Viennese speciality.',
  },
];

main.appendChild(createNav());
main.appendChild(homePage());
main.appendChild(menu(menuList));
