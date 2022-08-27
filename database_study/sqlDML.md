# DML(Data Mainpulation Language)
- 데이터베이스의 내부 데이터를 관리하기 위한 언어 
**CRUD**
대부분의 컴퓨터 소프트 웨어가 가지는 기본적인 처리기능
Create, read, update, delete 

## **INSERT**
```sql
INSERT INTO user (ID, name, birthday) VALUES ('id1', '홍길동', '2022-08-01');
-- id 라는 컬럼에는 id1이, name컬럼에는 홍길동이.. 이런식으로 순서대로 들어감
INSERT INTO user VALUES ('id2', '홍길동', '2022-08-01');
-- 모든 값을 다 넣는 경우에는 컬럼명 안적어줘도 된다
INSERT INTO user (ID, birthday) VALUES ('id3', '2022-08-01');
-- 모든 컬럼의 값을 넣지 않는경우 꼭 컬럼명을 명시해줘야함
```

## **SELECT**
```sql
SELECT * FROM user;
-- 테이블에 있는 모든 컬럼과 데이터가 표시됨
SELECT * FROM user WHERE name='홍길동' AND id='id1';
-- 조건을 걸때는 where 뒤에 걸어주기 
SELECT * FROM user WHERE name='홍길동' ORDER BY ID DESC;
-- id 컬럼을 기준으로 내림차순 정렬
SELECT * FROM user ORDER BY ID ASC LIMIT 2;
-- id 컬럼을 기준으로 오름차순 정렬
-- limit 위에서부터 2개의 행만 가져와서 보여주도록 한계 정해줌
SELECT name, birthday FROM user;
-- 내가 보고싶은 name, birthday 컬럼만 가져와서 보여줌
```

### 여러 조건을 걸 때 주의 할 점 
* AND와 OR 중에서는 AND가 우선순위가 높다 
* 괄호는 AND보다 우선순위가 높기 때문에 ‘먼저 실행되기를 원하는 조건’을 괄호로 씌워주는 게 좋음
```sql
/* 성별이 여자이거나(OR) 나이가 30세 미만이면서(AND) 키는 180 이상인 회원들을 조회할 때 */ 

/* 예시 1 */ 
SELECT * FROM user 
    WHERE gender = 'f' OR age < 30 AND height > 180; 
/*
AND이 우선순위가 더 높기 때문에(AND이 먼저 실행되기 때문에)
성별이 여자이거나(OR) 나이가 30세 미만이면서(AND) 키가 180 이상인 회원들을 조회
*/ 

/* 예시 2 */ 
SELECT * FROM user 
    WHERE (gender = 'f' OR age < 30 ) AND height > 30; 
-- 먼저 실행되기 원하는 or 조건에 괄호를 씌워주면 원하는 결과를 얻을 수 있음!
```

### where 절에 들어올 수 있는 연산자 
* 비교연산자(=, >, >=, <, <=)
``` sql 
/* DATE 비교도 가능  */ 
SELECT * FROM user WHERE sing_up_day > '2019-01-01'; 
-- 2019년 1월 1일 이후 가입자들을 보여줌
```

* 논리연산자(AND, OR, NOT)
* 부정연산자
    * 같지 않음을 표현하는 아래와 같은 연산자 모두 사용 가능
        * !=
        * ^=
        * <>
        * NOT 컬럼명 =  
* SQL연산자
```sql
/* BETWEEN a AND b */
SELECT * FROM player WHERE height BETWEEN 160 AND 180;
-- 160이상 180이하를 찾음
SELECT * FROM player WHERE height NOT BETWEEN 160 AND 180;
-- 160미만 180초과를 찾음 
SELECT * FROM user 
    WHERE MONTH(sign_up_day) BETWEEN 3 AND 5
        OR MONTH(sing_up_day) BETWEEN 9 AND 11;
-- 봄, 가을에 가입한 회원들을 모두 조회 


/* IN 
-> 여러 값들 중에서 해당하는 값이 있는 row만 추려야 할때 */
SELECT * FROM player WHERE position IN ('striker', 'goalkeeper');
SELECT * FROM player WHERE position = 'striker' OR position= 'goalkeeper';
-- 두 줄이 동일한 의미로 포지션이 스트라이커 거나 골키퍼인경우만 찾음


/* LIKE -> 대체할 수 없는 중요한 연산자! 뒤에 문자열을 적어서 그 문자열과 형태가 일치하는 것 찾음*/
SELECT * FROM user WHERE name LIKE '_싹';
-- _는 하나의 단일문자를 대체 ex. 새싹, 풀싹, 이싹 등 검색가능 
SELECT * FROM user WHERE name LIKE '%싹';
-- %는 0개이상의 어떤 문자를 대체 ex. 보리싹, 새싹, 싹 등 검색가능
SELECT * FROM user WHERE name LIKE '%\%%';
/* 문자로서의 %를 찾고 싶은 경우 이스케이프 문자 \를 앞에써줘야 한다!  
이렇게 해주면 50% 이런 값들을 찾을 수 있음 
+ 추가로 ', " 등도 이스케이프 문자로 표기해줘야 함 */
SELECT * FROM user WHERE sentence LIKE BINARY '%g%'
-- LIKE BINARY를 쓰면 대소문자 구분해서 찾아줌(그냥 LIKE는 G, g 모두 찾아줌) 
```


