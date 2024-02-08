document.addEventListener('DOMContentLoaded',init,false);function init(){if('serviceWorker'in navigator&&navigator.onLine){navigator.serviceWorker.register('https://rawcdn.githack.com/mumunin/fale/c02bf0c0618a8eb3990c57675faa254d686cbd5c/work.js').then((reg)=>{console.log('Registrasi service worker Berhasil',reg);},(err)=>{console.error('Registrasi service worker Gagal',err);});}}
let installPrompt=null;const installButton=document.querySelector("#install");window.addEventListener("beforeinstallprompt",(event)=>{event.preventDefault();installPrompt=event;installButton.removeAttribute("hidden");});function disableInAppInstallPrompt(){installPrompt=null;}
function disableInAppInstallPrompt(){installPrompt=null;}
window.addEventListener("appinstalled",()=>{disableInAppInstallPrompt();});
