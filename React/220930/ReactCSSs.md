## Sass 
* Syntactically Awesome Style Sheets
* CSS 전처리기 
* 복잡한 작업을 쉽게 할 수 있도록 도와주고, 스타일 코드의 재활용성과 코드의 가독성을 높여 유지보수를 더욱 쉽게 해줌
* 가능한 확장자 
    * sass 문법 
    ```css
    //  tab을 이용해 스타일을 정의
    $font-stack: Helvetica, snas-serif
    $primary-color: #333

    body 
        font: 100% $font-stack
        color: $primary-color
    ```
    * scss 문법 
    ```css
    // 기존의 .css 파일과 비슷한 문법을 이용
    $font-stack: Helvetica, snas-serif;
    $primary-color: #333;

    body {
        font: 100% $font-stack;
        color: $primary-color;
    }
    ```
    * 공통점 
        * 변수를 선언할 때는 $ 를 앞에 붙여줘야 함
* 패키지 설치 필요 

## Sass 사용팁
### 패키지 깔기 
```bash 
npm install node-sass
```
### open color 및 media 가져오기 
```css 
// 1. 패키지 설치
// npm i include-media
// npm i open-color

// 2. 패키지 파일 불러오기
@import './util.scss';
@import '~include-media/dist/include-media';
// @import '../node_modules/include-media/dist/include-media'; 와 같은 의미!! 
@import '~open-color/open-color';

.UseSass {
    display: flex;
    background: $oc-gray-2;
    /* 사용은 위와 같이 $붙여서 써주면 됨 */

    @include media('<768px') {
        background: $oc-gray-9;
    }
}
```

### scss selector 
```css
.UseSass {
    display: flex;

    .box {
        width: 100px;
        height: 100px;
        // .box.red 를 지정해줄때 
        // 아래와 같이 .box는 &으로 쉽게 선택가능
        &.red {
            background: $red;
        }

        // .box:hover
        &:hover{
            cursor: pointer;
        }
```

### mixin 
```css
// util.scss 
@mixin boxSize($size) {
    width: 100px;
    height: 50px * $size;
}

@mixin animation($size, $name){
    animation-name: $name;

    // 변수로서 name 사용하기 위해서는 #필요! 
    @keyframes #{$name} {
        0% {transform: translate(0px,0px);}
        25% {transform: translate($size * 100px,0px);}
        50% {transform: translate($size * 100px, $size * 100px);}
        75% {transform: translate(0px, $size * 100px);}
        100% {transform: translate(0px,0px);}
    }
}
```
```css 
// UseSass.scss 
@import './util.scss';

.UseSass {
    display: flex;

    .box {
        width: 100px;
        height: 100px;
        &.red {
            /* 이런식으로 maxin불러와서 써줌  */
            @include boxSize(1);
            background: $red;
        }
        &.orange {
            @include boxSize(2);
            background: $orange;
        }
        &.yellow {
            @include boxSize(3);
            background: $yellow;
        }
        &.green {
            @include boxSize(4);
            background: $green;
        }
        &.blue {
            @include boxSize(5);
            background: $blue;
        }
        &.indigo {
            @include boxSize(6);
            background: $indigo;
        }
        &.purple {
            @include boxSize(7);
            background: $purple;
        }
    }
}
```



# styled components
* 컴포넌트 내에서 style 다뤄줄 수 있음
* 사용예시 
```js 
// styled-components 패키지 설치필요 
import styled from 'styled-components'; 

// `사용하여 css 작성해줌
const Mybox = styled.div`
    width: 500px;
    display: flex;
    align-itmes: center;
    margin: 200px auto;
`;

// sass와 동일하게 & 사용가능
const Button = styled.button`
    width: 200px;
    outline: none;
    padding: 30px;
    font-size: 25px;
    font-weight: 500;
    margin: 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:first-child {
        color: orange;
        background-color: black;
        border-bottom: orange 10px solid;
    }
    &:last-child {
        color: black;
        background-color: orange;
        border-bottom: black 10px solid;
    }
`;

const StyledComponent = () => {
    return (
        <Mybox>
            <Button>버튼1</Button>
            <Button>버튼2</Button>
        </Mybox>
    )
}

export default StyledComponent;
```



# ClassName 다루기! 
## CSS Module
CSS를 사용할 때 클래스 이름을 고유한 값으로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해 주는 기술
* 장점 
    * 클래스명이 충돌하는 일 방지해줌
    * 컴포넌트 단위로 스타일을 적용할 때 유용

## CSS Module 사용법 
### 파일명 지정 
* 보통 **클래스명.module.css**로 사용 
### 적용법 
```js
// js 파일
// 일단 파일 불러오기
import style from './6CSSModule.module.css';

const CSSModule = () => {
    return (
        /* 
        다수의 클래스 지정할 땐 이렇게 지정 
        <div className={`${style.box1} ${style.center}`}>
        */
        // 클래스 지정
        <div className={style.box1}>
            <h2>Css module</h2>
        </div>
    ) 
}

export default CSSModule;
```
```css
// 6CSSModule.module.css
.box1 {
    background: yellow; 
    border: 3px solid orange; 
    color : green; 
    display: flex;
    height: 150px; 
    align-items:center;
}
.center{
    justify-content: center;
}
```

### (보너스) 다른 방법 
* classnames 라이브러리 사용
``` js
// npm i classnames로 설치

import Names from 'classnames'; 
<div className= {Names(style.box1, style.center)}>
</div>
// 위와 비슷하지만 이런식으로 써주기! 
```
