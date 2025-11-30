console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs=[
  {songname:"Until I found you",filepath:"songs/1.mp3",coverpath:"img.jpg"},
  {songname:"Who Says ",filepath:"songs/2.mp3",coverpath:"ocean.jpeg"},
  {songname:"Anti-Hero",filepath:"songs/3.mp3",coverpath:"sun.webp"},
  {songname:"Sugar n Brownies",filepath:"songs/4.mp3",coverpath:"moon.jpg"},
  {songname:"Ride-It",filepath:"songs/5.mp3",coverpath:"an.jpg"},
  {songname:"Senorita",filepath:"songs/6.mp3",coverpath:"evn.jpg"},
  {songname:"Love me like you do",filepath:"songs/7.mp3",coverpath:"light.jpg "},
]
songitem.forEach((element,i)=>{
  console.log(element,i);
     element.getElementsByTagName("img")[0].src=songs[i].coverpath;
     element.getElementsByClassName("songname")[0].innerText=songs[i].songname
}
)



masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause') ;
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play'); 
    gif.style.opacity = 0;
  }
})

audioElement.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
  
  progress = parseFloat((audioElement.currentTime/audioElement.duration)* 100);
  console.log(progress);
  myProgressBar.value = progress;
  })
myProgressBar.addEventListener('input', ()=>{
   audioElement.currentTime = (myProgressBar.value/100)* audioElement.duration;
})

const makeAllPlay=()=>{
     Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
})}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
   

    makeAllPlay(); // Reset all play icons to play button

    songIndex = parseInt(e.target.id);

    // Update the play/pause icon of the clicked song
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');

    // Set the current playing element to the clicked one

    // Play the selected song
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongname.innerText = songs[songIndex - 1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
  });
});

document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>6){
      songIndex=0;
  }
  else{
      songIndex+=1;
  }
  

  audioElement.src=`songs/${songIndex}.mp3`;
  mastersongname.innerText=songs[songIndex-1].songname;
  audioElement.currentTime=0;
  audioElement.play();
  gif.style.opacity=1;
  masterPlay.classList.remove('fa-play');
  masterPlay.classList.add('fa-pause');
  
  })

  document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    
    //audioElement.src = 'songs/${index}.mp3';
    audioElement.src=`songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex-1].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    
    })

   
