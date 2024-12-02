import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

const restodbApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new StaleWhileRevalidate({
    cacheName: 'restodb-api',
  }),
);

const restodbImageApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
  new StaleWhileRevalidate({
    cacheName: 'restodb-image-api',
  }),
);

registerRoute(restodbApi);
registerRoute(restodbImageApi);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed');
  const notificationData = {
    title: 'Push Notification',
    options: {
      body: 'This is a push notification',
      icon: '/favicon.png',
      image: '/icon-512x512/icon-512x512.jpg',
    },
  };
  const showNotification = self.registration.showNotification(
    notificationData.title,
    notificationData.options,
  );
  event.waitUntil(showNotification);
});