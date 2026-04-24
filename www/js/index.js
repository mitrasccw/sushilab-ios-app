var APP_URL = 'https://app2.sushilab.ai/signup';

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    var statusEl = document.getElementById('app-status');
    if (statusEl) {
        statusEl.textContent = 'Opening SushiLab...';
    }

    setTimeout(function () {
        if (window.location.href.indexOf('index.html') !== -1 && statusEl) {
            statusEl.textContent = 'Could not open SushiLab. Check internet and try again.';
        }
    }, 5000);

    window.location.replace(APP_URL);
}
