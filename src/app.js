/**
 * 
 * by Raul Castro
 */
"use strict"


import Home from "./views/pages/Home.js";
import Footer from './views/components/Footer.js';
import Nav from './views/components/Nav.js';

import Dash from './views/pages/Dash.js';
import Login from './views/pages/Login.js';
import SignUp from './views/pages/SignUp.js';

import Error404 from './views/pages/Error404.js';

import Utils from './service/Utils.js';

const header = null || document.getElementById('header');

const content = null || document.getElementById('container');

const footer = null || document.getElementById('footer');



header.innerHTML=Nav.render();


content.innerHTML=Home.render();


 footer.innerHTML=Footer.render();



 /**
  * rotas
  */

  let routes = {
      '/':Home,
      '/signup':SignUp,
      '/login':Login,
      'dashboard':Dash
  }

// Código do roteador. Pegar a URL e verificar na nossa lista de routes e renderizar 

const router = () => {
    let request = Utils.parseRequestURL();
    let parseURL = (request.resource ? '/' + request.resource : '/') + (request.verb ? '/' + request.verb:'')

    let page = routes[parseURL] ? routes[parseURL] : Error404

    content.innerHTML = page.render()
}