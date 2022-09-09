# 서브쿼리 
* 서브쿼리는 SQL 문 안에 부품처럼 들어있는 “SELECT 문”
    * outer query(외부 쿼리) : 서브쿼리를 포함하는 전체 SQL 문
    * inner query(내부 쿼리) : 서브쿼리


## 서브쿼리 예시 
#### SELECT 절에 있는 서브쿼리 
```sql
SELECT 
    id, 
    name, 
    price,
    (SELECT MAX(price) FROM item) AS max_price
FROM item; 
```
#### WHERE 절에 있는 서브쿼리 
```sql
SELECT 
    id, 
    name, 
    price,
FROM item
WHERE price = (SELECT MIN(price) FROM item);
```

## 실습 
### 예시 1 
```sql 
-- 상품 중에서 리뷰가 최소 3개 이상 달린 상품들의 정보가 보고싶은 경우 
SELECT * FROM item 
WHERE id IN
(
SELECT item_id 
FROM review 
GROUP BY item_id HAVING COUNT(*) >= 3
);
```