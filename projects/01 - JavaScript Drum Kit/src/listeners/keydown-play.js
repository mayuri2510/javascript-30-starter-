'use strict';

import { playSound } from '../handlers/play-sound.js';

/**
 * @name user input
 * calls the reverseHandler when a user types in the input field
 */
window.addEventListener('keydown', playSound);
