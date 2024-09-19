class Audio{
    constructor(audio, play, pause, ){
        this.audio = audio;
        this.playBtn = play;
        this.pauseBtn = pause;
        this.isPlay = false;


        this.clickEvent();
    }

    playAudio(){
        audio.play();
    }

    stopAudio(){
        audio.pause();
    }

    clickEvent(){
            playBtn.addEventListener('click', () => {
                // console.log(this.isPlay);
                if(!this.isPlay){
                    this.isPlay = !this.isPlay;
                    this.playAudio();
                } else if(this.isPlay){
                    this.isPlay = !this.isPlay;
                    // console.log(this.isPlay);
                    this.stopAudio();
                }
            })
    }
}

//инициализация Audio
const audio = document.querySelector("audio");
const playBtn = document.querySelector('.audio__play');
const pauseBtn = document.querySelector('.audio__pause');

let playList = new Audio(audio, playBtn, pauseBtn);
