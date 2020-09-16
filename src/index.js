import './app.scss';
import 'bootstrap';
import { createNav } from './components/nav';
import homePage from './components/home';

const main = document.querySelector('#content');

main.appendChild(createNav());
main.appendChild(homePage);
