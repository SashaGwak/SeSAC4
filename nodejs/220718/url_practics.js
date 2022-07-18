const url = require('url'); 
const { URL } = url;

const naver = new URLSearchParams("sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107");

console.log(naver.keys());
console.log(naver.values());
naver.delete('sm');
console.log(naver.keys());