document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById("letter");
    const text = `Halo rai? Mungkin kamu risih dapet chat dari aku terus akhir akhir ini. Tapi akhir-akhir ini aku banyak mikir, dan ngerasa perlu ngomong sesuatu ke kamu.

Pertama, I just wanna say sorry. Maaf banget udah bikin kamu sakit hati. Aku sadar banget kalo dulu aku brengsek dan nggak bisa ngertiin yang kamu mau. You deserved way better than that.

Looking back, aku bisa liat semua kesalahan aku dengan jelas. Aku take you for granted, nggak ngehargain semua cinta dan support yang kamu kasih. I was being selfish, cuma mikirin diri sendiri, dan ngabaiin perasaan kamu.

I know, kata-kata doang mungkin nggak cukup buat nyembuhin luka yang udah aku bikin. Tapi aku pengen kamu tau kalo I truly regret what I did. kamu tuh orang yang spesial, dan aku nyesel banget udah nyia-nyiain pertemanan kita yang seharusnya bisa lebih dari seorang "teman".

aku nggak berharap kamu maafin aku atau kita balikan atau gimana. I just wanted you to know kalo aku udah grow up, belajar dari kesalahan, dan bener-bener nyesel sama semua yang udah terjadi.

Wherever life takes you, aku harap kamu nemu semua kebahagiaan yang kamu pantes dapetin rai. You'll always have a special place in my heart.

Sekali lagi, I'm really sorry. Semoga rai selalu happy dan sukses ya.

"someday, someone will like u like u like me"

-al`;
    let index = 0;
    textElement.textContent = "";

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 40);
        } else {
            textElement.innerHTML += '<span class="cursor"></span>';
        }
    }

    typeWriter();

    // Audio functionality
    const audio = document.getElementById("myaudio");
    const playButton = document.getElementById("playButton");
    let isPlaying = false;

    // Attempt to autoplay
    let autoplayPromise = audio.play();

    if (autoplayPromise !== undefined) {
        autoplayPromise.then(_ => {
            // Autoplay started successfully
            isPlaying = true;
            playButton.textContent = "Pause Background Music";
        }).catch(error => {
            // Autoplay was prevented
            console.log("Autoplay was prevented. Please use the play button.");
            playButton.textContent = "Play Background Music";
        });
    }

    playButton.addEventListener('click', toggleAudio);

    function toggleAudio() {
        if (isPlaying) {
            audio.pause();
            playButton.textContent = "Play Background Music";
        } else {
            audio.play();
            playButton.textContent = "Pause Background Music";
        }
        isPlaying = !isPlaying;
    }

    // Scroll reveal effect
    window.addEventListener('scroll', revealOnScroll);

    function revealOnScroll() {
        const elements = document.querySelectorAll('.letter-content, .letter-footer');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    // Easter egg
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiCodePosition = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiCodePosition]) {
            konamiCodePosition++;
            if (konamiCodePosition === konamiCode.length) {
                activateEasterEgg();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });

    function activateEasterEgg() {
        document.body.style.fontFamily = 'Comic Sans MS, cursive';
        alert('You found the secret! But maybe Comic Sans wasn\'t the best choice...');
    }
});