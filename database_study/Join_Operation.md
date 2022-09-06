# Join
- 여러 테이블을 합쳐서 하나로 보이게 만드는 것

## Outer Join
### 다른 종류의 테이블 조인
```sql
select 
	item.id, 
	item.name, 
	stock.item_id, 
	stock.inventory_count
-- 조인을 해서 생성된 새로운 테이블에서 보여줄 속성들 나열
FROM item LEFT OUTER JOIN stock 
-- 왼쪽에 있는 item 테이블을 기준으로 해서 stock 테이블을 합치도록 함 
ON item.id = stock.item_id
-- 두테이블을 합칠때 item 테이블의 id 속성과 stock테이블의 item_id 값을 비교해서 서로 값이 같은 값끼리 가로방향으로 연결하라는 뜻 
```
![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ae4372d1-3eaa-4be8-958d-42e3ff3c1a51/Untitled.png)

```sql
FROM item Right OUTER JOIN stock 
-- right로 한다면 stock이 기준이 되어 stock에는 있고 item에는 없는 값-> item null 되서 나옴 ! 
```
![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fa40e916-210a-4c61-bd89-6c2f4c157af7/Untitled.png)

### 조인할 때 테이블에 alias 붙이기
```sql
select 
	i.id, 
	i.name, 
	s.item_id, 
	s.inventory_count
FROM item as i LEFT OUTER JOIN stock as s 
ON i.id = s.item_id
-- as 만들어줬으므로 테이블 이름 다 alias으로 바꿔주기! 
-- 꼭 바꿔줘야함. 만약 다른 절에서 alias가 아닌 원래의 테이블 이름을 사용하면 에러 발생 
```

### USING 사용하기 
* 만약 조인 조건으로 쓰인 두 컬럼의 이름이 같으면 ON 대신 USING을 쓰는 경우도 있음
```sql
SELECT 
    old.id AS old_id, 
    old.name AS old_name, 
    new.id AS new_id, 
    new.name AS new_name 
FROM item AS old INNER JOIN item_new AS new 
USING(id)
-- ON old.id = new.id 와 같은 의미 
```

## Inner Join
- 각 테이블에서 조인 기준으로 사용된 컬럼들의 일치하는 값이 둘다 존재하는 로우들만 합치는 조인
```sql
select 
	i.id, 
	i.name, 
	s.item_id, 
	s.inventory_count
FROM item as i INNER JOIN stock as s 
ON i.id = s.item_id
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/46ad405e-3e06-4a19-bcca-9ab87ca232e0/Untitled.png)
만약 이 두가지 테이블을 inner join하면, 
![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc02b57f-dc3e-4d87-9611-40cf25dd6ca4/Untitled.png)
[item.id](http://item.id) = stock.item_id 만 추려서 테이블을 합치게 된다 ! 

- outer join과의 차이점
    - 기준이 되는 테이블이 따로 없음!


## 다른 종류의 조인들
### NATURAL JOIN
* 두 테이블에서 같은 이름의 컬럼을 찾아서 자동으로 그것들을 조인 조건을 설정하고, INNER JOIN을 해주는 조인(ON 절을 쓸 필요가 없음)
```sql 
SELECT p.id p.player_name, p.team_name, t.team_name
FROM player AS p NATURAL JOIN team AS t; 
```

### CROSS JOIN
* 한 테이블의 하나의 row에 다른 테이블의 모든 row들을 매칭하고, 그 다음 row에서도 또, 다른 테이블의 모든 row들을 매칭하는 것을 반복함으로써 두 테이블의 row들의 모든 조합을 보여주는 조인
```sql 
SELECT * FROM member CROSS JOIN stock;
```

### SELF JOIN
* 테이블이 자기 자신과 조인을 하는 경우. 그냥 서로 별개인 두 테이블을 조인하는 것처럼 생각하면 됨
* SELF JOIN을 하면 하나의 테이블에 담긴 데이터를 다양한 관점에서 바라볼 수 있게 됨 

### FULL OUTER JOIN
* 두 테이블의 LEFT OUTER JOIN 결과와 RIGHT OUTER JOIN 결과를 합치는 조인
```sql 
SELECT * 
FROM player AS p LEFT OUTER JOIN team AS t 
ON p.team_name = t.team_name 
UNION
SELECT * 
FROM player AS p RIGHT OUTER JOIN team AS t 
ON p.team_name = t.team_name 
```
* Oracle에서는 FULL OUTER JOIN을 바로 할 수 있도록 해주는 연산자가 내장
```sql 
SELECT * 
FROM player AS p FULL OUTER JOIN team AS t
ON p.team_name = t.team_name;
```

### Non-Equi 조인
* Equi 조인 : 지금까지 해온 조인 조건에 등호(=)을 사용해서 조인 한것 
* Non-Equi 조인 예시 
```sql 
SELECT * 
FROM mamber AS m LEFT OUTER JOIN item AS i 
ON m.sing_up_day < i.registration_date
ORDER BY m.sign_up_day ASC; 
```



# 결합연산과 집합연산 
* 결합 연산 -> 테이블을 가로 방향으로 합치는 것(조인 등)
* 집합 연산 -> 테이블을 세로 방향으로 합치는 것
    * 같은 종류의 테이블들 끼리만 가능

## 집합 연산 
* MySQL에서는 버전 8.0 기준으로 UNION 연산자만 지원
* 오라클에서는 3가지 연산자 모두를 지원
### A U B (UNION 연산자 사용)
```sql 
SELECT * FROM member_A
UNION
SELECT * FROM member_B
```
* 만약 중복을 제거하고 깔끔하게 보는 것이 중요한 경우에는 UNION
* 중복을 제거하게 되면 정보 누락이 발생할 수 있는 경우에는 UNION ALL 사용 !!  

### A ∩ B (INTERSECT 연산자 사용)
```sql 
SELECT * FROM member_A
INTERSECT 
SELECT * FROM member_B
```

### A - B (MINUS 연산자 또는 EXCEPT 연산자 사용)
```sql 
SELECT * FROM member_A 
MINUS
SELECT * FROM member_B
```

### B - A (MINUS 연산자 또는 EXCEPT 연산자 사용)
```sql
SELECT * FROM member_B
MINUS
SELECT * FROM member_A 
```

