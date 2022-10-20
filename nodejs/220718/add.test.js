const add = require('./add');

test ('더하기 테스트', () => {
	expect(add(2, 5)).not.toBe(7);
}); 