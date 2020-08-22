//to do list test

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

/* Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/


//user1-adding milestone list
// Create a new list item when clicking on the "Add" button
function newElement1() {
  var li = document.createElement("li");
  var inputValue1 = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue1);
  li.appendChild(t);
  if (inputValue1 === '') {
    alert("마일스톤을 입력하라구!");
  } else {
    document.getElementById("miUl").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//user2-adding milestone 
// Create a new list item when clicking on the "Add" button
function newElement2() {
  var li = document.createElement("li");
  var inputValue2 = document.getElementById("myInput2").value;
  var t = document.createTextNode(inputValue2);
  li.appendChild(t);
  if (inputValue2 === '') {
    alert("마일스톤을 입력하라구!");
  } else {
    document.getElementById("miUl2").appendChild(li);
  }
  document.getElementById("myInput2").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//user3-adding milestone 
// Create a new list item when clicking on the "Add" button
function newElement3() {
  var li = document.createElement("li");
  var inputValue3 = document.getElementById("myInput3").value;
  var t = document.createTextNode(inputValue3);
  li.appendChild(t);
  if (inputValue3 === '') {
    alert("마일스톤을 입력하라구!");
  } else {
    document.getElementById("miUl3").appendChild(li);
  }
  document.getElementById("myInput3").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//user4-adding milestone
// Create a new list item when clicking on the "Add" button
function newElement4() {
  var li = document.createElement("li");
  var inputValue4 = document.getElementById("myInput4").value;
  var t = document.createTextNode(inputValue4);
  li.appendChild(t);
  if (inputValue4 === '') {
    alert("마일스톤을 입력하라구!");
  } else {
    document.getElementById("miUl4").appendChild(li);
  }
  document.getElementById("myInput4").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//user5-adding milestone
// Create a new list item when clicking on the "Add" button
function newElement5() {
  var li = document.createElement("li");
  var inputValue5 = document.getElementById("myInput5").value;
  var t = document.createTextNode(inputValue5);
  li.appendChild(t);
  if (inputValue5 === '') {
    alert("마일스톤을 입력하라구!");
  } else {
    document.getElementById("miUl5").appendChild(li);
  }
  document.getElementById("myInput5").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}












// 가로슬라이더 테스트
// var swiper = new Swiper('.swiper-container', {
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     hide: true,
//   },
// });

//D-day 
$(function () {
  $("#datepicker").datepicker({
    dateFormat: 'yy-mm-dd',
    onSelect: function (date) {
      var dday = date.split('-');
      var deadline = new Date(`${dday[0]} ${dday[1]}, ${dday[2]} 00:00:00`).getTime();
      var today = new Date();
      today = today.getTime();
      var distance = deadline - today;
      var day_distance = Math.floor(distance / (1000 * 60 * 60 * 24));
      day_distance += 1;
      if (day_distance == 0) {
        $('.hasDatepicker')[0].value = "D-day";
      } else if (day_distance > 0) {
        $('.hasDatepicker')[0].value = 'D-' + (day_distance).toString();
      } else {
        $('.hasDatepicker')[0].value = 'D+' + (-1 * (day_distance)).toString();
      }
    }
  });
});