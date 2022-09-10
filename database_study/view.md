# view 
* 조인 등의 작업을 해서 만든 '결과 테이블'이 가상으로 저장된 형태
* 테이블과 달리 데이터가 물리적으로 컴퓨터에 저장되어 있지 않음(가상 테이블) 
* 뷰를 사용할 때, DBMS가 그 뷰를 생성하는 SQL 문을 재실행하는 방식으로 가상의 테이블을 만들어주는 것 
* 장점 
    * 높은 편의성 
    * 다양한 구조의 데이터 분석 기반을 구축 가능 
    * 데이터 보안성 높일 수 있음(공개 가능한 정보만 있는 뷰를 만들수 있음)

## view 생성하기 
```sql 
-- CREATE VIEW 뷰명 AS 뷰로 저장할 테이블
CREATE VIEW three_table_joined AS 
SELECT i.id, i.name, AVG(star) AS avg_star, COUNT(*) AS count_star
FROM item AS I LEFT OUTER JOIN review AS r ON r.item_id = i.id 
    LEFT OUTER JOIN member AS m ON r.mem_id = m.id 
WHERE m.gender = 'f'
GROUP BY i.id, i.name
HAVING COUNT(*) >= 2
ORDER BY AVG(star) DESC, COUNT(*) DESC;
```

## view 사용하기 
```sql 
SELECT * FROM copang.three_talbes_joined
WHERE avg_star = (
    SELECT MAX(avg_star) FROM copang.three_table_joined
    -- 별점 평균값 중에 가장 최대인 값
) AND count_star = (
    SELECT MAX(count_star) FROM copang.three_table_joined
    -- 별점 개수도 가장 많은 값 
);
```