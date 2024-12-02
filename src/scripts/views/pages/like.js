import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div class="content">
        <h2 class="content__heading">Your Liked Restaurant</h2>
        <div id="kuliner" class="kuliner">
    
        </div>
        </div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#kuliner');

    resto.forEach((restaurant) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;