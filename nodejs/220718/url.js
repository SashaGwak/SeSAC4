// WHATWG 방식
const url = require('url'); 
const { URL } = url;
// {} 가 있으면 정확한 이름을 찾아간다 
// const naver = new url.URL(string);과 동일한 의미
// URL으로 변수 만들어 지정해줘야함
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=SeSAC&oquery=SeSAC4&tqi=hWg%2F%2Flp0J14ssEgPOBossssst3w-193511"
// 네이버에서 SeSAC 검색한 주소
const naver = new URL(string);

console.log ( url.format( naver ));
console.log ( url.parse(string) );

console.log( naver.searchParams );

// querystring 방식
