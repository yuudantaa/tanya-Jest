import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import('lodash.filter')
  .then((module) => module.default)
  .then(filterResto)
  .catch((error) => alert(error));


const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const filterResto = (filter, restoTypeValue) => { // Assuming restoTypeValue is defined
  filter(resto, restoTypeValue === 'all' ? {} : { type: restoTypeValue })
    .forEach(renderResto);
};

const renderResto = (restaurant) => { // Assuming restaurant is defined
  restoContainer.innerHTML += `
    <li>
      <h4><span class="math-inline">\{restaurant\.name\} \(</span>{restaurant.city})</h4>
      <p>${restaurant.rating}</p>
    </li>
  `;
};

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

