async function registerServiceWorker(messaging) {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.register('/sw.js');
    messaging.useServiceWorker(registration);
  }
}
