import 'babel-polyfill';
import {foo} from './helpers';

document.getElementById('output').innerHTML = `Output: ${foo()}`;
