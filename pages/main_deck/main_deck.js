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
    var a = $('.daily_date_id').clone()[0];
    document.querySelector('.past_section').prepend(a);
    $('.log_section')[0].scrollTop = position;
    setBlockDay();
    };
});


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