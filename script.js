const head = document.getElementById('flowerHead');

// Hareketi hesaplayan ana fonksiyon
function moveFlower(x, y) {
    const rekt = head.getBoundingClientRect();
    const flowerCenterX = rekt.left + rekt.width / 2;
    const flowerCenterY = rekt.top + rekt.height / 2;

    const deltaX = x - flowerCenterX;
    const deltaY = y - flowerCenterY;

    const angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = angleRad * (180 / Math.PI);

    // Yüzün başlangıç yönüne göre düzeltme
    angleDeg += 90;

    // Dönüşü uygula
    head.style.transform = `rotate(${angleDeg}deg)`;
}

// --- PC için Fare Takibi ---
document.addEventListener('mousemove', (e) => {
    moveFlower(e.clientX, e.clientY);
});

// --- Mobil için Dokunma Takibi ---
// 'touchmove' parmağın ekran üzerindeki hareketidir.
document.addEventListener('touchmove', (e) => {
    // Sayfanın kaymasını (scroll) engelle ki rahatça oynayabilsin
    e.preventDefault(); 
    
    // İlk parmağın (touches[0]) konumunu al
    const touch = e.touches[0];
    moveFlower(touch.clientX, touch.clientY);
}, { passive: false }); // passive: false, preventDefault'un çalışması için gerekli
