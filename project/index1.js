
const slideshow = document.querySelector(".slideshow-container")

const sliderImage = [
    {
        id: 1,
        name: "Pathan",
        img: "Pathaan.jpeg",
        music: "s1.mp3"
    },
    {
        id: 2,
        name: "tu",
        img: "tu.jpeg",
        music: "s2.mp3"
    },
    {
        id: 3,
        name: "kgf",
        music: "s3.mp3",
        img: "kgf.jpeg",
    },
    {
        id: 4,
        name: "dangal",
        music: "s4.mp3",
        img: "dangaal.jpeg",
    },
    {
        id: 5,
        name: "excuses",
        music: "s5.mp3",
        img: "excuses.jpeg",
    },
    {
        id: 6,
        name: "kygo",
        music: "s6.mp3",
        img: "kygo.jpeg",
    },
    {
        id: 7,
        name: "seey",
        music: "s7.mp3",
        img: "seey.jpeg"
    },
    {
        id: 8,
        name: "maan meri jaan",
        img: "trending1.jpeg",
        music: "s7.mp3"
    },
    {
        id: 9,
        name: "shri ram",
        img: "trending21.jpeg",
        music: "s2.mp3"
    },
    {
        id: 10,
        name: "kesariya",
        img: "trending3.jpeg",
        music: "s3.mp3"
    },
    {
        id: 11,
        name: "Tum mile",
        img: "trending4.jpeg",
        music: "s4.mp3"
    },
    {
        id: 12,
        name: "Ranja",
        img: "trending5.jpeg",
        music: "s5.mp3"
    },
    {
        id: 13,
        name: "Rabba Janda",
        img: "new1.jpeg",
        music: "s5.mp3"
    },
    {
        id: 14,
        name: "new2",
        img: "new2.jpeg",
        music: "s5.mp3"
    },
    {
        id: 15,
        name: "new3",
        img: "new3.jpeg",
        music: "s5.mp3"
    },
    {
        id: 16,
        name: "new4",
        img: "new4.jpeg",
        music: "s5.mp3"
    },
    {
        id: 17,
        name: "new5",
        img: "new5.jpeg",
        music: "s5.mp3"
    }
]

slideshow.innerHTML = sliderImage.map((img) => (
    `
    <div class="mySlides fade">
    <div class="numbertext">${img.id} / 7</div>
    <img class="pic" src=${img.img} style="width:100%">
    <img id=${img.id} class="controlMusic playBtn" src="play.svg" alt="">
    </div>`
)).join("")
const playBtn = document.querySelectorAll(".playBtn");
const changeSlide = document.querySelectorAll(".changeSlide");
const progressbar = document.querySelector(".progress")
const handleProgress = document.querySelector(".progressBar")
const bottom = document.querySelector(".bottom")
const barImage = document.querySelector(".barImage")
const barName = document.querySelector(".barName")
const progressBottom = document.querySelector(".progressBottom")
const closeBar = document.querySelector(".closeBar")
const barControl = document.querySelector(".barControl")


let isPlaying = false;
const audio = new Audio("");

const pauseAllBtn = () => {
    playBtn.forEach(btn => {
        btn.src = "play.svg"
    })
}

let playSong = (id) => {
    audio.setAttribute("src", sliderImage[id - 1].music);
    audio.play()

}
changeSlide.forEach(change => {
    change.addEventListener('click', () => {
        audio.pause();
        isPlaying = false;
        audio.currentTime = 0;
        pauseAllBtn()
    })
})
let currentSong = 0;
playBtn.forEach(btn => {
    let id = btn.getAttribute('id')
    btn.addEventListener("click", () => {
        progressBottom.style.display = "block"
        isPlaying = !isPlaying;
        isPlaying ? btn.src = "pause.svg" : btn.src = "play.svg"
        isPlaying ? playSong(id) : audio.pause()
        barImage.src = sliderImage[id - 1].img;
        barName.textContent = sliderImage[id - 1].name
        currentSong = id;
        isPlaying ? barControl.src = "pause.svg" : barControl.src = "play.svg"
    })
})
audio.ontimeupdate = () => {
    let time = audio.currentTime
    let percentage = 100 * audio.currentTime / audio.duration
    progressbar.style.width = `${percentage}%`;
}
handleProgress.addEventListener("click", (e) => {
    audio.currentTime = ((e.offsetX / handleProgress.offsetWidth) * audio.duration)
})

closeBar.addEventListener('click', () => {
    audio.pause();
    progressBottom.style.display = "none"
    pauseAllBtn();
})

barControl.addEventListener("click", () => {
    isPlaying = !isPlaying;
    // !isPlaying && playSong(currentSong)
    // isPlaying ? barControl.src = "pause.svg" : barControl.src = "play.svg";
    // audio.pause();
    // pauseAllBtn();
    if (isPlaying) {
        barControl.src = "play.svg"
        audio.pause();
    } else {
        barControl.src = "pause.svg"
        playSong(currentSong)
    }
})


let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
showSlides(slideIndex);


