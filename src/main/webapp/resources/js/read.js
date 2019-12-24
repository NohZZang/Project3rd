/**
 * 
 */
/* 댓글 목록 숨김/나타내기 전환 */
var replyIndex = 0;

getSympathyState();

function ArticleRemove(){
	var para = document.location.href.split("/");
	var removeOK = confirm('게시글을 삭제하시겠습니까?');
	
	if(removeOK == true){
		$.ajax({
			type : "POST",
			url : "/jamong.com/artdel/"+para[5],
			success : function(data){
				if(data == 1){
					alert('게시글이 삭제되었습니다!');
					location.href = "/jamong.com/new_posts";
				}else if(data == 2){
					alert('로그인이 필요합니다!');
				}
			}
		});
	}
}

function CommentRemove(e){
	var rep_no = $(e.target).data("no");
	var removeOK = confirm('댓글을 삭제하시겠습니까?');

	if(removeOK == true){
		$.ajax({
			type : "POST",
			data : {"rep_no":rep_no},
			url : "/jamong.com/commentremove",
			success : function(data){
				if(data == 1){
					alert('댓글 삭제에 성공했습니다!');
					window.location.reload();
				}else if(data == 2)
					alert('로그인이 필요합니다!');
			}
		});
	}
}
function addComment(){
	var para = document.location.href.split("/");
	var com_cont = $(".rep_textarea").html();
	var CommentOK = confirm('댓글을 작성하시겠습니까?');

	if(CommentOK == true){
		$.ajax({
			type:"POST",
			data:{"com_cont":com_cont},
			url:"/jamong.com/comment/"+para[5],
			success:function(data){
				if(data == 1){
					alert('댓글 작성에 성공했습니다!');
					window.location.reload();
				}else if(data == 2){
					alert('로그인이 필요합니다!');
				}
			}
		});
	}
}
function addReply(e){
	var para = document.location.href.split("/");
	var rep_cont = $(".reply_textarea").html();
	var rep_ref = e.target.getAttribute("data-ref");
	var rep_step = e.target.getAttribute('data-step');
	var rep_level = e.target.getAttribute('data-level');
	var ReplyOK = confirm('답글을 작성하시겠습니까?');

	if(ReplyOK == true){
		$.ajax({
			type:"POST",
			data:{"rep_cont":rep_cont,
				"rep_ref":rep_ref,
				"rep_step":rep_step,
				"rep_level":rep_level,
			},
			url:"/jamong.com/reply/"+para[5],
			success:function(data){
				if(data == 1){
					alert('답글 작성에 성공했습니다!');
					window.location.reload();
				}else if(data == 2){
					alert('로그인이 필요합니다!');
				}
			}
		});
	}
}

function replyEditOK(e){
	var editCont = $("#comment_editarea").html();
	var rep_no = $(e.target).data("no");
	var editOK = confirm('댓글을 수정하시겠습니까?');

	if(editOK == true){
		$.ajax({
			type : "POST",
			data : {"editCont" : editCont,
				"rep_no" : rep_no
			},
			url : "/jamong.com/replyedit",
			success : function(data){
				if(data == 1){
					alert('댓글 수정에 성공했습니다!');
					window.location.reload();
				}else if(data == 2){
					alert('로그인이 필요합니다!');
				}
			}

		});
	}
}

function showHide() {
	if($('.hide_comment').css("display") == "none") {
		$('.hide_comment').show();
	}else{
		$('.hide_comment').hide();
	}
	if($('reply_wrap').css("display") != "none") {
		$('.reply_wrap').hide();
	}
}
function replyEdit(e) {
	var replymenu = $(e.target).parent();
	var replyli = $(e.target).parent().parent().parent();
	var replyCont = replymenu.next().text();
	var editHtml = "<a id='comment_editCancle' onclick='replyEditCancle(event)'>수정취소</a>" +
	"<div>" +
	"<div id='comment_editarea' contenteditable='true'>" +
	"<p>"+ replymenu.next().html() +"</p>" +
	"</div>" +
	"<button data-no='"+$(e.target).data("no")+"' id='comment_editOK' onclick='replyEditOK(event);'>수정완료</button>" +
	"</div> "

	$(replyli).attr('onmouseenter','').unbind("mouseenter");
	$(replyli).css("background-color","#FFF");

	replymenu.css("display","none");
	replymenu.next().css("display","none");
	replymenu.after(editHtml);
	replymenu.next().css("display","block");
}
function replyEditCancle(e){
	var cancleBtn = $(e.target);
	var replyli = $(e.target).parent().parent();

	$(replyli).attr('onmouseenter','replyBtnShow(event);').bind("mouseenter");

	cancleBtn.next().next().css("display","block");
	cancleBtn.next().remove();
	cancleBtn.remove();
}
function replyHide(e) {
	var replyarea = "<div class='reply_wrap'>" +
	"<div class='reply_textarea' contenteditable='true'>" +
	"<p><br/></p>" +
	"</div>" +
	"<div class='reply_btn_wrap'>" +
	"<a class='reply_btn' onclick='addReply(event);'>답글 작성</a>" +
	"</div>" +
	"</div>"
	var replyli = $(e.target).parent().parent().parent("li");

	if(replyIndex == 0){
		replyli.after(replyarea);
		$(".reply_wrap").focus();
		replyIndex=1;
	}else if(replyIndex == 1){
		$(".reply_wrap").remove();
		replyIndex=0;
	}

	$(".reply_btn").attr("data-ref",e.target.getAttribute("data-ref"));
	$(".reply_btn").attr("data-step",e.target.getAttribute('data-step'));
	$(".reply_btn").attr("data-level",e.target.getAttribute('data-level'));
}

