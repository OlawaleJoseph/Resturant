import './app.scss';
import 'bootstrap';
import { createNav } from './components/nav'

const main = document.querySelector('#content');

main.appendChild(createNav());
