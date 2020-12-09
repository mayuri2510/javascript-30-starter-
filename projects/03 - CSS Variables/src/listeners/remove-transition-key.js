'use strict';

import { playSound } from '../handlers/play-sound';
import { removeTransition } from '../handlers/change-separator.js';

/*
 * @name change separator
 * calls handler that changes the mirror-art's separator
 */
export const keys = Array.from(document.querySelectorAll('.key'));
document.keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.window.addEventListener('keydown', playSound);