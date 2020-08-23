
// Create a "gem-icon" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI"); 
var i; 
var graydegree = 100;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("💎");
  span.className = "gem-icon";
  span.id="id-gem"
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a gem-icon button to hide the current list item
var close = document.getElementsByClassName("gem-icon");
var i;
// for (i = 0; i < close.length; i++) {
//   // close[i].onclick = function () {
//   // var div = this.parentElement;
//   // div.style.display = "none";
//   } 
// }

// user1-adding milestone list
// Create a new list item when clicking on the "Add" button



function newElement1(){

  var li = document.createElement("li"); //Create li element
  var inputValue1 = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue1);
  li.appendChild(t);
  if (inputValue1 === '') { //prevents empty list items 
    alert("마일스톤을 입력하라구!"); 
  } else {
    document.getElementById("miUl").appendChild(li); //text to list
  }

  //cal icon 
  var span2 = document.createElement("span"); 
  var txt2 = document.createTextNode(" 🗓 ");
  span2.className = "cal-icon";
  span2.appendChild(txt2);
  li.appendChild(span2); 
  
  document.getElementById("myInput").value = ""; 

  //gem icon 
  var span1 = document.createElement("SPAN"); 
  var txt = document.createTextNode("💎");
  span1.className = "gem-icon";
  span1.id="id-gem";
  span1.appendChild(txt);
  li.appendChild(span1); 

  // //create id for each gem-icon
  // var element = document.querySelectorAll('span.gem-icon'); // convert NodeList into an array
  // Array.from(element) // iterate over the element 
  // .forEach(function(ele, g) { // generate and set id
  //   ele.setAttribute("id", 'gem' + (g + 1));
  // })

  // $(function(){
  //   $('span.gem-icon').click(function(){
  //     $(this).css.filter("grayscale(0%)");
  //   });
  // });

  //gem coloring 
  //보석을 클릭하고 alert를 확인하면 보석의 색이 바뀐다
  $(function(){
    $('span.gem-icon').click(function(){
         
         for (i = 0; i < close.length; i++) {
          close[i].onclick = function (){
            var answer = confirm("마일스톤을 벌써 달성했어?🤭")
            if (answer){
              alert ("축하해! 내가 아끼는 보석 하나 주지!")
              $(this).css("filter","grayscale(0%)");
              }
              else {
                alert ("조금 더 노를 저으라구!")
              }

          }
          
      
            }
            
            
          })
    });



  // //coloring gem
  // for (i = 0; i < close.length; i++) {
  //     close[i].onclick = function (){
        
  //       var answer = confirm("마일스톤을 벌써 달성했어?🤭")

  //       if (answer){
  //         alert ("축하해! 내가 아끼는 보석 하나 주지!")
  //         var graydegree = document.getElementById('id-gem');
  //         graydegree.style.filter="grayscale(0%)";
  //         }
  //         else {
  //           alert ("조금 더 노를 저으라구!")
  //           // var div = this.parentElement;
  //           // div.style.display = "none";
  //         }
  
  //       }
        
        
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
  var txt = document.createTextNode("💎");
  span.className = "gem-icon";
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
  var txt = document.createTextNode("💎");
  span.className = "gem-icon";
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
  var txt = document.createTextNode("💎");
  span.className = "gem-icon";
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
  var txt = document.createTextNode("💎");
  span.className = "gem-icon";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

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
        $('.hasDatepicker')[0].value = '🥊 D-' + (day_distance).toString() + ' 🥊';
      } else {
        $('.hasDatepicker')[0].value = '⌛️ D+' + (-1 * (day_distance)).toString() + ' ⌛️';
      }
    }
  });
});

// 모달의모달
