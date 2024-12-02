import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
 
let favoriteRestaurant = [];
 
const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }
 
    return favoriteRestaurant.find((restaurant) => restaurant.id == id);
  },
 
  getAllRestaurant() {
    return favoriteRestaurant;
  },
 
  putResto(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
 
    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getResto(restaurant.id)) {
      return;
    }
 
    favoriteRestaurant.push(restaurant);
  },
 
  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id != id);
  },
};
 
describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurant = [];
  });
 
  itActsAsFavoriteRestoModel(favoriteRestaurant);
});