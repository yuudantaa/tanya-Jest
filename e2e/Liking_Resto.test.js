Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.makan-item__not__found');
});

const assert = require('assert');
Scenario('liking one resto', async({ I }) => {
  I.amOnPage('/');
  I.seeElement('.makan-item_nama a');
  const firstResto = locate('.makan-item_nama a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('.makan-item');

  const likedRestoName = await I.grabTextFrom('.makan-item_nama');

  assert.strictEqual(firstRestoName, likedRestoName);
});