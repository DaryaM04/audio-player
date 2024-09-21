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
    constructor(audio, playBtn, pauseBtn, controlPlay, data, nextTrack, prevTrack, song, singer, bigCover, miniCover, volume, timer, track, progress, level, time, like, disLike){
        this.audio = audio;
        this.controlPlay = controlPlay;
        this.playBtn = playBtn;
        this.pauseBtn = pauseBtn;
        this.nextTrack = nextTrack;
        this.prevTrack = prevTrack;
        this.song = song;
        this.singer = singer;
        this.bigCover = bigCover;
        this.miniCover = miniCover;
        this.volume = volume;
        this.level = level;
        this.timer = timer;
        this.track = track;
        this.progress = progress;
        this.time = time;
        this.like = like;
        this.disLike = disLike;
       
        this.isPlay = false;
        this.playNum = 0;
        this.data = data;
        this.songLengh = this.audio.duration;
        this.point = point;

        this.clickEvent();
        this.baseSetting();
    }

    baseSetting(){
        level.style.width = `${volume.value}%`;
    }

    updateData(){
        setInterval(() => {this.seekUpdate()}, 1000) //обновление позиции 
    }

    playAudio(){
        audio.play();
        this.updateData();
        level.style.width = `${volume.value}%`;
        // console.log(1)
        miniCover.classList.add('posterAudioPlay');
        console.log(this.miniCover);
        // console.log(1);
        this.songLengh = this.audio.duration;
        // audioLength.innerHTML = '';
        // timer.innerHTML = '0:00';
        // audioLength.innerHTML = `${Math.floor(this.songLengh/60)}:${Math.floor(((this.songLengh/60) % 1) * Math.pow(10, 2))}`;
        // timer.innerHTML = `${Math.floor(this.audio.currentTime/60)}:${Math.floor(((this.audio.currentTime/60) % 1) * Math.pow(10, 2))}`;
        // progress.style.width += `${360 * (audio.currentTime / audio.duration)}px`;
     }

    stopAudio(){
        miniCover.classList.remove('posterAudioPlay');
        audio.pause();
    }

    playNext(){
        this.playNum ++;
        // console.log(this.playNum)
        // console.log(data) // ПОЧЕМУ this.data выводит в консоль блок div, а data - undefined
        if(this.playNum > 3){
            this.playNum = 0;
        }
        // console.log(this.playNum)
        this.song.innerHTML = '';
        this.singer.innerHTML = '';
        this.song.innerHTML = `${data[this.playNum].song}`; // как правильно тут образащься  this.data или data ? 
        this.singer.innerHTML = `${data[this.playNum].singer}`;
        this.audio.src = `${data[this.playNum].track}`;
        this.miniCover.src = `${data[this.playNum].cover}`;
        this.miniCover.classList.add('posterAudioPlay');
        this.bigCover.src = `${data[this.playNum].cover}`;
        this.audio.currentTime = 0;
        this.songLengh = this.audio.duration;
        // audioLength.innerHTML = '';
        // audioLength.innerHTML = `${Math.floor(this.songLengh/60)}:${Math.floor(((this.songLengh/60) % 1) * Math.pow(10, 2))}`;
        // console.log(audio.duration);
        this.playAudio();
        // progress.style.width = `${0}%`;
        track.value = `0`;
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
        this.miniCover.classList.add('posterAudioPlay');
        this.miniCover.src = `${data[this.playNum].cover}`;
        this.bigCover.src = `${data[this.playNum].cover}`;
        this.audio.currentTime = 0;
        this.playAudio();
        progress.style.width = `${0}%`;
        this.track.value = `0`;
    }

    seekTo(){
        audio.currentTime = audio.duration * (track.value / 100); //отмотка трека инпутом
        // progress.style.width = `${360 * (track.value / 100)}px`; //отрисовка промотанной части
        progress.style.width = `${360 * (audio.currentTime / audio.duration)}px`; //отрисовка промотанной части
    }

    seekUpdate() {
        let seekPosition = 0;
      
        // Check if the current track duration is a legible number
        if (!isNaN(audio.duration)) {
          seekPosition = audio.currentTime * (100 / audio.duration);
          track.value = seekPosition;
      
          const progressPercent = (audio.currentTime / audio.duration) * 100;
          progress.style.width = `${progressPercent}%`;
      
          // Calculate the time left and the total duration
          let startMinutes = Math.floor(audio.currentTime / 60);
          let startSeconds = Math.floor(audio.currentTime - startMinutes * 60);
          let endMinutes = Math.floor(audio.duration / 60);
          let endSeconds = Math.floor(audio.duration - endMinutes * 60);
      
          time.firstElementChild.textContent = `${startMinutes}:${startSeconds
            .toFixed()
            .padStart(2, "0")}`;
          time.lastElementChild.textContent = `${endMinutes}:${endSeconds
            .toFixed()
            .padStart(2, "0")}`;
        }
        if (audio.currentTime >= audio.duration) {
          playNext();
        }
      }

    setVolume() {
        audio.volume = volume.value / 100;
        console.log(audio.volume);
        level.style.width = `${volume.value}%`;
    }
    

    clickEvent(){

        controlPlay.addEventListener('click', () => {
            // console.log(this.isPlay);
            if(!this.isPlay){
                this.isPlay = !this.isPlay;
                this.playBtn.classList.toggle('audio__icon_hidden');
                this.pauseBtn.classList.toggle('audio__icon_hidden');
                miniCover.classList.add('posterAudioPlay');
                this.playAudio();
            } else if(this.isPlay){
                this.isPlay = !this.isPlay;
                // console.log(this.isPlay);
                this.pauseBtn.classList.toggle('audio__icon_hidden');
                this.playBtn.classList.toggle('audio__icon_hidden');
                miniCover.classList.remove('posterAudioPlay');
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

        like.addEventListener('click', () => {
            like.classList.toggle('activeLike');
        });
        disLike.addEventListener('click', () => {
            disLike.classList.toggle('activeLike');
        });

        audio.addEventListener("ended", () => this.playNext());

        track.addEventListener("input", () => this.seekTo());

        volume.addEventListener("input", () => this.setVolume());


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
const miniCover = document.querySelector('.posterAudio');
const bigCover = document.querySelector('.bg-img');
const audioLength = document.querySelector('.audio_duration');
const volume = document.querySelector(".audio__track_volume");
const level = document.querySelector(".audio__volume_level");
const timer = document.querySelector('.timer');
const track = document.querySelector(".audio__track_active");
const point = audio.duration * (track.value / 100);
const progress = document.querySelector(".audio__track_progress");
const time = document.querySelector(".audio__time");
const like = document.getElementById("like");
const disLike = document.getElementById("dislike");
const data = arrSongs;

let playList = new Audio(audio, playBtn, pauseBtn, controlPlay, nextTrack, prevTrack, song, singer, data, miniCover, bigCover, track, progress);
