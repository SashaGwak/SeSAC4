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
-- 리뷰수가 3개 이상인 상품들의 id가 조회됨 
);
```

### 예시2 (ANY, SOME)
```sql 
SELECT * FROM theater
WHERE view_count > ANY(SELECT view_count FROM theater WHERE category = 'ACTION')
-- 서브쿼리의 결과에 있는 각 row의 값들 중 하나라도 조건을 만족하는 경우가 있으면 TRUE를 리턴 -> SOME 도 동일 
/* 여기서는 
* ANY는 서브쿼리가 리턴한 결과에 있는 값(120000, 2300000, 7000000, 8500000) 중 단 하나의(ANY) 값보다도 크다면 TRUE를 리턴
* 4개의 값 중에서도 최소값인 120000보다만 큰 값이라면 조건을 만족하는 것 
*/
    AND category != 'ACTION'
```


### 예시3 (ALL)
```sql 
SELECT * FROM theater
WHERE view_count > ALL(SELECT view_count FROM theater WHERE category = 'ACTION')
-- ALL은 모든 경우에 대해서 해당 조건이 성립해야 TRUE를 리턴
-- 여기서는 view_count가 8500000보다 많은 10000000인 ‘겨울 왕국’만 나오게됨 
    AND category != 'ACTION'
```