# 집계 함수 (Aggregate Fucntion)
- 어떤 컬럼의 값들을 대상으로 원하는 특징값을 구해주는 함수

## COUNT
```sql 
/* user 테이블의 총 회원수를 구하고 싶을 때 ? */
SELECT COUNT(email) FROM user; 
-- 결과값 24
SELECT COUNT(heighy) FROM user; 
-- 결과값 22

/*
다른 값이 나오는 이유는 COUNT가 해당컬럼에서 Null의 개수는 제외하고 세기 때문 
모든 로우수를 알고 싶은 경우 null 값이 없는 컬럼을 알아야하는데, 
이럴 때 바로 count(*)를 쓰는 것!! 
*/
SELECT COUNT(*) FROM user; 
-- SELECT문에 의해 리턴되는 전체 로우수를 알려줌 
```

## MAX, MIN, AVG, SUM, STD
```sql
SELECT MAX(height) FROM user; 
-- height컬럼 값 중에서 가장 큰 값을 알려줌 

SELECT MIN(weigth) FROM user; 
-- weigth 컬럼 값 중에서 가장 작은 값을 알려줌 

SELECT AVG(weigth) FROM user; 
-- weigth 컬럼 값의 평균을 알려줌 
-- AVG는 null값은 제외하고 평균값을 구해줌! 

SELECT SUM(age) FROM user; 
-- age 모든 값의 합을 구함 

SELECT STD(age) FROM user; 
-- age 모든 값의 표준편차를 구함 
```


