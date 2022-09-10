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

### 2. 숫자형 데이터 형식 
* TINYINT
* SMALLINT
* MEDIUMINT
* INT -> 숫자는 길이 거의 고만고만해서 가장 많이 씀 
* BIGINT
* FLOAT
* DECIMAL
* DOUBLE -> 소수점 

### 3. 날짜형 데이터 형식 
* DATA : 날짜(년도, 월, 일)
* TIME : 시간(시, 분, 초)
* DATETIME : 날짜와 시간 형태의 기간 표현
* TIMESTAMP : 날짜와 시간 형태의 기간 표현 - 시스템 변경시 자동으로 그 날짜와 시간이 저장 
* YEAR : 년도 표현 데이터 타입 