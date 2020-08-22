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



$('.load_future').click(function () {
    var isTop = false;
    if (!$('.log_section').scrollTop()){isTop=true};
    if(this.innerHTML === 'more'){
        $('.future').css('display','block');
        this.innerHTML = 'close';
    }else{
        $('.future').css('display','none');
        this.innerHTML = 'more';
    }
    if(isTop){
        $('.log_section')[0].scrollTop += $('.present_section').position().top-$('.future_section').position().top;
    }
    
});




let color_label = {'white':'#FFFFFF', 'black':'000000', 'yellow':'FFCC00', 'skyblue':'#5AC8FA', 'red':'#FF3B30', 'purple':'AF52DE','pinkred':'#FF2D55', 'orange':'#FF9500', 'navy':'#5856D6', 'green':'#34C759', 'blue':'#007AFF', 'dark-gray':'#C1C1E'};



