const songsContainer = document.querySelector(".songs")

const songsArr = [
    {
        id: 1,
        name: "Pani pani",
        photo: "./photos/pani.jpg",
        music: "./music/b1.mp3"
    },
    {
        id: 2,
        name: "Jugnu",
        photo: "./photos/jugnu.jpg",
        music: "./music/b2.mp3"
    },
    {
        id: 3,
        name: "Sajna ye chudi kangna",
        photo: "./photos/sajna.jpg",
        music: "./music/b3.mp3"
    },
    {
        id: 4,
        name: "Badshah Mashup",
        photo: "./photos/mashup.jpg",
        music: "./music/b4.mp3"
    },
    {
        id: 5,
        name: "Kare control mujhe",
        photo: "./photos/control.jpg",
        music: "./music/b5.mp3"
    },
    {
        id: 6,
        name: "She is on fire",
        photo: "./photos/she.jpg",
        music: "./music/b6.mp3"
    },
    
    
]

songsContainer.innerHTML = songsArr.map(song => (
    `<div  class="song">
                <div class="songImg">
                    <img src=${song.photo} alt="">
                </div>
                <h3 class="songName"> ${song.name}</h3>
                <button id=${song.id} class="play">
               play
                </button>
                </div>`

)).join(" ")

const play = document.querySelectorAll(".play")
const mainImg = document.querySelector(".mainImg")
const control = document.querySelector('.control')
const songNameMain = document.querySelector('.songNameMain')
let isPlaying = false;
let currentSong = 0;
const audio = new Audio("")
const showdetails = (song) => {
    mainImg.src = song.photo
    songNameMain.textContent = song.name;
}
const playSong = (id) => {
    audio.setAttribute("src", songsArr[id - 1].music);
    audio.play()
    showdetails(songsArr[id - 1])
    control.src = "./pause.svg"
}

control.addEventListener('click', () => {
    isPlaying ? audio.pause() : audio.play()
    isPlaying = !isPlaying
    isPlaying ? control.src = "./pause.svg" : control.src = "./play.svg"
})
const changeText = (id) => {
    let index = 0;
    play.forEach((btn) => {
        btn.textContent = "play"
        btn.style.backgroundColor = "red";
        index++;
        if (index === parseInt(id)) {
            btn.textContent = "playing...."
            btn.style.backgroundColor = "blue"
            return;
        }
    })
}

play.forEach(occurence => {
    let id = occurence.getAttribute('id');
    occurence.addEventListener('click', function () {
        isPlaying = true;
        playSong(id);
        changeText(id);
    });
});