function replyBtnHide(e){
	var target = $(e.target);
	target.children().children(".comment_menu").css("display","none");
	target.css("background-color","#FFF");
}
function replyBtnShow(e){
	var target = $(e.target);
	target.children().children(".comment_menu").css("display","block");
	target.css("background-color","#FAFAFA");
}

function getSympathyState(){
	var para = document.location.href.split("/");
	$.ajax({
		type:"POST",
		url:"/jamong.com/sympathy_state/"+para[5], 
		success: function (data) {
			if(data==1){
				$('.head-menu-heart-img').css('background-color','rgb(245,124,104)');		
			}
		},
		error:function(){
			alert("data error");
		}
	});
}

$(document).on("keydown","#comment_editarea",function(e){
	if(e.keyCode == '8'){
		if(($("#comment_editarea p:first-child").text() == "" && $("#comment_editarea p").length == 1)){
			return false;
		}// if
	}
});
$(document).on("keydown",".reply_textarea",function(e){
	if(e.keyCode == '8'){
			if(($(".reply_textarea p:first-child").text() == "" && $(".reply_textarea p").length == 1)){
				return false;
			}// if
		}
})


$(document).ready(function(){

	var para = document.location.href.split("/");
	
	$('.rep_textarea').keydown(function(e){
		if(e.keyCode == '8'){
			if(($(".rep_textarea p:first-child").text() == "" && $(".rep_textarea p").length == 1)){
				return false;
			}// if
		}
	});
	/*공감 버튼*/
	$('.head-menu-heart-img').click(function(event){
		if(event.target.getAttribute("data-disabled")=='true'){
			return false;
		}
		if($(event.target).css('background-color')=='rgb(255, 255, 255)'){
			$(event.target).css('background-color','rgb(245,124,104)');

			/*공감 테이블에 저장 및 게시글 테이블에 bo_like 증가*/
			$.ajax({
				type:"POST",
				url:"/jamong.com/sympathy_up/"+para[5], 
				success: function (data) {		
					if(data!=-1){
						$('.head-menu-heart-rate').text(data);
						$(event.target).attr("data-disabled",'true');
						setTimeout(function(){
							$(event.target).attr("data-disabled",'false');
						},2000);
					}else{
						alert('로그인 유지시간이 만료되었습니다. \n'
								+'다시 로그인 하시기 바립니다.')
								window.location.replace("/jamong.com/login");
					}
				},
				error:function(){
					alert("data error");
				}
			});

		}else{
			$(event.target).css('background-color','rgb(255, 255, 255)');			
			$.ajax({
				type:"POST",
				url:"/jamong.com/sympathy_down/"+para[5], 
				success: function (data) {
					if(data!=-1){
						$('.head-menu-heart-rate').text(data);
						$(event.target).attr("data-disabled",'true');
						setTimeout(function(){
							$(event.target).attr("data-disabled",'false');
						},2000);
					}else{
						alert('로그인 유지시간이 만료되었습니다. \n'
								+'다시 로그인 하시기 바립니다.')
								window.location.replace("/jamong.com/login");
					}
				},
				error:function(){//비동기식 아작스로 서버디비 데이터를 못가져와서 에러가 발생했을 때 호출되는 함수이다.
					alert("data error");
				}
			});
		}
	});
	//http://localhost:8182/jamong.com/@qwer1234/3
	$('.head-menu-lock-img').click(function(event){
		if(event.target.getAttribute("data-disabled")=='true'){
			return false;
		}
		var lockImg = "/jamong.com/resources/img/lock.png";
		var unlockImg = "/jamong.com/resources/img/unlock.png";
		if($(event.target).hasClass('lock')){
			
			//lock -> unlock
			$.ajax({
				type:"POST",
				url:"/jamong.com/boardLock/"+para[5]+"/1",
				success: function (data) {		
					if(data!=-1){
						$(event.target).removeClass('lock');
						$(event.target).addClass('unlock');
						$(event.target).attr("src",unlockImg);
						$(event.target).attr("data-disabled",'true');
						setTimeout(function(){
							$(event.target).attr("data-disabled",'false');
						},2000);
					}else{
						alert('로그인 유지시간이 만료되었습니다. \n'
								+'다시 로그인 하시기 바립니다.')
								window.location.replace("/jamong.com/login");
					}
				},
				error:function(){
					alert("data error");
				}
			});
			
		}else{
			//lock -> unlock
			$.ajax({
				type:"POST",
				url:"/jamong.com/boardLock/"+para[5]+"/0",
				success: function (data) {		
					if(data!=-1){
						$(event.target).removeClass('unlock');
						$(event.target).addClass('lock');
						$(event.target).attr("src",lockImg)
						$(event.target).attr("data-disabled",'true');
						setTimeout(function(){
							$(event.target).attr("data-disabled",'false');
						},2000);
					}else{
						alert('로그인 유지시간이 만료되었습니다. \n'
								+'다시 로그인 하시기 바립니다.')
								window.location.replace("/jamong.com/login");
					}
				},
				error:function(){
					alert("data error");
				}
			});
		}
	});
});
