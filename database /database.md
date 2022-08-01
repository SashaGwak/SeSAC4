# 데이터베이스 
* 데이터를 저장하는 구조/자료의 모음 
* 데이터의 집합소

## 파일 시스템(File System)
* DBMS를 사용하기 전 데이터의 저장을 위해 이용했던 시스템 
* 단점 
    * 데이터 중복
    * 데이터 불일치 

## DBMS 
* DataBase Management System 
* 파일 시스템이 가진 문제를 해결하기 위해 만들어진 것 
* 데이터베이스에 접근하고 이를 관리하기 위해 존재한다 

## 관계형 데이터베이스 RDBMS(Relational DBMS)
* MySQL, SQL Server, Oracle.. 

## 데이터 베이스 용어
* 열(Column, Attrribute, 속성)
* 행(Recode, Tuple, 튜플)
* 테이블(Table, Relation)
* Key
    데이터베이스에서 튜플을 찾거나 순서대로 정렬할 때 구분하고 정렬의 기준이 되는 속성 
    1. 기본키(Primary key)
        - 메인 키로 한 테이블에서 특정 튜플을 유일하게 구별할 수 있는 속성 
        - Null 값과 중복값 불가
    2. 외래키(Foreign key)
        - 어떤 테이블의 기본키를 참조하는 속성

## MySQL 
* 가장 널리 사용되고 있는 관계형 데이터베이스 관리시스템
* 오픈 소스 
* 윈도우, mac, 리눅스 등 다양한 운영체제에서 사용 가능

## SQL문
* Structured Query Language
* 구조적 질의 언어 
* 데이터베이스를 제어하고 관리할 수 있는 언어 

### 1. DDL(Data Definition Language)
* 데이터베이스를 정의하는 언어 
    - **CREATE**
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
    - **ALTER**
    ```sql 
        -- 삭제 예시
        ALTER TABLE user drop column birthday;
        -- 생성 예시
        ALTER TABLE user add column birthday date not null;
        ALTER TABLE member add column interest varchar(100);
        -- 변경 예시
        ALTER TABLE member MODIFY column id varchar(10);
        ALTER TABLE member MODIFY column gender varchar(2) not null default '여';
    ```
    - **DROP**
    - **TRUNCATE**
    ```sql 
        DROP TABLE user;
        -- truncate와 drop의 차이점은 
        -- drop은 테이블 아예 삭제, truncate는 테이블 초기화 
    ```

### 2. DML(Data Mainpulation Language)
데이터베이스의 내부 데이터를 관리하기 위한 언어 
CRUD
- **INSERT**
    ```sql
    INSERT INTO user (ID, name, birthday) VALUES ('id1', '홍길동', '2022-08-01');
    -- id 라는 컬럼에는 id1이, name컬럼에는 홍길동이.. 이런식으로 순서대로 들어감
    INSERT INTO user VALUES ('id2', '홍길동', '2022-08-01');
    -- 모든 값을 다 넣는 경우에는 컬럼명 안적어줘도 된다
    INSERT INTO user (ID, birthday) VALUES ('id3', '2022-08-01');
    -- 모든 컬럼의 값을 넣지 않는경우 꼭 컬럼명을 명시해줘야함
    ```
- **SELECT**
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
    + where 절에 들어올 수 있는 연산자 
        * 비교연산자, 논리연산자(AND, OR, NOT), 부정연산자(!=, ^=, <>, NOT 컬럼명 =)
        * SQL연산자
        ```sql
        /* BETWEEN a AND b */
        SELECT * FROM player WHERE height BETWEEN 160 AND 180;
        -- 160이상 180이하를 찾음
        /* IN */
        SELECT * FROM player WHERE position IN ('striker', 'goalkeeper');
        SELECT * FROM player WHERE position = 'striker' OR position= 'goalkeeper';
        -- 두 줄이 동일한 의미
        /* LIKE -> 대체할 수 없는 중요한 연산자! 뒤에 문자열을 적어서 그 문자열과 형태가 일치하는 것 찾음*/
        SELECT * FROM user WHERE name LIKE '_싹';
        -- _는 하나의 단일문자를 대체 ex. 새싹, 풀싹, 이싹 등 검색가능 
        SELECT * FROM user WHERE name LIKE '%싹';
        -- %는 0개이상의 어떤 문자를 대체 ex. 보리싹, 새싹, 싹 등 검색가능
        ```
- **Update**
    ```sql
    UPDATE user SET name='홍길동' WHERE ID != '';
    -- id가 공백이 아닌 사람들의 name 을 홍길동으로 모두 바꾸기
    UPDATE user SET name='홍길동2', birthday='2022-07-31' WHERE ID != 'id2';
    -- id가 id2가 아닌 애의 정보를 위와 같이 바꾸기 
    ```
- **Delete**
    ```sql
    DELETE FORM user WHERE id='id2';
    ```

### 3. 실습해보기
```SQL
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

### 4. 공통으로 자주쓰는 명령어들
* show databases; 
* use 데이터베이스명;
* show tables;
* DESC 테이블명; 
* show warnings; 

#### 1. 문자형 데이터 형식 
* CHAR(n) : 고정길이 데이터타입(최대 255byte)- 지정된 길이보다 짧은 데이터 입력될 시 나머지 공간 공백으로 체워진다 
* VARCHAR(n)
* TINYTEXT
* TEXT -> 일반적인 댓글 등
* MEDIUMTEXT -> 일반적인 블로그 포스트 글
* LONGTEXT -> 너무 커서 거의 사용하지 않음 

#### 2. 숫자형 데이터 형식 
TINYINT
SMALLINT
MEDIUMINT
INT -> 숫자는 길이 거의 고만고만해서 가장 많이 씀 
BIGINT
FLOAT
DECIMAL
DOUBLE

#### 3. 날자형 데이터 형식 
DATA : 날짜(년도, 월, 일)
TIME : 시간(시, 분, 초)
DATETIME : 날짜와 시간 형태의 기간 표현
TIMESTAMP : 날짜와 시간 형태의 기간 표현 - 시스템 변경시 자동으로 그 날짜와 시간이 저장 
YEAR : 년도 표현 데이터 타입 
