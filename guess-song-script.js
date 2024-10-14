document.addEventListener('DOMContentLoaded', () => {
    const songs = document.querySelectorAll('.song');
    const message = document.getElementById('message');
    let currentlyPlaying = null;

    songs.forEach(song => {
        const playButton = song.querySelector('.play-button');
        const audio = song.querySelector('audio');

        playButton.addEventListener('click', () => {
            if (currentlyPlaying && currentlyPlaying !== audio) {
                currentlyPlaying.pause();
                currentlyPlaying.currentTime = 0;
            }

            if (audio.paused) {
                audio.play();
                playButton.textContent = 'Pause';
                currentlyPlaying = audio;
            } else {
                audio.pause();
                audio.currentTime = 0;
                playButton.textContent = 'Play';
                currentlyPlaying = null;
            }
        });

        song.addEventListener('click', () => {
            if (song.dataset.correct === 'true') {
                showMessage('Betull, Hahahaha aku seneng kamu tau!', 'correct');
            } else {
                showMessage('Hayoo? inget inget lagii dehh raii, salah ni lagunya!', 'incorrect');
            }
        });
    });

    function showMessage(text, type) {
        message.textContent = text;
        message.style.display = 'block';
        message.style.backgroundColor = type === 'correct' ? 'rgba(0, 128, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)';

        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    }

    // Easter egg: Konami code to reveal the correct song
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiCodePosition = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiCodePosition]) {
            konamiCodePosition++;
            if (konamiCodePosition === konamiCode.length) {
                revealCorrectSong();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });

    function revealCorrectSong() {
        const correctSong = document.querySelector('.song[data-correct="true"]');
        correctSong.style.boxShadow = '0 0 20px 10px gold';
        showMessage('Kode Konami terdeteksi! Lagu favorit telah diungkapkan.', 'correct');
    }
});