month_names = {'Jan':1, 'Feb':2, 'Mar':3, 'Apr':4, 'May':5, 'Jun':6, 
'Jul':7, 'Aug':8, 'Sep':9, 'Oct':10, 'Nov':11, 'Dec':12};

function setBlockDay() {
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() + 1)
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
    setBlockDay();
    };
});


$('.load_future').click(function () {
  var isTop = false;
  if (!$('.log_section').scrollTop()){isTop=true};
  if(this.innerHTML === 'more'){
      $('.future').css('display','block');
      $('.future_alert').css('display','block');
      this.innerHTML = 'close';
  }else{
      $('.future').css('display','none');
      $('.future_alert').css('display','none');
      this.innerHTML = 'more';
  }
  if(isTop){
      $('.log_section')[0].scrollTop += $('.present_section').position().top-$('.future_section').position().top;
  }
  
});




/*스쿠버*/


// 뉴 로그 모달1
// Get the modal
var modal = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 뉴 로그 모달2

/*Block modal*/
// Get the modal
var modal = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 뉴 로그 모달3
// Get the modal
var modal = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// 뉴 로그 모달4
// Get the modal
var modal = document.getElementById("myModal4");

// Get the button that opens the modal
var btn = document.getElementById("myBtn4");


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 뉴 로그 모달5
// Get the modal
var modal = document.getElementById("myModal5");

// Get the button that opens the modal
var btn = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





// DEBUG
// When the user clicks on <span> (x), close the modal
span.onclick = function(event) {
    modal.style.display = "none";
  }
  


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

