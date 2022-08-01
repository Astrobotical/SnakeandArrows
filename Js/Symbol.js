const ctx = new AudioContext();
let audio;
fetch ("./Image/tkk.mp3")
.then(data => data.arrayBuffer())
.then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
.then(decodedAudio => {
  audi = decodedAudio;
});
function playback(){
  const playsound = ctx.createBufferSource();
  playsound.buffer = audio;
  playsound.connect(ctx.destination);
  playsound.start(ctx.currentTime);
}
window.addEventListener("mousedown", playback);
function selection(webapge){
  window.open(webapge);
  var Firstsym =document.getElementById("BOC").checked;
  var Secondsym =document.getElementById("SB").checked;
  
  if(Firstsym == true)
      localStorage.setItem("UserOption","BOC");
  else if(Secondsym == true)
      localStorage.setItem("UserOption","SB");
}
