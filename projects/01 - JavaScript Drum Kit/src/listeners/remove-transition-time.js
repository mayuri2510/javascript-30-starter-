'use strict';

import { removeTransition } from '../handlers/remove-transition.js';

/*
 * @name change separator
 * calls handler that changes the mirror-art's separator
 */
export const keys = Array.from(document.querySelectorAll('.key'));
document.keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.window.addEventListener('keydown', playSound);