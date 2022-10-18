const messageList = document.querySelector('ul');
const nickForm = document.querySelector('#nick');
const messageForm = document.querySelector('#message');
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMessage(type, payload) {
  // Object 만들기 
  const msg = { type , payload }; 
  // string으로 바꾸기! (js object를 보내지말고 string으로 보내줄거라서! )
  // 웹 소켓이 브라우저에 있는 api 이기 때문에 백엔드에서는 다양한 프로그래밍언어를 사용할 수 있기 때문에 api에서 판단을 하면 안됨 백엔드에서 알아서 쓰도록 스트링으로 고고 
  return JSON.stringify(msg);
}

socket.addEventListener('open', () => {
  console.log('Connected to Server ✅');
});

socket.addEventListener('message', (message) => {
  const li = document.createElement('li');
  li.innerText = message.data;
  messageList.append(li);
  // console.log('New message : ', message.data);
});

socket.addEventListener('close', () => {
  console.log('Disconnected to Server ❌');
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector('input');
  socket.send(makeMessage('new_message', input.value));
  input.value = '';
};

function handleNickSubmit(event) {
  event.preventDefault();
  const input = nickForm.querySelector('input');
  socket.send(makeMessage('nickname', input.value));
  input.value = '';
};

messageForm.addEventListener('submit', handleSubmit);
nickForm.addEventListener('submit', handleNickSubmit);