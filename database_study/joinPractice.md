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

## 실습 2 
* 남녀 공용 상품의 등록 연도별 평균 별점. 단, 리뷰 개수가 10개 이상인 그룹들만 추려야하고 결과를 별점 평균값을 기주으로 내림차순 정렬.
* 컬럼은 총 세 개를 조회
    * 상품 등록 연도 컬럼('등록 연도')
    * 각 그룹 내 row의 개수('리뷰 개수')
    * 각 그룹별 별점 평균값('별점 평균값')
```sql
SELECT YEAR(i.registration_date) AS '등록 연도', 
    COUNT(*) AS '리뷰 개수', 
    AVG(r.star) AS '별점 평균값'
FROM review AS r
INNER JOIN item AS i 
    ON r.item_id = i.id 
INNER JOIN member AS m 
    ON m.id = r.mem_id
WHERE i.gender = 'u'
GROUP BY YEAR(i.registration_date)
HAVING COUNT(*)>=10
ORDER BY AVG(r.star) DESC; 
```