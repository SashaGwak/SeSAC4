const socket = io();

const myFace = document.getElementById('myFace');
const muteBtn = document.getElementById('mute');
const carmeraBtn = document.getElementById('camera');
const cameraSelect = document.getElementById('cameras');
const call = document.getElementById('call');

call.hidden = true;

let myStream;
let muted = false; 
let cameraOff = false;
let roomName; 
let myPeerConnection;

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

// Welcome Form (방 입장)
const welcome = document.getElementById('welcome');
const welcomeForm = welcome.querySelector('form');

async function initCall(){
  welcome.hidden = true;
  call.hidden = false;
  await getMedia();
  makeConnection();
}

async function handleWelcomeSubmit(event) {
  event.preventDefault();
  const input = welcomeForm.querySelector('input');
  await initCall();
  socket.emit('join_room', input.value );
  roomName = input.value;
  input.value = '';
}

welcomeForm.addEventListener("submit", handleWelcomeSubmit);

// Socket Code
socket.on('welcome', async() => {
  // 방생성 후 시작되는 부분
  const offer = await myPeerConnection.createOffer();
  // console.log(offer);
  myPeerConnection.setLocalDescription(offer); 
  // 먼저 들어온 브라우저가 offer를 만들고 offer를 통해 전송함 
  // offer를 주고 받기위해서 서버가 필요. 주고 받아진 순간 직접적으로 대화를 할 수 있음
  console.log('send the offer');
  socket.emit('offer', offer, roomName);
});

socket.on('offer', async(offer) => {
  console.log('recevied the offer');
  myPeerConnection.setRemoteDescription(offer);
  const answer = await myPeerConnection.createAnswer();
  // console.log(answer);
  myPeerConnection.setLocalDescription(answer);
  socket.emit('answer', answer, roomName);
  console.log('send the answer');
}); 

socket.on('answer', answer => {
  console.log('received the answer');
  myPeerConnection.setRemoteDescription(answer);
});

socket.on('ice', (ice) => {
  console.log('received candidate');
  myPeerConnection.addIceCandidate(ice);
});

// RTC Code 
function makeConnection () {
  myPeerConnection = new RTCPeerConnection();
  myPeerConnection.addEventListener('icecandidate', handleIce);
  myPeerConnection.addEventListener('addstream', handleAddStream);
  // console.log(myStream.getTracks()); // 오디오, 비디오 트랙 모두 나옴
  myStream
    .getTracks()
    .forEach(track => myPeerConnection.addTrack(track, myStream));
    // 카메라, 마이크 데이터 stream을 받아서 그것들을 연결안에 집어 넣음
}

function handleIce(data) {
  console.log('sent candidate');
  socket.emit('ice', data.candidate, roomName);
}

function handleAddStream(data) {
  const peerFace = document.getElementById('peerFace');
  peerFace.srcObject = data.stream;
  console.log("Peer's Stream", data.stream);
  // console.log('got an event from my peer');
  // console.log('my Stream', myStream);
}