# LifeCycle
* 수명 주기
* 모든 React Component 에 존재하는 것

## 그림으로 보는 LifeCycle
<img width="875" alt="image" src="https://user-images.githubusercontent.com/92668655/192720484-dc0c8b30-1c88-4280-8d44-99a0585bb12a.png">

### mount 
* DOM 이 생성되고 웹 브라우저상에 나타나는 것
* constructor, render, getDerivedStateFromProps, componentDidMount

### update 
* Props나 state가 바뀌었을 때 업데이트하는 것
* getDerrivedStateFromProps, shouldComponentUpdate, componentDidUpdate

### unmount
* 컴포넌트가 화면에서 사라질(제거될) 때
* comopnentWillUnmount

