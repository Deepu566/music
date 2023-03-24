const songsContainer = document.querySelector(".songs")

const songsArr = [
    {
        id: 1,
        name: "Temporary",
        photo: "./photos/temporary.jpg",
        music: "./music/k1.mpeg"
    },
    {
        id: 2,
        name: "Libas",
        photo: "./photos/libas.jpg",
        music: "./music/k2.mpeg"
    },
    {
        id: 3,
        name: "Mitti de tippi",
        photo: "./photos/mitti.jpg",
        music: "./music/k3.mpeg"
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

