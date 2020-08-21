$( function() {
    $( "#datepicker" ).datepicker(
      );
  } );
// console.log('fl')

    /* 카운트다운 */
// class = ui-datepicker-month
// class = ui-datepicker-year
// class = ui-state-active
$('#show_d-day').click(function(){
  
  var dday = $('.hasDatepicker')[0].value.split('/');
  var deadline = new Date(`${dday[0]} ${dday[1]}, ${dday[2]} 00:00:00`).getTime();
  var today = new Date();
  today = today.getTime();
  var distance = deadline - today;
  var day_distance = Math.floor(distance / (1000 * 60 * 60 * 24));
  if (distance == 0) {
    document.querySelector('h1').innerHTML = "D-day";
  }
  else if (distance > 0){
    document.querySelector('h1').innerHTML = 'D-'+(day_distance+1).toString();
  } 
  else{
    document.querySelector('h1').innerHTML = 'D'+(day_distance+1).toString();
  }

})

