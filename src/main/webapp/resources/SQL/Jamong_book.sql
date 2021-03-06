-- 책 테이블 구성
CREATE TABLE book(
book_no NUMBER(38) PRIMARY KEY,   	-- 책 번호(seq)
book_name VARCHAR2(100) NOT NULL, 	-- 책 이름
book_cover VARCHAR2(4000), 		  	-- 책 커버 이미지
book_preface VARCHAR2(4000), 	  	-- 책 소개 글
book_recommend NUMBER(38) DEFAULT 0,-- 책 좋아요
book_date DATE,                   	-- 책 발간일
book_editdate DATE,				  	-- 책 수정일
cat_name VARCHAR2(50),			  	-- 카테고리 참조 컬럼
mem_no NUMBER(38) 				  	-- 회원 참조 컬럼
);

-- 참조컬럼 참조키 설정
ALTER TABLE book
ADD CONSTRAINT book_cat_no_fk FOREIGN KEY(cat_name)
REFERENCES category(cat_name)

ALTER TABLE book
ADD CONSTRAINT book_mem_no_fk FOREIGN KEY(mem_no)
REFERENCES member(mem_no)

CREATE SEQUENCE book_no_seq
START WITH 0
INCREMENT BY 1
MINVALUE 0
NOCACHE;

SELECT * FROM book ORDER BY book_no DESC;
SELECT book_no_seq.nextval FROM DUAL;
DROP SEQUENCE book_no_seq
DROP TABLE book;

