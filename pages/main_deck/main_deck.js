month_names = {'Jan':1, 'Feb':2, 'Mar':3, 'Apr':4, 'May':5, 'Jun':6, 
'Jul':7, 'Aug':8, 'Sep':9, 'Oct':10, 'Nov':11, 'Dec':12};

function setBlockDay(dd=1) {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() + dd)
    document.querySelectorAll('.today_date').forEach(function (day) {
        yesterday.setDate(yesterday.getDate() - 1);
        var date_str = yesterday.toDateString();
        day.innerHTML = date_str.split(' ')[2];
        day.classList = ['today_date' + ' ' + date_str.split(' ')[1].toString()];
    });
};
setBlockDay();
$(document).ready(function () {
    $('.log_section').scroll(function () {
        let a = 0;
        while ($('.daily_date_id').eq(a).length != 0) {
            if (950 <= $('.daily_date_id').eq(a).position().top && $('.daily_date_id').eq(a).position().top <= 1200) {
                $('.load_month').each(function () {
                    this.innerHTML = month_names[$('.daily_date_id').eq(a).find('.today_date')[0].classList[1]]+'월';
                });
                break;
            };
            a++;
        };
    });
});

$('.load_past').click(function () {
    var i = 0;
    for (i=0;i<14;i++){
    var position = $('.log_section').scrollTop();
    var a = $('.present_section>.daily_date_id').clone()[0];
    document.querySelector('.past_section').prepend(a);
    $('.log_section')[0].scrollTop = position;
    if ($('.load_future')[0].innerHTML === 'more'){
      setBlockDay();
    }else{setBlockDay(15)};
    };
});


$('.load_future').click(function () {
  var isTop = false;
  if (!$('.log_section').scrollTop()){isTop=true};
  if(this.innerHTML === 'more'){
    var i = 0;
    for (i=0;i<14;i++){
    var position = $('.log_section').scrollTop();
    var a = $('.present_section>.daily_date_id').clone()[0];
    document.querySelector('.future_section').prepend(a);
    $('.log_section')[0].scrollTop = position;
    setBlockDay(15);
    };
      $('.future').css('display','block');
      $('.future_alert').css('display','block');
      this.innerHTML = 'close';
  }else{
    $(".future_section")[0].innerHTML = '';
    $('.log_section')[0].scrollTop = position;
    setBlockDay();
    
      $('.future').css('display','none');
      $('.future_alert').css('display','none');
      this.innerHTML = 'more';
  }
  if(isTop){
      $('.log_section')[0].scrollTop += $('.present_section').position().top-$('.future_section').position().top;
  }
  
});
// Top & down(bottom) button
$('.top_button').click(()=>$('.log_section').animate({scrollTop: 0},"fast"));
$('.down_button').click(()=>$('.log_section').animate({
  scrollTop: $('.log_section').prop("scrollHeight")}, 'fast'));
// 


// 뉴로그 모달창 드롭다운
 /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
 var dropdown = document.getElementsByClassName("dropdown-btn");
 var i;
 
 for (i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var dropdownContent = this.nextElementSibling;
   if (dropdownContent.style.display === "block") {
   dropdownContent.style.display = "none";
   } else {
   dropdownContent.style.display = "block";
   }
   });
 }
/*스쿠버*/
// 이중모달
// 나의노력

$(':radio').change(function() {
  console.log('New star rating: ' + this.value);
});


var latest_user;
$('.btn-info').click(function(){
  console.log(this);
  latest_user = $(this).parent().attr('class');
  console.log(latest_user);
});
$('.submit_effort').click(function(){
  let org_time = $('.user_xp').find('p')[4*parseInt(latest_user[latest_user.length-1]-1)+1].innerText.substr(0,2);
  let add_time = $('.log_effort').val();
  // $('.user_xp').find('p')[4*parseInt(latest_user[latest_user.length-1])+1].innerText.substr(0,2) = (org_time+add_time).toString();
  $('.user_xp').find('p')[4*parseInt(latest_user[latest_user.length-1]-1)+1].innerText=(parseInt(org_time)+parseInt(add_time)).toString()+$('.user_xp').find('p')[4*parseInt(latest_user[latest_user.length-1]-1)+1].innerText.substr(2,5);
})  

// // 모달 첨부하기
// $(document).ready(function(){ 
//   var fileTarget = $('.filebox .upload-hidden'); 
//   fileTarget.on('change', function(){ 
//     // 값이 변경되면 
//    if(window.FileReader){ 
//       // 
//       modern browser var filename = $(this)[0].files[0].name; 
//   } else { // 
//   old IE var filename = $(this).val().split('/').pop().split('\\').pop(); 
//   // 파일명만 추출 
// } 
//   // 추출한 파일명 삽입 
//     $(this).siblings('.upload-name').val(filename); 
//   }); 
// });

$("#file").on('change',function(){
  var fileName = $("#file").val();
  $(".upload-name").val(fileName);
});



/*------------------------------------------------------------------------------------Modal End -------------------------------------------------------------------------------------------- 모달 관련된건 이 밑으로 쓰지마세요--------------------------------------------------------------------------------------------*/




/* category dropdown menu test*/
let color_label = {'white':'#FFFFFF', 'black':'#000000', 'yellow':'#FFCC00', 'skyblue':'#5AC8FA', 'red':'#FF3B30', 'purple':'#AF52DE','pinkred':'#FF2D55', 'orange':'#FF9500', 'violet':'#5856D6', 'green':'#34C759', 'blue':'#007AFF', 'dark-gray':'#1C1C1E'};


/*category_box background color 설정*/
$('.cat1').css('background-color', color_label['yellow']);
$('.cat2').css('background-color', color_label['purple']);
$('.cat3').css('background-color', color_label['skyblue']);
$('.cat4').css('background-color', color_label['red']);
$('.cat5').css('background-color', color_label['pinkred']);
$('.cat6').css('background-color', color_label['orange']);
$('.cat7').css('background-color', color_label['violet']);
$('.cat8').css('background-color', color_label['green']);
$('.cat9').css('background-color', color_label['blue']);
$('.cat10').css('background-color', color_label['dark-gray']);



/*입력한 문자가 포함된 문자열 찾기*/
function search(){
  var value, name, item, i;

  value = document.getElementById("value").value.toUpperCase();
  item = document.getElementsByClassName("category_box");

  for(i=0;i<item.length;i++){
    name = item[i].getElementsByClassName("category_name");
    if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
      item[i].style.display = "flex";
    }else{
      item[i].style.display = "none";
    }
  }
}
$(function(){
  $('#datepicker').datepicker();
})

/*클릭한 부분만 체크, 나머지 체크들은 해제하기*/
$('.category_box').click(function checkLabel(){
  $('.category_check').css('visibility', 'hidden');
  $(this).find('img').css('visibility', 'visible');
  let currentLabel = this.className; 
  //이 블록이 현재 속한 Label class명
  console.log(currentLabel);
});

// 
$(function(){
  $('#add_log_button').click(function(){
    $('.daily_log.user'+latest_user[latest_user.length-1]).append(`<div class="block hidden"></div>
    <div class="block log">
        <span class="category_color"></span>
        <div class="log_info">
            <p>생활코딩 JS 1강 수강</p>
            <button class="emoji log_emoji">🤗</button>
        </div>
    </div>`)
  })
})