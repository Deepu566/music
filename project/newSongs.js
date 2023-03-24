const newArr = [
    {
        id: 13,
        img: "new1.jpeg",
    },
    {
        id: 14,
        img: "new2.jpeg",
    },
    {
        id: 15,
        img: "new3.jpeg",
    },
    {
        id: 16,
        img: "new4.jpeg",
    },
    {
        id: 17,
        img: "new5.jpeg",
    },
]

const newSongCont = document.querySelector(".new")


newSongCont.innerHTML = newArr.map(newSong => (
    ` 
    <div id="newSong">
    <img class="newImage" src=${newSong.img} alt="">
    <img id=${newSong.id} class="newControl" src="play.svg" alt="">
</div>
    `
)).join("")

const newControl = document.querySelectorAll('.newControl');

newControl.forEach(btn => {
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