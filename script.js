const head = document.getElementById('flowerHead');
const pupils = document.querySelectorAll('.pupil');

// Göz hareketini sınırlamak için (Gözün dışına çıkmasınlar)
const PUPIL_RANGE = 5; 

function updateFlower(x, y) {
    // 1. KAFA DÖNÜŞÜ (Rotation)
    const rekt = head.getBoundingClientRect();
    const centerX = rekt.left + rekt.width / 2;
    const centerY = rekt.top + rekt.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const angleRad = Math.atan2(deltaY, deltaX);
    let angleDeg = angleRad * (180 / Math.PI);

    // DÜZELTME: Eğer ters bakıyorsa burayı değiştiriyoruz.
    // +90 yerine -90 veya +270 yaparak yönü tam tersine çeviriyoruz.
    // Ayçiçeğinin sapı aşağıda olduğu için referans noktamızı ayarlıyoruz.
    angleDeg += 90; 

    head.style.transform = `rotate(${angleDeg}deg)`;

    // 2. GÖZ BEBEKLERİ (Pupils)
    // Göz bebekleri kafanın dönüşünden bağımsız olarak fareye odaklansın
    // ya da kafayla birlikte hafif kaysın.
    
    // Basit oran orantı ile göz bebeğini kaydır
    // Math.cos ve Math.sin kullanarak açının yönüne doğru biraz ötele
    const xMove = Math.cos(angleRad) * PUPIL_RANGE;
    const yMove = Math.sin(angleRad) * PUPIL_RANGE;

    pupils.forEach(pupil => {
        pupil.style.transform = `translate(calc(-50% + ${xMove}px), calc(-50% + ${yMove}px))`;
    });
}

// PC
document.addEventListener('mousemove', (e) => {
    updateFlower(e.clientX, e.clientY);
});

// Mobil
document.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    updateFlower(touch.clientX, touch.clientY);
}, { passive: false });
