document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('mouseenter', ()=>{
    const flashSound = new Audio('https://cdn.pixabay.com/audio/2022/03/21/audio_28b2a1d3.mp3');
    flashSound.volume=0.2;
    flashSound.play();
  });
});
// === Кастомный курсор ===
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// === Звуки и мерцание при наведении кнопок ===
document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('mouseenter', ()=>{
        const flashSound = new Audio('https://cdn.pixabay.com/audio/2022/03/21/audio_28b2a1d3.mp3');
        flashSound.volume = 0.2;
        flashSound.play();

        // Вспышка вокруг кнопки (короткая анимация)
        btn.style.boxShadow = '0 0 50px 10px #00ffcc';
        setTimeout(()=>{ btn.style.boxShadow='0 0 25px #00ffcc'; },150);
    });
});
