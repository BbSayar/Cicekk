const head = document.getElementById('flowerHead');

document.addEventListener('mousemove', (e) => {
    // 1. Çiçeğin kafasının merkezini bul
    const rekt = head.getBoundingClientRect();
    const flowerCenterX = rekt.left + rekt.width / 2;
    const flowerCenterY = rekt.top + rekt.height / 2;

    // 2. Farenin çiçeğe göre konumunu hesapla
    const deltaX = e.clientX - flowerCenterX;
    const deltaY = e.clientY - flowerCenterY;

    // 3. Açıyı hesapla
    const angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = angleRad * (180 / Math.PI);

    // --- DÜZELTME ---
    // CSS'de 0 derece sağa bakar. Bizim çiçeğimizin tepesi yukarı bakıyor.
    // Bu yüzden +90 derece ekliyoruz. Bu sayede:
    // Fare sağdaysa -> Çiçek sağa yatar.
    // Fare soldaysa -> Çiçek sola yatar.
    // Fare aşağıdaysa -> Çiçek tam size bakar (veya aşağı).
    angleDeg += 90;

    // 4. Dönüşü uygula
    head.style.transform = `rotate(${angleDeg}deg)`;
});
