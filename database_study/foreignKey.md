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