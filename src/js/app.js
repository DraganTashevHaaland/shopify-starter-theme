import Vue from "vue";
window.Vue = Vue;

let axios = require('axios');
window.Vue = Vue;

let jQuery = require('jquery');
window.jQuery = window.$ = jQuery;

import 'popper.js';

import 'bootstrap';

require('./components/ProductForm.js');


import ('./header');
import ('./product');