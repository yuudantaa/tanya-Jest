import RestoDbSource from '../../data/restodb-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import swal from 'sweetalert';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <div id="kuliner" class="kuliner"></div>
         <div id="likeButtonContainer"></div>
         
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoDbSource.detail(url.id);
    const restoContainer = document.querySelector('#kuliner');
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestoIdb,
      restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          address: restaurant.address,
          rating: restaurant.rating,
          pictureId: restaurant.pictureId
        },
      });
  },
};

export default Detail;