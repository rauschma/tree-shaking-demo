import {
    format,
    fromNow
} from '../lib/silly-datetime.es2015.js';
import a from './a.js'

export default function () {
    let age = new Date() - 1000 * 60 * 5;
    let formatTime = a(age);
    let fromNowTime = fromNow(age);
    return `${formatTime} is ${fromNowTime}`;
}