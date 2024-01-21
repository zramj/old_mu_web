
$(function() {
	/*變更密碼開關*/
    $(".changepw-btn").click (function(){
		$(".profile-password-form").toggleClass("hide");
	});
	$(".fa").mouseenter (function(){
		$(this).tooltip ('show');
	});
	/*選單開關*/
	$(".navToggle").click (function(){
		$(".navToggle").toggleClass("open");
		$('#navMenu').toggleClass('openNav');
	});
	/*彈跳視窗切換*/
	$('.forgetpassword-page').on('show.bs.modal', function (e) {
	  $('.login-page').modal('hide');
	});

	$('.login-page').on('show.bs.modal', function (e) {
	  $('.forgetpassword-page').modal('hide');
	});

  $(window).load(function(){
    $('.flexslider').flexslider({
      animation: "slide",
      smoothHeight: true,
      start: function(slider){
        $('body').removeClass('loading');
      }
    });
  });  
  
	/*時間選擇器*/
	$('#datetimepicker4').datetimepicker({
      pickTime: false
    });
  $('#datetimepicker-get-date, #datetimepicker-back-date').datetimepicker({
      pickTime: false
    });  
  $('#datetimepicker-get-time, #datetimepicker-back-time').datetimepicker({
      pickDate: false
    });  

});



