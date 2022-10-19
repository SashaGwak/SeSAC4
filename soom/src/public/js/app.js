const socket = io(); // 연결 끝~ so goooood

const welcome = document.getElementById('welcome');
const form = welcome.querySelector('form');
const room  = document.getElementById('room');

room.hidden = true;

let roomName; 

function handleMessageSubmit(event) {
  event.preventDefault();
  const input = room.querySelector('#msg input');
  const value = input.value;
  socket.emit('new_message', input.value, roomName, () => {
    addMessage(`You : ${value}`);
  });
  input.value = '';
}

function handleNicknameSubmit(event) {
  event.preventDefault();
  const input = room.querySelector('#name input');
  const value = input.value;
  socket.emit('nickname', value);
  input.value = '';
}

function showRoom() {
  welcome.hidden = true; 
  room.hidden = false;
  const h3 = room.querySelector('h3');
  h3.innerText = `Room ${roomName}`; 
  const msgForm = room.querySelector('#msg');
  const nameForm = room.querySelector('#name');
  msgForm.addEventListener('submit', handleMessageSubmit);
  nameForm.addEventListener('submit', handleNicknameSubmit);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector('input');
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";

  /* 공부한 내용 */
  // function backendDone(msg) {
  //   console.log(`The Server say : ${msg}`);
  // }
  // socket.emit("enter_room", input.value, backendDone);
  // socket.emit(event 이름, 보내고 싶은 payload, 서버에서 호출하는 function)
  // 여러형태의 정보를 다수의 파라미터로 계속해서 정보 보내줄 수 있지만 마지막으로 실행되는 function을 넣으려면 꼭 마지막에 넣어줘야함 
  // 서버에서 함수를 실행하는게 아니라 서버에서 신호를 줘서 프론트에서 함수실행한다는 것 이해하세여
  input.value = '';
}

form.addEventListener('submit', handleRoomSubmit)

function addMessage(message) {
  const ul = room.querySelector('ul'); 
  const li = document.createElement('li');
  li.innerText = message;
  ul.appendChild(li);
}

socket.on('welcome', (user) => {
  addMessage(`${user} joined!`);
}); 

socket.on('bye', (left) => {
  addMessage(`${left} left ㅜㅜ !`);
}); 

socket.on('new_message', addMessage); 
// socket.on('new_message', (msg) => addMessage(msg)); 과 동일

socket.on('room_change', (rooms) => {
  const roomList = welcome.querySelector('ul');
  roomList.innerText = '';
  if (rooms.length === 0 ) {
    return;
  }
  rooms.forEach((room) => {
    const li = document.createElement('li');
    li.innerText = room;
    roomList.append(li);
  });
});