# view 
* 조인 등의 작업을 해서 만든 '결과 테이블'이 가상으로 저장된 형태

## view 생성하기 
```sql 
CREATE VIEW three_table_joined AS 
SELECT i.id, i.name, AVG(star) AS avg_star, COUNT(*) AS count_star
FROM item AS I LEFT OUTER JOIN review AS r ON r.item_id = i.id 
    LEFT OUTER JOIN member AS m ON r.mem_id = m.id 
WHERE m.gender = 'f'
GROUP BY i.id, i.name
HAVING COUNT(*) >= 2
ORDER BY AVG(star) DESC, COUNT(*) DESC;
```