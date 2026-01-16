const head = document.getElementById('flowerHead');

function moveFlower(x, y) {
    // 1. Çiçeğin kafasının merkezini bul
    const rekt = head.getBoundingClientRect();
    const centerX = rekt.left + rekt.width / 2;
    const centerY = rekt.top + rekt.height / 2;

    // 2. Farenin çiçeğe göre konumunu hesapla
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    // 3. Açıyı hesapla
    const angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = angleRad * (180 / Math.PI);

    // --- DÜZELTME BURADA ---
    // Önceki kodda "+ 90" vardı, bu çiçeğin TEPESİNİ fareye döndürüyordu.
    // Fare aşağıdayken tepe aşağı dönünce kafa ters oluyordu.
    // Şimdi "- 90" yapıyoruz. Bu çiçeğin ALTINI (Çenesini) fareye hizalar.
    // Sonuç: Fare aşağıdayken çiçek DÜZ durur.
    angleDeg -= 90;

    // 4. Dönüşü uygula
    head.style.transform = `rotate(${angleDeg}deg)`;
}

// Bilgisayar (Fare)
document.addEventListener('mousemove', (e) => {
    moveFlower(e.clientX, e.clientY);
});

// Mobil (Dokunmatik)
document.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    moveFlower(touch.clientX, touch.clientY);
}, { passive: false });
