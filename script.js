document.addEventListener('DOMContentLoaded', () => {
    // 1. MOBILUSIS MENIU
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Uždaryti meniu paspaudus nuorodą
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. NUOTRAUKŲ PADIDINIMAS (LIGHTBOX)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    const cardImages = document.querySelectorAll('.card img');

    cardImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
        });
    });

    // Uždaryti paspaudus X arba šalia nuotraukos
    if (closeBtn && lightbox) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }
});
