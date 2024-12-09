// pop window for gallery
function openPopup(url) {
    const popupOverlay = document.getElementById('popup-overlay');
    const iframe = document.getElementById('popup-iframe');
    iframe.src = url;
    popupOverlay.classList.remove('hidden');
}

function closePopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    const iframe = document.getElementById('popup-iframe');

    iframe.src = '';

    popupOverlay.classList.add('hidden');
}
