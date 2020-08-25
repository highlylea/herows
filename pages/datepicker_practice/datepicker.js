$( function() {
    $( "#datepicker" ).datepicker(
      );
  } );


$('#show_d-day').click(function(){
  
  var dday = $('.hasDatepicker')[0].value.split('/');    
    // hasDatepicker[0].value에 선택 날짜 저장 ex(08/21/2020)
    // split '/' 사용하여 [08,21,2020] list로 바꾸고 dday 변수에 저장
  var deadline = new Date(`${dday[0]} ${dday[1]}, ${dday[2]} 00:00:00`).getTime();
  // MM DD, YYYY hh:mm:ss 형식의 시각의 POSIX 시간을 저장 (1970년 1월 1일 부터 경과시간 ms)
  var today = new Date(); // 현재
  today = today.getTime(); // 마찬가지로 POSIX시간 저장
  var distance = deadline - today; // 두 시간 사이의 밀리 초(ms) 차이 
  var day_distance = Math.floor(distance / (1000 * 60 * 60 * 24)); // 1000*60*60*24 로 나누어 일 차이 계산
  // floor 는 소수점 버림
  day_distance += 1; // ex) d-day : 8월 12일  now : 8월 11일 21시 day_distance = Math.floor(0.875) = 0
  // so 1일 추가
  if (day_distance == 0) {
    document.querySelector('h1').innerHTML = "D-day"; //같은날짜면  D-day
  }
  else if (day_distance > 0){ // 1일 이상 deadline이 앞서있을 때
    document.querySelector('h1').innerHTML = 'D-'+(day_distance).toString(); 
  } 
  else{  //1일 이상 deadline이 뒤쳐져있을 때
    document.querySelector('h1').innerHTML = 'D+'+(-1*(day_distance)).toString();
  }

})

