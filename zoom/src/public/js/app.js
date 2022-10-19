const socket = io();

const myFace = document.getElementById('myFace');
const muteBtn = document.getElementById('mute');
const carmeraBtn = document.getElementById('camera');
const cameraSelect = document.getElementById('cameras');

let myStream;
let muted = false; 
let cameraOff = false;

async function getCameras() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices()
    const cameras = devices.filter(device => device.kind === 'videoinput');
    const currentCamera = myStream.getVideoTracks()[0];
    // videoinput이라는 kind를 가진 device만 추리기 위해 !
    // console.log(cameras);
    cameras.forEach((camera) => {
      const option = document.createElement('option'); 
      option.value = camera.deviceId; 
      option.innerText = camera.label;
      if (currentCamera.label == camera.label) {
        option.selected = true;
      }
      cameraSelect.appendChild(option);
    }); 
  } catch(e) {
    console.log(e); 
  }
}

getCameras(); 

async function getMedia(deviceId) {
  const initialConstrains = {
    audio: true, 
    video: { facingMode: 'user' }, 
  };
  const cameraConstraints = {
    audio: true, 
    video: { deviceId : { exact: deviceId } },
  }
  try {
    myStream = await navigator.mediaDevices.getUserMedia(
      deviceId ? cameraConstraints : initialConstrains
    ); 
    myFace.srcObject = myStream;
    if (!deviceId) {
      await getCameras();
    }
  } catch(e) {
    console.log(e); 
  }
}

getMedia();

function handleMuteClick () {
  myStream
  .getAudioTracks()
  .forEach((track) => (track.enabled = !track.enabled));
  if (!muted) {
    muteBtn.innerText = 'Unmute';
    muted = true; 
  } else {
    muteBtn.innerText = 'Mute';
    muted = false;
  }
}

function handleCameraClick () {
  myStream
    .getVideoTracks()
    .forEach((track) => (track.enabled = !track.enabled));
    // track.enable에 반대값 넣어줌 
  if (cameraOff) {
    carmeraBtn.innerText = 'Trun Camera Off';
    cameraOff = false;
  } else {
    carmeraBtn.innerText = 'Trun Camera On';
    cameraOff = true;
  }
}

async function handleCameraChange () {
  getMedia(cameraSelect.value);
}

muteBtn.addEventListener("click", handleMuteClick);
carmeraBtn.addEventListener("click", handleCameraClick);
cameraSelect.addEventListener("input", handleCameraChange);