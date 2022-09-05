## CSS 스타일 초기화 
* 이슈 : 브라우저마다 태그의 기본 스타일이 다름
* 문제 : 사용자가 브라우저마다 조금씩 다른 화면을 보게되는 문제가 발생 
* 해결방법 : CSS 스타일 초기화 
* 초기화 방식 : Reset.css, Normarlize.css

## CSS 단위
### px
* 화면의 하나의 점 
* 반응형에 부적합(반응 분기점 별로 사이즈를 다르게 작업해야하므로 수정사항이 많음)

### % 
* 상위 요소의 상대적인 크기 

### em 
* 상위 요소 크기에 비례 
* em 단위는 중첩되기 때문에 굳이 필요한 상황이 아니라면 자주 사용하지 않음 
* 즉, 같은 3em 이더라도 상황에 따라 크기가 달라짐
```css
상위요소 {
    font-size: 20px;
}

하위요소 {
    font-size: 2em; /* 20px* 2 = 40px */
}
```

### rem 
* root em 
* 최상위 요소(html) 크기게 비례함 
```css
상위요소 {
    font-size: 16px;
}

하위요소 {
    font-size: 2rem; /* 16px* 2 = 35px */
}
```

### viewport 단위 
* Viewport란? 웹 브라우저에서 웹 페이지가 표시되는 영역 
* vw(viewport width) 
    * 1vw는 viewport width의 1%
* vh(viewport height) 
    * 1vw는 viewport height의 1%

## Media query 
### 사용방법 
```css
@media <media type> and (media feature) {
    /* ... */
}
/* 
<media type> : 미디어 유형
    - all : 모든 미디어 장치 
    - screen : 화면을 출력하는 디스플레이가 있는 기기 
    - print : 인쇄화면
meia feature : 미디어 조건(특성) 
    - width : viewport 너비 
    - height : viewport 높이 
    - orientation : 가로/세로 비율 
        - 가로방향 : landscape 
        - 세로방향 : portrait
*/
```

### 사용예시
```css
/* 미디어 타입이 screen이면 적용한다  */
@media screen { ... }

/* 미디어 타입이 screen이고, width가 768px 이상이면 적용됨 
두개 중 하나라도 만족하지 않으면 적용X */
@media screen and (min-width: 768px){ ... }

/* width가 768px이상이고 1024 이하일때 적용됨  */
@media (min-width: 768px) and (max-width: 1024px){ ... }

/* 화면 너비가 1024이하이고, 디바이스가 가로방향일 때 적용됨 */
@media (min-width: 1024px) and (orientation: landscape){ ... }
```
