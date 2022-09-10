# SQL문
* Structured Query Language
* 구조적 질의 언어 
* 데이터베이스를 제어하고 관리할 수 있는 언어 

## 자주쓰는 명령어들
* show databases; 
* use 데이터베이스명;
* show tables;
* show full tables in 데이터베이스명; 
    * 데이터베이스 내의 view도 포함하여 테이블 확인 가능 
    * 테이블들은 BASE TABLE이라고 표시되어 있고, 뷰는 VIEW로 표시되어 있음 
* DESC 테이블명; 

## DDL(Data Definition Language)
* 데이터베이스를 정의하는 언어 
### **CREATE**
* 데이터 베이스, 테이블 등을 생성하는 역할
* create database 이름 
* 이미 생성한 database 이름을 바꾸는 것은 불가능! 
```sql
-- 실행하면 커서나 선택해두고 커맨드+엔터 누르면 실행 
CREATE DATABASE sesac;
-- 새싹 데이터 베이스 생성 
USE sesac;
-- 새싹 데이터베이스에서 이후 작업 실행해줌 
CREATE TABLE user (
    ID varchar(10) not null primary key, 
    name varchar(5) not null default '',
    birthday date not null
    -- varchar : 문자형 데이터 형식 
    -- birthday date 는 날짜 형태로 지정해준 것 
);
CREATE TABLE member (
    id varchar(20) not null primary key, 
    name varchar(5) not null,
    age INT(2),
    gender varchar(2) not null, 
    email varchar(50),
    promition varchar(2) default 'x'
);
```
### **ALTER**
테이블을 수정하는 역할
```sql 
-- 삭제 예시
ALTER TABLE user drop column birthday;
-- 생성 예시
ALTER TABLE user add column birthday date not null;
ALTER TABLE member add column interest varchar(100);
-- 변경 예시
ALTER TABLE member MODIFY column id varchar(10);
ALTER TABLE member MODIFY column gender varchar(2) no null default '여';
```
### **DROP**
데이터 베이스, 테이블을 삭제하는 역할
```sql 
drop table 테이블명; 
```
### **TRUNCATE**
```sql 
truncate TABLE user;
-- truncate와 drop의 차이점은 
-- drop은 테이블 아예 삭제, truncate는 테이블 초기화 
```

## SQL 데이터 형식
### 1. 문자형 데이터 형식 
* CHAR(n) : 고정길이 데이터타입(최대 255byte)
    * 지정된 길이보다 짧은 데이터 입력될 시 나머지 공간 공백으로 체워진다 
* VARCHAR(n) : 가변길이 데이터 타입(최대 65535byte)
    * 지정된 길이보다 짧은 데이터 입력될 시 나머지 공간은 채우지 않는다
* TINYTEXT : 문자열 데이터 타입(최대 255byte)
* TEXT : 문자열 데이터 타입(최대 65535byte)
    * 일반적인 댓글 등
* MEDIUMTEXT : 문자열 데이터 타입(최대 16777215byte)
    * 일반적인 블로그 포스트 글
* LONGTEXT : 문자열 데이터 타입 (최대 4294967295byte)
    * 너무 커서 거의 사용하지 않음 

## 2. 숫자형 데이터 형식 
### 2-1. 정수형
* TINYINT 
    * 작은 범위의 정수들을 저장할 때 쓰는 데이터 타입
    * 최소 -128 ~ 최대 127 까지의 정수를 저장할 수 있는 타입
    * TINYINT라고만 썼을 때는 SIGNED가 붙은 것으로 자동 해석
    * TINYINT SIGNED : -128 ~ 127 
    * TINYINT UNSIGNED : 0 ~ 255
        * SIGNED는 ‘양수, 0, 음수’를 나타내고, UNSIGNED는 ‘0과 양수’를 나타냄 
* SMALLINT
    * TINYINT 보다 좀더 큰 범위의 정수를 나타낼 때 쓰는 데이터 타입
    * SMALLINT SIGNED : -32768 ~ 32767 
    * SMALLINT UNSIGNED : 0 ~ 65535
* MEDIUMINT
    * MEDIUMINT SIGNED : -8388608 ~ 8388607
    * MEDIUMINT UNSIGNED : 0 ~ 16777215
* INT -> 숫자는 길이 거의 고만고만해서 가장 많이 씀 
    * INT SIGNED : -2147483648 ~ 2147483647
    * INT UNSIGNED : 0 ~ 4294967295
* BIGINT
    * 아주 큰 범위의 정수를 저장하는 데이터 타입
    * BIGINT SIGNED : -9223372036854775808 ~ 9223372036854775807
    * BIGINT UNSIGNED : 0 ~ 18446744073709551615

### 2-2. 실수형
* DECIMAL(=DEC, NUMERIC, FIXED)
    * 일반적으로 자주 쓰이는 실수형 타입 중 하나로 보통 DECIMAL(M, D)의 형식
        * M은 최대로 쓸 수 있는 전체 숫자의 자리수이고, D는 최대로 쓸 수 있는 소수점 뒤에 있는 자리의 수
        * (예시) DECIMAL (5, 2)라면 -999.99 부터 999.99 까지의 실수
    * M은 최대 65, D는 30까지의 값을 가질 수 있음 
* FLOAT
* DOUBLE 

### 3. 날짜형 데이터 형식 
* DATA : 날짜(년도, 월, 일)
* TIME : 시간(시, 분, 초)
* DATETIME : 날짜와 시간 형태의 기간 표현
* TIMESTAMP : 날짜와 시간 형태의 기간 표현 
    * 시스템 변경시 자동으로 그 날짜와 시간이 저장 
    * TIMESTAMP 타입은 타임 존(time_zone) 정보도 함께 저장
* YEAR : 년도 표현 데이터 타입 