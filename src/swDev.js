export default function swDev() {
  window.addEventListener("load", () => {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(swUrl).then((res) => {
        console.warn("registered service worker");
      });
    }
  });
}
