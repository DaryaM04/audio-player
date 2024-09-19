class Audio{
    constructor(audio, playBtn, pauseBtn, controlPlay){
        this.audio = audio;
        this.controlPlay = controlPlay;
        this.playBtn = playBtn;
        this.pauseBtn = pauseBtn;

        this.isPlay = false;


        this.clickEvent();
    }

    playAudio(){
        audio.play();
        // this.playBtn.classList.toggle('audio__icon_hidden');
        // this.pauseBtn.classList.toggle('audio__icon_hidden');
    }

    stopAudio(){
        // this.pauseBtn.classList.toggle('audio__icon_hidden');
        // this.playBtn.classList.toggle('audio__icon_hidden');
        audio.pause();
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
    }
}

//инициализация Audio
const audio = document.querySelector("audio");
const playBtn = document.querySelector('.audio__play');
const pauseBtn = document.querySelector('.audio__pause');
const controlPlay = document.querySelector('.audio__control-play');

let playList = new Audio(audio, playBtn, pauseBtn, controlPlay);
