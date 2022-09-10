# 서브쿼리 
* 서브쿼리는 SQL 문 안에 부품처럼 들어있는 “SELECT 문”
    * outer query(외부 쿼리) : 서브쿼리를 포함하는 전체 SQL 문
    * inner query(내부 쿼리) : 서브쿼리
* 서브쿼리 종류 
    * scalar subquery : 하나의 값, 즉, 단일값을 리턴하는 서브쿼리
    * 하나의 column에 여러 row들이 있는 형태의 결과를 리턴하는 서브쿼리
    * 하나의 테이블 형태의 결과(여러 column, 여러 row)를 리턴하는 서브쿼리
        * 서브쿼리로 일시적으로 탄생한 테이블을 derived table이라고 함 
        * 대신, derived table에는 alias를 붙여줘야 함


## 서브쿼리 예시 
### SELECT 절에 있는 서브쿼리 
```sql
SELECT 
    id, 
    name, 
    price,
    (SELECT MAX(price) FROM item) AS max_price
FROM item; 
```
### WHERE 절에 있는 서브쿼리 
```sql
SELECT 
    id, 
    name, 
    price,
FROM item
WHERE price = (SELECT MIN(price) FROM item);
```

### FROM절에 있는 서브 쿼리 
```sql
SELECT 
    AVG(review_count), 
    MAX(review_count), 
    MIN(review_count), 
FROM 
(SELECT(address, 1,2) AS region, 
    COUNT(*) AS review_count
FROM review AS r LEFT OUTER JOIN member AS m 
ON r.mem_id = m.id 
GROUP BY SUBSTRING(adress,1, 2)
HAVING region IS NOT NULL) AS review_count_summary; 
-- 이렇게 테이블 형태로 생기는 derived table은 꼭 alias를 붙여줘야함 
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

## 상관 vs 비상관 서브쿼리 
* 비상관 서브쿼리 : outer query와 상관 관계가 없는 서브쿼리
* 상관 서브쿼리 : outer query와 상관 관계가 있는 서브쿼리
* 예시 
```sql 
-- 서브쿼리가 필요로 하는 item 테이블이 outer query에 적혀있기 때문에 이 서브쿼리는 단독으로 실행되지 못함 
-- 서브쿼리가 outer query에 적힌 테이블 이름 등과 상관 관계를 갖고 있어서 그 단독으로는 실행되지 못하는 서브쿼리를 상관 서브쿼리라고 함 
SELECT * FROM item 
    WHERE EXISTS (SELECT * FROM review WHERE review.item_id = item.id);
/* 여기서는 
item 테이블 중에서 그 id 컬럼 값이 review 테이블의 item_id 컬럼에 존재하는 row들만 추리는 것 
-> 상품들 중에서 리뷰가 달린 상품들만 조회
*/

SELECT * FROM item 
    WHERE NOT EXISTS (SELECT * FROM review WHERE review.item_id = item.id);
-- 상품들 중에서 리뷰가 없는 상품들만 조회
```