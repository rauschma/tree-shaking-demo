import 'babel-polyfill';
import {foo} from './helpers';

let elem = document.getElementById('output');
elem.innerHTML = `Output: ${foo()}`;
