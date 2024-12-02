import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="makan__title">${restaurant.name}</h2>
  <img class="makan__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="makan__info">
    <h3>Detail Restaurant</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Deskripsi</h4>
    <p>${restaurant.description}</p>
    <h4>Menu makan</h4>
    <p>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</p>
    <h4>Menu minum</h4>
    <p>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</p>
  </div>
  <div class="makan__overview">
    <h3>Review</h3>
    ${restaurant.customerReviews && restaurant.customerReviews.length > 0
    ? `<ul>${restaurant.customerReviews.map((review) => `<li>${review.name}: ${review.review}</li>`).join('')}</ul>`
    : '<p>Belum ada ulasan pelanggan.</p>'}
  </div>
`;


const createRestoItemTemplate = (restaurant) =>
  `<section class="isi">
      <div class="makan">
        <article class="makan-item">
          <img class="makan-item_gambar" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}"/>
          <div class="makan-item_isi">
            <h1 class="makan-item_nama"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
            <p class="makan-item_kota">${restaurant.city}</p>
            <p class="makan-item_rating">${restaurant.rating}</p>
          </div>
        </article>

      </div>
    </section>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate };