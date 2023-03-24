const trendingArr = [
    {
        id: 8,
        img: "trending1.jpeg",
    },
    {
        id: 9,
        img: "trending21.jpeg",
    },
    {
        id: 10,
        img: "trending3.jpeg",
    },
    {
        id: 11,
        img: "trending4.jpeg",
    },
    {
        id: 12,
        img: "trending5.jpeg",
    },
]

const trending = document.querySelector(".trending")

trending.innerHTML = trendingArr.map(trend => (
    ` 
<div id="trend">
            <img class="trendImg" src=${trend.img} alt="">
            <img id=${trend.id} class="trControl" src="play.svg" alt="">
        </div>
    `
)).join("")

const trControl = document.querySelectorAll('.trControl');

trControl.forEach(btn => {
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

