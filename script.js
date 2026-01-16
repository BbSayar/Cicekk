// Dönecek olan elementi seçiyoruz
const head = document.getElementById('flowerHead');

// Fare hareketini dinliyoruz
document.addEventListener('mousemove', (e) => {
    
    // Çiçeğin merkezini bul
    const rekt = head.getBoundingClientRect();
    const flowerCenterX = rekt.left + rekt.width / 2;
    const flowerCenterY = rekt.top + rekt.height / 2;

    // Fare ile çiçek arasındaki mesafeyi hesapla
    const deltaX = e.clientX - flowerCenterX;
    const deltaY = e.clientY - flowerCenterY;

    // Açıyı hesapla (Radyan)
    const angleRad = Math.atan2(deltaY, deltaX);

    // Dereceye çevir
    let angleDeg = angleRad * (180 / Math.PI);

    // Yüzün doğru yöne bakması için 90 derece ekle
    angleDeg += 90;

    // Hareketi uygula
    head.style.transform = `rotate(${angleDeg}deg)`;
});