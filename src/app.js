/**
 * 
 * by Raul Castro
 */
"use strict"


import Home from "./views/pages/Home.js"
import Footer from './views/components/Footer.js'
import Nav from './views/components/Nav.js'

const header = null || document.getElementById('header');

const content = null || document.getElementById('container');

const footer = null || document.getElementById('footer');



header.innerHTML=Nav.render();


content.innerHTML=Home.render();


 footer.innerHTML=Footer.render();

