# Primary Key
* 테이블에서 특정 row 하나를 식별하는 역할
* 특정 컬럼을 Primary Key로 설정하면 Primary Key에 같은 값이 있는 row가 추가되는 것을 DBMS가 자동으로 막아주기 때문에 중복된 row가 생길 위험성이 사라짐
* 종류 
  * Natural Key
    * 실제로 어떤 개체가 갖고 있는 속성을 나타내는 컬럼이 Primary Key가 됐을 때 
    * 사람이라는 테이블이라면 주민번호라처럼 어떤 속성을 가지고 일반키가 되는 경우 
  * Surrogate Key
    * 기본키를 auto increment로 지정해주는 경우 
    * 어떤 속성을 직접적으로 나타내는 컬럼이 아니고 인위적으로 생성한 컬럼
  * 비교 
    * 상황에 따라 적절한 키가 달라지므로 둘 다 쓸 수 있음 
    * 하지만 Natural Key는 그 값이 나중에 변경되면 모든 row의 값을 다시 수정해줘야 한다는 문제 등이 있기 때문에 보통은 Surrogate key 선택하는 경우가 많음

# Foreign Key
* 한 테이블의 컬럼 중에서 다른 테이블의 특정 컬럼을 식별할 수 있게 해주는 컬럼
* Foreign Key가 존재할 때 Foreign Key가 있는 테이블을 '자식 테이블(child table)'이나 '참조하는 테이블(referencing table)'이라고 함 
* Foreign Key에 의해 참조당하는 테이블을 '부모 테이블(parent table)', '참조당하는 테이블(referenced table)'이라고 함
* 만약 DBMS 상에서 한 테이블의 컬럼을, '이것이 다른 테이블의 컬럼을 참조하는 Foreign Key다'라고 설정해놓으면 ‘참조 무결성(Referential Integrity)' 지킬 수 있음

```sql
ALTER TABLE `coruse`.`review` 
-- `fk_review_table` 외래키 이름 지정이자 제약사항 이름
ADD CONSTRAINT `fk_review_table`
  FOREIGN KEY (`course_id`)
  -- `course_id`를 외래키로 설정
  REFERENCES `course`.`course` (`id`)
  -- course 데이터베이스의 course 테이블의 id 컬럼을 참조  
  ON DELETE RESTRICT
  ON UPDATE RESTRICT;
```

## on delete 
### 1. RESTRICT
* 자신을 참조하는 외래키가 하나라도 있는 부모 테이블의 로우는 아예 삭제할 수 없음

### 2.CASCADE
* 부모 테이블 로우 삭제시 -> 부모테이블을 참조하고 있던 자식테이블의 로우도 같이 삭제! 

### 3.SET NULL 
* 부모테이블의 로우 삭제시 -> 자식테이블의 foreign key 컬럼 값을 null으로 바꿔줌 

## on update 
### 1. RESTRICT
* 자신을 참조하는 외래키가 하나라도 있는 부모 테이블의 로우는 아예 갱신할 수 없음

### 2.CASCADE
* 부모 테이블 로우 변경시 -> 부모테이블을 참조하고 있던 자식테이블의 로우도 같이 변경 

### 3.SET NULL 
* 부모테이블의 로우 변경시 -> 자식테이블의 foreign key 컬럼 값을 null으로 바꿔줌 