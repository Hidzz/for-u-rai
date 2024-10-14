document.addEventListener('DOMContentLoaded', (event) => {
    const photos = document.querySelectorAll('.photo');
    let crackedCount = 0;

    photos.forEach(photo => {
        photo.addEventListener('click', () => crackPhoto(photo));
    });

    function crackPhoto(element) {
        if (!element.classList.contains('cracked')) {
            element.classList.add('cracked');
            crackedCount++;
            
            if (crackedCount === photos.length) {
                setTimeout(showMessage, 1000);
            }
        }
    }

    function showMessage() {
        const message = document.createElement('div');
        message.textContent = "Terimakasii sudaa lihat semuanyaa :)).";
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(75, 56, 50, 0.9);
            color: #f5deb3;
            padding: 20px;
            border-radius: 10px;
            font-size: 1.5rem;
            text-align: center;
            z-index: 1000;
        `;
        document.body.appendChild(message);

        setTimeout(() => {
            message.style.transition = 'opacity 1s ease-in-out';
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 1000);
        }, 3000);
    }

    // Easter egg: Konami code to restore all photos
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiCodePosition = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiCodePosition]) {
            konamiCodePosition++;
            if (konamiCodePosition === konamiCode.length) {
                restorePhotos();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });

    function restorePhotos() {
        photos.forEach(photo => photo.classList.remove('cracked'));
        crackedCount = 0;
        alert('Memories restored. Use them wisely.');
    }
});