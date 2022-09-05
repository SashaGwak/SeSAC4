## 실습 1 
* 상품들 중에서 별점의 평균값을 기준으로 했을 때 여성회원들이 가장 좋은 평가를 해준 상품 살펴보기
```sql 
SELECT i.id, i.name, AVG(star)
FROM item AS i 
LEFT OUTER JOIN review AS r
    ON r.item_id = i.id
LEFT OUTER JOIN member AS m 
    ON r.mem_id = m.id 
WHERE gender = 'f'
GROUP BY i.id, i.name 
ORDER BY AVG(star) DESC;
```