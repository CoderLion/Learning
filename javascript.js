var video = document.querySelector("#videoElement");
 
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}
 
function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}
 
function videoError(e) {
    // do something
}

function drawFrame() {
  var canvas = document.querySelector('canvas'),
      context = canvas.getContext('2d');

  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  setTimeout(drawFrame, 50);
}

drawFrame();