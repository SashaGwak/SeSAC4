# 데이터베이스 
* 데이터를 저장하는 구조/자료의 모음 
* 데이터의 집합소

# 파일 시스템(File System)
* DBMS를 사용하기 전 데이터의 저장을 위해 이용했던 시스템 
* 단점 
    * 데이터 중복
    * 데이터 불일치 

# DBMS 
* DataBase Management System 
* 파일 시스템이 가진 문제를 해결하기 위해 만들어진 것 
* 데이터베이스에 접근하고 이를 관리하기 위해 존재한다 

## 관계형 데이터베이스 RDBMS(Relational DBMS)
* MySQL, SQL Server, Oracle, MariaDB, SYBASE ... 

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
        - 속성 이름은 달라도 되지만 그 안의 값은 동일해야 한다

## MySQL 
* 가장 널리 사용되고 있는 관계형 데이터베이스 관리시스템(RDBMS)
* 오픈 소스 
* 윈도우, mac, 리눅스 등 다양한 운영체제에서 사용 가능