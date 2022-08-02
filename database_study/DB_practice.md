## 쇼핑몰 DB 구축해보기 
```sql
CREATE DATABASE shop; 
USE shop;

/* 고객 정보 : 아이디(c_id)[기본키], 패스워드, 이름, 주소, 핸드폰 번호, 등급, 이메일, 생년월일 */
CREATE TABLE customer (
	c_id varchar(10) not null primary key,  
    pw varchar(20) not null,
    name varchar(5) not null, 
    address text not null, 
    phonenumber varchar(20) not null,
    grade varchar(10) not null defaut 'sesac', 
    email varchar(50),
    birthday date,
);

/* 상품 정보 : 아이디(p_id)[기본키], 이름, 가격, 사이즈, 색갈, 수량 */ 
CREATE TABLE product (
    p_id varchar(10) not null primary key, 
    p_name varchar(50) not null,  
    price int not null,
    size ENUM('S', 'M', 'L', 'XL') not null default 'free',
    color varchar(10) not null, 
    quanitity int not null, 
);

/* 주문 정보 : [외래키 : 고객아이디(c_id), 상품아이디(p_id)], 주문번호[기본키], 주문날짜, 총주문금액, 총 수량 */
CREATE TABLE order (
	c_id varchar(10) not null,  
    p_id varchar(10) not null, 
    o_number varchar(20) not null primary key, 
    o_date datetime not null, 
    total_price int not null, 
    total_quantity varchar(20) not null, 
    Foreign key('c_id') REFERENCES customer(c_id),
    Foreign key('p_id') REFERENCES product(p_id)
);
``` 