import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="hero">
            <div class="hero_inner"></div>
        </div><br>

        <h1 class="judul">Selamat Datang di Web Ini Restaurant</h1>
        <p class="desc-home">Ora jajan wajan melayang</P><br>
        
        <div class="content">
        
        <div id="kuliner" class="kuliner">
        </div>
      </div>
      `;
  },

  async afterRender() {
    const kuliner = await RestoDbSource.home();
    const kulinerContainer = document.querySelector('#kuliner');
    kuliner.forEach((restaurant) => {
      kulinerContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};


export default Home;