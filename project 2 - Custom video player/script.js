const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timeStamp');

//PLAY AND PAUSE VIDEO
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// UPDATE PLAY/PAUSE ICON
function updatePlayIcon(){
    if(video.paused){
       playBtn.innerHTML = '<i class="fa fa-play fa-x"></i>'
    }else{
        playBtn.innerHTML = '<i class="fa fa-pause fa-x"></i>'
    }
}

// UPDATE PROGRESS & TIMESTAMP 
function updateProgress(){
    progress.value = (video.currentTime/video.duration) *100

    //GET MINUTES
    let mins =  Math.floor(video.currentTime / 60);
    if(mins <10){
        mins = '0' + String(mins);
    }
    //GET Seconds
    let secs =  Math.floor(video.currentTime % 60);
    if(secs <10){
        secs = '0' + String(secs);
    }
    timeStamp.innerHTML = `${mins}:${secs}`
}


// SET VIDEO TIME PROGRESS
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration)/100;
}

// STOP VIDEO 
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

window.addEventListener('keypress',e =>{
    if (e.code === 'Space') {
        toggleVideoStatus();
      }
});

//Event listners 
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

playBtn.addEventListener('click',toggleVideoStatus);
stopBtn.addEventListener('click',stopVideo);
progress.addEventListener('change',setVideoProgress);