


let d = document.querySelectorAll('.daily_date_id');

for (i=0; ++i; i<d.length) {
    let date = document.querySelectorAll('.daily_date_id')[i].id[3]+document.querySelectorAll('.daily_date_id')[i].id[4];
    document.querySelectorAll('.today_date')[i].innerText = date;
    }
