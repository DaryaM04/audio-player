let arrSongs = [
    {
      "singer": "GUF",
      "song": "Спонсор твоих проблем",
      "track": "audio/Sponsor_tvoikh.mp3",
      "cover": "img/guf_sponsorProblem.jpg"
    },
    {
      "singer": "Oxxximiron",
      "song": "Где нас нет",
      "track": "audio/gdeNasNet.mp3",
      "cover": "img/oxxx_gdeNasNet.jpg"
    },
    {
      "singer": "Tractor Bowling",
      "song": "Черта",
      "track": "audio/Tractor_Bowling.mp3",
      "cover": "img/tractor_bowling.jpg"
    },
    {
      "singer": "Andrea Di Giovanni",
      "song": "Forbidden Love",
      "track": "audio/Forbidden_Love.mp3",
      "cover": "img/forbidden-love.png"
    }
]

class Audio{
    constructor(audio, playBtn, pauseBtn, controlPlay, data, nextTrack, prevTrack, song, singer, cover, bgCover){
        this.audio = audio;
        this.controlPlay = controlPlay;
        this.playBtn = playBtn;
        this.pauseBtn = pauseBtn;
        this.nextTrack = nextTrack;
        this.prevTrack = prevTrack;
        this.song = song;
        this.singer = singer;
        this.cover = cover;
        this.bgCover = bgCover;
        

        this.isPlay = false;
        this.playNum = 0;
        this.data = data;


        this.clickEvent();
    }

    playAudio(){
        audio.play();
    }

    stopAudio(){
        audio.pause();
    }

    playNext(){
        this.playNum ++;
        console.log(this.playNum)
        console.log(data) // ПОЧЕМУ this.data выводит в консоль блок div, а data - undefined
        if(this.playNum > 3){
            this.playNum = 0;
        }
        console.log(this.playNum)
        this.song.innerHTML = '';
        this.singer.innerHTML = '';
        console.log(this.playNum)
        this.song.innerHTML = `${data[this.playNum].song}`; // как правильно тут образащься  this.data или data ? 
        this.singer.innerHTML = `${data[this.playNum].singer}`;
        this.audio.src = `${data[this.playNum].track}`;
        this.bgCover.src = `${data[this.playNum].cover}`;
        this.cover.src = `${data[this.playNum].cover}`;
        this.audio.currentTime = 0;
        this.playAudio();
    }

    playPrev(){
        this.playNum --;
        if(this.playNum < 0){
            this.playNum = 3;
            console.log(arrSongs.length);
        }
        this.song.innerHTML = '';
        this.singer.innerHTML = '';
        console.log(this.playNum)
        this.song.innerHTML = `${data[this.playNum].song}`;
        this.singer.innerHTML = `${data[this.playNum].singer}`;
        this.audio.src = `${data[this.playNum].track}`;
        this.bgCover.src = `${data[this.playNum].cover}`;
        this.cover.src = `${data[this.playNum].cover}`;
        this.audio.currentTime = 0;
        this.playAudio();

    }
    

    clickEvent(){
        controlPlay.addEventListener('click', () => {
            // console.log(this.isPlay);
            if(!this.isPlay){
                this.isPlay = !this.isPlay;
                this.playBtn.classList.toggle('audio__icon_hidden');
                this.pauseBtn.classList.toggle('audio__icon_hidden');
                this.playAudio();
            } else if(this.isPlay){
                this.isPlay = !this.isPlay;
                // console.log(this.isPlay);
                this.pauseBtn.classList.toggle('audio__icon_hidden');
                this.playBtn.classList.toggle('audio__icon_hidden');
                this.stopAudio();
            }
        })
        nextTrack.addEventListener('click', () => {
            this.isPlay = true; 
            this.pauseBtn.classList.remove('audio__icon_hidden');
            this.playBtn.classList.add('audio__icon_hidden');
            this.playNext();
        })

        prevTrack.addEventListener('click', () => {
            this.isPlay = true; 
            this.pauseBtn.classList.remove('audio__icon_hidden');
            this.playBtn.classList.add('audio__icon_hidden');
            this.playPrev();
        })


    }
}

//инициализация Audio
const audio = document.querySelector("audio");
const playBtn = document.querySelector('.audio__play');
const pauseBtn = document.querySelector('.audio__pause');
const controlPlay = document.querySelector('.audio__control-play');
const nextTrack = document.querySelector('.audio__control-forward');
const prevTrack = document.querySelector('.audio__control-backward');
const song = document.querySelector('.songName');
const singer = document.querySelector('.singerName');
const bgCover = document.getElementById('bg-img');
const cover = document.querySelector('.posterAudio');
const data = arrSongs;

let playList = new Audio(audio, playBtn, pauseBtn, controlPlay, nextTrack, prevTrack, song, singer, bgCover, cover, data);