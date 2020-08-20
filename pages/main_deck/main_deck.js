const today = new Date()
const yesterday = new Date(today)
var i = 0;
document.querySelectorAll('.today_date').forEach(function(day){
    console.log(day.innerHTML);
    yesterday.setDate(yesterday.getDate()-1);
    var date_str = yesterday.toDateString();
    day.innerHTML=date_str.split(' ')[2];
});

// let d = document.querySelectorAll('.daily_date_id');

// for (i=0; ++i; i<d.length) {
//     let date = document.querySelectorAll('.daily_date_id')[i].id[3]+document.querySelectorAll('.daily_date_id')[i].id[4];
//     document.querySelectorAll('.today_date')[i].innerText = date;
//     }
