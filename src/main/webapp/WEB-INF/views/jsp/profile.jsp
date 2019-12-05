<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="../include/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel=stylesheet type="text/css" href="./resources/css/profile.css">
<script src="./resources/js/profile.js"></script>
<script src="./resources/js/jquery.js"></script>
<title></title>
</head>
<body oncontextmenu="return false" ondragstart="return false" onselectstart="return false" >
	<div id="profile_main">
		<div id="profile_padding">
			<div id="profile_content">
				<div id="profile_">
					<div>
						<div id="p_menu" class="p_menu_button hide">
						<%--신고  --%>
							<c:if test ="${empty id}">
							<button id="warring_icon" class="accuse_page_open"
								onclick="accuseShow();"	>
								<!-- after 적용 -->
							</button>
							</c:if>
							<%--편집 --%>
							<c:if test ="${!empty id}">
							<button id="pt_edit_icon" onclick="location='profile_edit';">
								<!-- after 적용 -->
							</button>
							</c:if>
						</div>
						<div id="profile_cont">
							<div class="pf_subscriber">
								<img id="profile_img" alt="이미지"
									src="./resources/img/profile.jpg"
								>
								<!--  <input class="?" date-image="???">-->
							</div>
							<strong id="profile_name">영화 읽어주는 남자</strong>
							<br>
							<span class="profile_font_size">카노라이츠 편집장</span>
						</div>
							<dl class="subscriber">
								<dt class="hide_font">정보</dt>
								<dd>
									<a><b class="profile_line profile_font_size">구독자</b> <span
										class="profile_line_num"
									>8,380</span></a>
								<dd>
						<div id="profile_button">
							<%--해당되는 아이디로 로그인 했을때 --%>
							<c:if test="${!empty id}">
							<a href="./write" class="profile_button_type subscribe_check">글쓰기</a>
							</c:if>
							<c:if test="${mem_author}">
							<a href="./offer_author" class="profile_button_type">제안하기</a> 
							</c:if>
							<c:if test="${empty id}">
							<span>
							<button	class="profile_button_type2">구독하기</button>
							</span>
							</c:if>
						</div>
							</dl>
							<c:if test="${mem_author}">
						<div id="profile_keyword_line">
							<ul class="profile_keyword_link">
								<li><a href="new_posts" class="profile_button_keyword profile_line">예술</a></li>
								<li><a href="new_posts" class="profile_button_keyword profile_line">문화</a></li>
								<li><a href="new_posts" class="profile_button_keyword profile_line">영화</a></li>
								<li><a href="new_posts" class="profile_button_keyword profile_line">편집장</a></li>
								<li><a href="new_posts" class="profile_button_keyword profile_line">칼럼니스트</a></li>
								<li><a href="new_posts" class="profile_button_keyword profile_line">에디터</a></li>
								<li><a href="new_posts" class="profile_button_keyword profile_line">키노라이츠</a></li>
							</ul>
						</div>
						</c:if>
						<!-- after적용 -->
					</div>
				</div>
			</div>
			<div id="profile_menu">
				<%--ARIA roles 적용  --%>
				<div id="Tablist">
						<a href="#info">
					<button id="info_tab" class="tab active">
						 <span class="profile_font_size">작가소개</span><b></b>
					</button>
						 </a>
						<a href="#articles"> 
					<button id="article_tab" class="tab">
						<span class="profile_font_size">글</span><b></b>
					</button>
						</a>
						<a href="#j_Magazine"> 
					<button id="Magazine_tab" class="tab">
						<span class="profile_font_size">작품</span><b></b>
					</button>
						</a>
				</div>
			</div>
		</div>
		<main> <!-- main : 문서의 중요한 항목을 담는것  하나의 페이지에 하나의 요소만 사용가능--> <!-- 사용되지않는 main의 요소는 화면에서 감춤처리 -->
		<div id="profile_main_list">
			<div id="profile_info" style="display: block;">
				<h3 class="hide_font">작가소개</h3>
				<div class="author_intro">
					<strong class="profile_font_size">소개</strong>
					<p class="profile_font_size">영화 비(非 혹은 悲)평가, 그리고 시네마 유토피아를 지향하는
						영화 마피아. 즐겁게 보고, 열심히 해독하며, 치열하게 쓰는 영화 기록자.</p>
				</div>
				<p class="profile_font_size">
					<strong>기타 이력 및 포트폴리오</strong>
					<br>
					- '키노라이츠 매거진' 편집장(2018~)
					<br>
					- 팟캐스트 '시네마 바' 진행(2018~)
					<br>
					- 영화 채널 '시네마피아' 운영(2016~)
					<br>
					- 알려줌 비평 연재(2018) '영화 읽고 알려줌'
					<br>
					- 문화뉴스 칼럼 연재(2015~2017) '영읽남의 오르되브르'
				</p>
			</div>
		
			<div id="article" style="display: none;">
				<div class="author_intro">
					<h3 class="hide_font">글목록</h3>
					<ul class="profile_writer_list">
					<c:forEach var="i" begin="1" end="5" step="1">
						<li class="profile_articles">
							<div class=>
								<img class="profile_post_img" alt="이미지 정보"
									src="./resources/img/a.jpg"
								>
							</div>
							<div>
								<a class="profile_article_main" href="./book_info">미리보는 영화</a>
									<a	href="./read">
										<h3>[말레피센트 2] 어둠의 요정이 디즈니에서 살아남는 법</h3>
										<p class="article_cont">말레피센트 2 2014년 개봉한 말레피센트는 동화에서 악역을
											맡았던 어둠의 요정의 시선에서 재구성한 이야기다. 저주를 풀고 진정한 사랑과 평화를 추구했던 ...</p>
									</a>
							</div> <span></span>
						</li>
				</c:forEach>
					</ul>
				</div>
			</div>
			<div id="Magazine" style="display: none;">
				<h3 class="hide_font">매거진</h3>
				<!-- 공감과 추천한 숫자를 지정 -->
				<div id="" class="Magazine_list jm_list ">
				<c:forEach var="i" begin="1" end="5" step="1">
					<div class="box_contents">
							<a href="./book_info">
						<div class="cover_book">
								<img class="cover_img"src="./resources/img/a.jpg" class="magazin_img"> 
								<div class="info_cover">
									<strong class="tit_cover">미리보는 영화</strong>
								 <span>by 영화보는 남자</span>
								</div> 
								<span class="book_line"></span>
							</a>
						</div>
						<strong>Magazine</strong> <a class="profile_jm" href="./book_info">미리
							보는 영화</a>
						<dl class="j_list_info">
							<dt>
								<span class="article_icon"></span>
							</dt>
							<dd class="box_contents_num">
								<b>142</b>
							</dd>
							<dt>
								<span class="relate"></span>
							</dt>
							<dd class="box_contents_num">61</dd>
						</dl>
					</div>
					</c:forEach>
				</div>
			</div>
		</div>
		</main>
	</div>
</body>
</html>
<%@include file="../include/footer.jsp" %>