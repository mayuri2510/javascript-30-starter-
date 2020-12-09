'use strict';

//import { data } from '../data.js';
//import { reverseLogic } from '../logic/reverse.js';

export function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}



