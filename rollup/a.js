import { format } from '../lib/silly-datetime.es2015.js';

export default function (date) {
    return format(date || new Date());
}