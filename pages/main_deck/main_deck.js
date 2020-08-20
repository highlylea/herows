const today = new Date()
const yesterday = new Date(today)
var i = 0;
document.querySelectorAll('.today_date').forEach(function (day) {
    console.log(day.innerHTML);
    yesterday.setDate(yesterday.getDate() - 1);
    var date_str = yesterday.toDateString();
    day.innerHTML = date_str.split(' ')[2];
});

$(document).ready(function () {
    $('.log_section').scroll(function () {
        console.log('scroll!!!');
        if ($('.log_section').scrollTop() > 200) {
            // $('.ufo').css('right','800px');
            $(".load_month").each(function () {
                // $(this).innerText = 'over100!!';
                this.innerHTML = '7월';
                // Add $(this).val() to your list
            });
        }
        else {
            $(".load_month").each(function () {
                // $(this).innerText = 'over100!!';
                this.innerHTML = '8월';
                // Add $(this).val() to your list
            });
        }
    });
});


// let d = document.querySelectorAll('.daily_date_id');

// for (i=0; ++i; i<d.length) {
//     let date = document.querySelectorAll('.daily_date_id')[i].id[3]+document.querySelectorAll('.daily_date_id')[i].id[4];
//     document.querySelectorAll('.today_date')[i].innerText = date;
//     }



// Get the modal
var modal = document.getElementById('block_modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("modal_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];                                          

// When the user clicks on the button, open the modal 
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