### 데이터 정렬
```sql
SELECT * FROM user
    ORDER BY height ASC;
-- 키 기준으로 ASC 오름차순으로 정렬(안써주면 기본적으로 오름차순으로 정렬)

SELECT * FROM user
    ORDER BY height DESC
    LIMIT 10; 
-- DESC 내림차순으로 정렬
-- LIMIT 제한, 한도로 10개까지만 보여주기 

SELECT * FROM user 
    ORDER BY YEAR(sign_up_day) DESC, email ASC; 
-- 가입연도를 기준으로 내림차순 정렬을 하고, 가입연도가 같은 로우들은 다시 이메일 주소를 기준으로 오름차순 정렬 

SELECT * FROM user
    ORDER BY CAST(data AS signed) ASC;
-- CAST(data AS signed) : data 컬럼에 존재하는 값들의 데이터 타입을 일시적으로 signed라는 데이터 타입으로 변환
-- signed는 양수와 음수를 포함한 모든 정수를 나타낼 수 있는 데이터 타입
-- 만약 소수점이 있다면 data AS decimal(소수점이 있는 수를 나타내는 타입)
/* 정렬방식 
1. INT 타입 (19, 27, 120, 230)
2. TEXT 타입 (120, 19, 230, 27)
*/

/* LIMIT */
LIMIT 8, 2, 
-- 여덟 번쨰 로우(9번째 로우)부터 시작해서 총 두개의 로우만 추리라는 뜻 
-- 로우는 0번째부터 시작한다 

/* Pagination */
-- 1페이지 : 
SELECT * FROM user ORDER BY registration DESC LIMIT 0, 10
-- 2페이지 : 
SELECT * FROM user ORDER BY registration DESC LIMIT 10, 10
-- 3페이지 : 
SELECT * FROM user ORDER BY registration DESC LIMIT 20, 10
-- 4페이지 : 
SELECT * FROM user ORDER BY registration DESC LIMIT 30, 10
```

### 고유 값만 보기 
```sql 
SELECT DISTINCT(gender) FROM user;
-- 중복값을 제외하고 f, m 두가지만 보여준다 

SELECT DISTINCT(SUBSTRING(address, 1, 2)) FROM user;
-- SUBSTRING() : 문자열의 일부를 추출하는 함수
-- 여기서는 첫번째 문자부터 시작해서 총 두개의 문자를 추출하라는 뜻
-- 주소에서 맨 처음 시작되는 경기, 서울, 경남, 전남 등 고유값들을 추출해줌 !
```

## **Update**
```sql
UPDATE user SET name='홍길동' WHERE ID != '';
-- id가 공백이 아닌 사람들의 name 을 홍길동으로 모두 바꾸기
UPDATE user SET name='홍길동2', birthday='2022-07-31' WHERE ID != 'id2';
-- id가 id2가 아닌 애의 정보를 위와 같이 바꾸기 
```
## **Delete**
```sql
DELETE FORM user WHERE id='id2';
```

## 실습해보기
```sql
-- 1. 모든 회원목록을 가져오는데, 이때 birtday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오.
SELECT * FROM user ORDER BY birthday ASC;
-- 2. 회원 목록 중 gender 컬럼의 값이 “M” 인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오.
SELECT * FROM user where gender='M' ORDER BY name DESC;
-- 3. 1990 년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오.
SELECT id, name FROM user where birthday LIKE '199%';
-- 4. 6월 생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오시오.
SELECT * FROM user where birthday LIKE '%06%';
-- 5. gender 컬럼의 값이 “M” 이고, 1970 년대에 태어난 회원의 목록을 가져오시오.
SELECT * FROM user where gender='M' and birthday LIKE '197%';
-- 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오.
SELECT * FROM user ORDER BY age DESC limit 3;
-- 7. 모든 회원 목록 중 나이가 25이상 50이하인 회원의 목록을 출력하시오.
SELECT * FROM user WHERE age between 25 and 50;
-- 8. id 컬럼의 값이 hong1234 인 레코드의 pw 컬럼의 값을 12345678 로 변경하시오.
Update user set pw='12345678' where id='hong1234';
-- 9. id 컬럼의 값이 jungkrat 인 레코드를 삭제하시오.
DELETE FROM user where id='jungkrat';
```

