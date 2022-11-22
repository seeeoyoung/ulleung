$(document).ready(function(){
	
	
	//상단메뉴
	$("header li> a").on("mouseenter click",function(){
		$("header nav, header> div").stop().slideDown();
	});
	$("header ul").mouseleave(function(){
	    $("header nav, header> div").stop().slideUp();	
	});
	$("header .last").blur(function(){
		$("header nav, header> div").stop().slideUp();
	});
	
	//비주얼 배너 페이드 슬라이드
	setInterval(fade, 2900);
	let i = 2;
	function fade(){
		if( i == 0){
			$("#visual a").fadeIn(1000);
			i = 2;
		} else {
			$("#visual a").eq(i).fadeOut(1000);
			i--;
		}
		
	}//fade 끝
	
	//공지사항 첫번째 항목 클릭시, 팝업 보인다
	$("a.pop").click(function(){
		$("#popup").fadeIn();
	});
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		
	});
	
	
});