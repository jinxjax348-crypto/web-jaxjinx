/* ============================================================
   REPRODUCIR 
   ============================================================ */
const videos = document.querySelectorAll('.img_rules');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play().catch(error => {
      console.log("Auto-play prevenido por la configuración del navegador");
    });
  });
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

/* ============================================================
   MENÚ HAMBURGUESA INTERACTIVO
   ============================================================ */
const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mainMenu.classList.toggle("open");
  });
}

/* ============================================================
   SONIDO 
   ============================================================ */
const hoverSound = new Audio("sounds/hover.mp3");
hoverSound.volume = 0.4;

document.querySelectorAll("a, button, #menuToggle").forEach(el => {
  el.addEventListener("mouseenter", () => {
    if (hoverSound.readyState >= 2) {
      hoverSound.pause();
      hoverSound.currentTime = 0;
      hoverSound.play().catch(() => {
        /* Bloqueo nativo del navegador silenciado */
      });
    }
  });
});

/* ============================================================
   BOTÓN WISH LIST
   ============================================================ */
const wishlistBtn = document.querySelector('.wishlist-btn');
if (wishlistBtn) {
  wishlistBtn.addEventListener('click', () => {
    window.open('https://mywishcam.com/cb/module/blockwishlistpro/view?token=605278101BA46362', '_blank');
  });
}