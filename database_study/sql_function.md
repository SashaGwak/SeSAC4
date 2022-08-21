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