# 산술 함수(Mathematical Function)
* 단순한 산술 연산을 해줌 
    * 종류 
        * ABS()  -> 절대값을 구하는 함수
        * SQRT()  -> 제곱근을 구하는 함수
        * CEIL()  -> 올림 함수 (정수를 리턴)
        * FLOOR() -> 내림 함수 (정수를 리턴)
        * ROUND() -> 반올림 함수 (실수를 리턴하므로 자리수를 넣을 수 있음)
        * [공식문서](https://dev.mysql.com/doc/refman/8.0/en/mathematical-functions.html)

# NULL 변환 함수
## 1. COALESCE
* Null 값을 다른 값으로 바꿔줄 수 있음
* 여러개의 파라미터를 넣을 수 있음
* 표준 SQL 함수 
```sql 
SELECT 
    COALESCE(height, '####'),
    COALESCE(weight, '---'),
    COALESCE(adress, '@@@')
FROM user;
/*
height 등 첫번째 컬럼의 값을 살펴본 다음에 Null이 아닌 값이 등장하면 원래 값을 돌려주고
만약 Null 값이 등장하면 두번째 인자 값을 들려줌 
그러니까 height 칼럼의 null값이 있는 부분은 #### 바꿔서 출력되게 해줌 
*/
```

## 2. IFNULL 
* IFNULL() 함수는 첫 번째 인자가 NULL인 경우에는, 두 번째 인자를 표시하고 NULL이 아니면 해당 값을 그대로 표현
* COALESCE과 사용방법 동일하지만 얘는 두개의 파라미터만 넣을 수 있음 
* mysql 에서만 사용할 수 있음

## 3. IF 
* 첫번째 인자로 조건식이 오고, 조건식의 결과가 true라면 두번쨰 인자를 리턴하고 false라면 세번째 인자를 리턴 
```sql
SELECT IF (height IS NOT NULL, height, 'N/A') FROM user;
-- Null 값은 N/A로 표현 
-- Null 값이 아닌 애들은 원래 값으로 표현 
```


## COUCAT 
* 인자값들을 이어서 하나의 컬럼으로 만들어줌
```sql 
SELECT 
    email, 
    COUCAT(height, 'cm', ', ', weight, 'kg') AS '키와 몸무게', 
    weight / ((height/100) * (height/100)) AS BMI 
FROM user;
/*
따라서 키와 몸무게 컬럼은
165.7cm, 67.3kg 
이런식으로 출력되게 된다! 
*/
```

## CASE 문 
* 기본 형식 
```sql 
CASE 
    WHEN 조건
    THEN '반환값' 
    WHEN 조건
    THEN '반환값' 
    ELSE 'WHEN 조건에 해당 안되는 경우 반환 값'
END 
```
    * 사용법
        * WHEN과 THEN은 한쌍
        * WHEN과 THEN은 다중 존재 가능 
        * ELSE는 모든 조건에 해당하지 않는 경우에 반환 값을 설정
        * ELSE가 존재하지 않고, 조건에 맞지 않아서 반환 값이 없으면 NULL를 반환

* 예제 쿼리 
```sql
SELECT 
    email, 
    COUCAT(height, 'cm', ', ', weight, 'kg') AS '키와 몸무게', 
    weight / ((height/100) * (height/100)) AS BMI 
(CASE 
    WHEN weight IS NULL OR height is NULL THEN '비만 여부 알 수 없음'
    WHEN weight / ((height/100) * (height/100)) >= 25 THEN '과체중 또는 비만'
    WHEN weight / ((height/100) * (height/100)) >= 18.5 
        AND weight / ((height/100) * (height/100)) < 25
        THEN '정상'
    ELSE '저체중'
    -- 만약 원래 체중 값을 보여주고 싶은 경우 ELSE weight 이런식으로 적어주기 
END) AS obesity_check 

FROM user;
-- BMI에 따른 판정 결과를 보여주는 obesity_check 컬럼 완성 ! 
```

## 문자열 관련 함수 
### 1. SUBSTRING 
```sql  
SELECT DISTINCT(SUBSTRING(address, 1, 2)) FROM user;
-- SUBSTRING() : 문자열의 일부를 추출하는 함수
-- 여기서는 첫번째 문자부터 시작해서 총 두개의 문자를 추출하라는 뜻
-- 주소에서 맨 처음 시작되는 경기, 서울, 경남, 전남 등 고유값들을 추출해줌 !
```

### 2. LENGTH()
* 문자열의 길이를 구해줌 

### 3. UPPER(), LOWER()
* UPPER()는 문자열을 모두 대문자로 바꿔서 보여주는 함수
* LOWER()는 문자열을 모두 소문자로 바꿔서 보여주는 함수

### 4. LPAD(), RPAD()
* 문자열의 왼쪽 또는 오른쪽을 특정 문자열로 채워주는 함수
* LPAD는 LEFT(왼쪽) + PADDING(채우기)의 줄임말, RPAD는 RIGHT(오른쪽) + PADDING(채우기)의 줄임말
```sql 
SELECT email, LPAD(age, 10, '0') FROM user; 
-- age 컬럼의 값을, 왼쪽에 문자 0을 붙여서 총 10자리로 만들어줌 
-- 20살이면 0000000020
-- INT여도 문자열 함수 안에 인자로 넣어주면 그 값이 자동으로 문자열로 형 변환
```

### TRIM(), LTRIM(), RTRIM()
* 문자열에 존재하는 공백을 제거하는 함수들
* 문자열 내부에 존재하는 공백을 없애는 건 아님

# DATE 데이터 타입 관련 함수
## 1. 연도, 월, 일 추출하기
```sql
/* 1992년에 태어난 회원들만 조회하기 */
SELECT * FROM user WHERE YEAR(birthday) = '1992'; 
-- year() 함수 이용하여 날짜값에서 연도만 뽑아낼 수 있음

/* 여름(6, 7, 8월)에 가입한 회원들만 조회하기 */
SELECT * FROM user WHERE MONTH(sign_up_day) IN (6, 7, 8); 
-- MONTH() 함수를 사용하여 날짜값에서 월만 뽑아낼 수 있음

/* 각 달의 후반부(15일~31일)에 가입했던 회원들만 조회하기 */
SELECT * FROM user WHERE DAYOFMONTH(sign_up_day) BETWEEN 15 AND 31; 
-- DAYOFMONTH() 함수는 날짜값에서 일만 뽑아낼 수 있음 
```

## 날짜간의 차이 구하기
```sql
/* DATEEIFF() */
SELECT email, sign_up_day, DATEDIFF(sign_up_day, '2019-01-01') FROM user;
-- user 테이블에서 각 회원이 가입한 일자가 2019년 1월 1일을 기준으로 몇 일 이후인지 확인 

SELECT email, sign_up_day, DATEDIFF(sign_up_day, birthday) / 365 FROM user;
-- 회원이 몇살일때 가입했는지 알수 있음!! 
```


## 오늘 날짜를 구하기
```sql
/* CURDATE() */
SELECT sign_up_day, CURDATE(), DATEDIFF(sing_up_day, CURDATE()) FROM user; 
-- 각 회원이 가입한 일자가 오늘 기준으로 몇일 되었는지 확인
```

## 날짜 더 하기 빼기
```sql
/* DATE_ADD() */
SELECT email, sign_up_day, DATE_ADD(sign_up_day , INTERVAL 300 DAY) FROM user;
-- 가입일 이후 300일 이후의 날짜들을 찾아줌

/* DATE_SUB() */
SELECT email, sign_up_day, DATE_SUB(sign_up_day , INTERVAL 300 DAY) FROM user;
-- 가입일 기준 250일 이전의 날짜들을 찾아줌
```

## UNIX Timestamp 값
* UNIX Timestamp는 특정 날짜의 특정 시간을, 1970년 1월 1일을 기준으로, 총 몇 초가 지났는지로 나타낸 값
```sql
/*  DATE 타입의 값을 Unix Timestamp로 바꿔주는 함수 */
SELECT email, sign_up_day, UNIX_TIMESTAMP(sign_up_day) FROM user;
-- UNIX_TIMESTAMP()
-- 15535326000 처럼 나옴 

/* Unix timestamp를 사람이 읽을 수 있는 날짜 형태로 바꿔줘는 함수 */
SELECT email, sign_up_day, FROM_UNIXTIME(UNIX_TIMESTAMP(sign_up_day)) FROM user;
-- FROM_UNIXTIME() 사용하면 시간정보도 포함한 DATETIME 형태로 나옴
```

## 공식 문서 링크
* [날짜, 시간 관련 데이터 타입](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-types.html)
* [날짜, 시간 관련 함수](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html)