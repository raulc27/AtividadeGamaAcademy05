/**
 * 
 * by Raul Castro
 */
"use strict"


import Home from "./views/pages/Home.js"

const header = null || document.getElementById('header');

const content = null || document.getElementById('container');

const footer = null || document.getElementById('footer');



header.innerHTML=`<div><h1>Topo</h1></div>`


content.innerHTML=Home.render();


 footer.innerHTML=`<div><p>Rodapé</p></div>`;

