
//----------- destination section 

//새로운 데스티네이션을 생성하는 함수 
function newDesti() {
  var destiLi = document.createElement("li"); //li생성
  destiLi.className = "newDestiLi"; 
  document.getElementById("destiLiId").appendChild(destiLi); //ul에 생성한 li추가

  // if div is needed 
  // var newDestiCard=document.createElement("div")//div 카드 생성
  // newDestiCard.className="addedDestiDiv"; 
  // destiLi.appendChild(newDestiCard);

  //insert island image
  var destiImg = document.createElement("img");
  destiImg.className="desti-empty-img-gray";
  destiImg.setAttribute('src','../image/desti.png');
  destiLi.appendChild(destiImg);  //list에  img추가 

  //insert datepicker container
  var destiDatepicker = document.createElement("p");
  destiDatepicker.className="datepickbox"; 

  //insert date picker input box
  var destiDateInput = document.createElement("input");
  destiDateInput.className="hasDatepicker";
  destiDateInput.id="desti-datepicker";
  destiDateInput.setAttribute('type','text');
  destiDateInput.setAttribute('placeholder','디데이를 설정해주세요! 🗓');

  //put date picker in the container 
  destiDatepicker.appendChild(destiDateInput);

  //put the destiDatepicker into destiLi
  destiLi.appendChild(destiDatepicker);

  var destiNameDiv = document.createElement("div");
  destiNameDiv.className="upcoming-desti";
  var destiName = document.createElement("input");
  destiName.setAttribute('type','textarea');
  destiName.setAttribute('placeholder','여기를 클릭해 다음 목적지 입력..');
  
  destiNameDiv.appendChild(destiName);
  destiLi.appendChild(destiNameDiv);
}


const idToName={
  1:"SOLL",2:"SAAN",3:"ZOZE",4:"SCUBA",5:"JUNE"
}

//get gem element
var getGem = document.getElementsByClassName("gem-icon");

function milest_cal_pick_enable() {
  $(".cal-icon").click(function () {
    $(this).datepicker({
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
          $(this)[0].innerText = "D-day";
        } else if (day_distance > 0) {
          $(this)[0].innerText = '🥊 D-' + (day_distance).toString() + ' 🥊';
        } else {
          $(this)[0].innerText = '⌛️ D+' + (-1 * (day_distance)).toString() + ' ⌛️';
        };
        console.log($(this).text());
      }
    });
  });
};

//마일스톤 달성 시 alert로 확인하고 Gem 색을 켜는 함수 
function milestDone() {
  $(function () {
    $('span.gem-icon').click(function () {

      for (i = 0; i < getGem.length; i++) {
        getGem[i].onclick = function () {
          var answer = confirm("마일스톤을 벌써 달성했어?🤭")
          if (answer) {
            alert("축하해! 내가 아끼는 보석 하나 주지!")
            $(this).css("filter", "grayscale(0%)");
            let mile_fin_user_name = idToName[$(this).first().parent().parent().parent().attr('class').slice(-1)];
            let mile_name = $(this).parent().find('input').text();
            // $.get('../storage/storage.html',function(data){
            //   console.log(data);
              
            // });
          }
          else {
            alert("조금 더 노를 저으라구!")
          }

        }


      }


    })
  });
}


//----------- milestone section 


// user1의 컬럼에 새로운 리스트 엘리먼트를 생성함
function newElement1() {

  var li = document.createElement("li"); //Create list element
  var inputValue1 = document.getElementById("myInput").value; //input text
  var t = document.createTextNode(inputValue1);

  // li.appendChild(t);

  var milestLiInput = document.createElement("input");//create input text area
  milestLiInput.setAttribute('type','text');
  milestLiInput.className="milestLiInput" // class name 
  milestLiInput.id="inputtestid"; //id name
  milestLiInput.appendChild(t);
  
  li.appendChild(milestLiInput); //put input box in list

  // var inputvaluetest = document.getElementsById('inputtestid').value;
  // // document.getElementById("inputtestid").appendchild(inputValue1);

  // li.appendChild(t);
  
  if (inputValue1 === '') { //prevents empty list items 
    alert("마일스톤을 입력하라구!");
  } else {
    milestLiInput.setAttribute('placeholder',inputValue1); 
    document.getElementById("miUl").appendChild(li); //text to list
  }

  document.getElementById("myInput").value = ""; //resest input text area after adding to list

  //cal icon 
  var cal_box = document.createElement("div");
  li.appendChild(cal_box);
  var span2 = document.createElement("span");
  var txt2 = document.createTextNode(" 🗓 ");
  cal_box.className = "cal-box";
  span2.className = "cal-icon";

  span2.appendChild(txt2);
  li.appendChild(span2);

  // //create gem icon
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("💎");
  span.className = "gem-icon";
  span.appendChild(txt);
  li.appendChild(span);

  milestDone();
  // //create id for each gem-icon
  // var element = document.querySelectorAll('span.gem-icon'); // convert NodeList into an array
  // Array.from(element) // iterate over the element 
  // .forEach(function(ele, g) { // generate and set id
  //   ele.setAttribute("id", 'gem' + (g + 1));
  // })

  //gem coloring 
  //보석을 클릭하고 alert를 확인하면 보석의 색이 바뀐다

  milestDone();
  milest_cal_pick_enable();

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
  //cal icon 
  var span2 = document.createElement("span");
  var txt2 = document.createTextNode(" 🗓 ");
  span2.className = "cal-icon";
  span2.appendChild(txt2);
  li.appendChild(span2);

  // //create gem icon
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("💎");
  span.className = "gem-icon";
  span.appendChild(txt);
  li.appendChild(span);

  milestDone();

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

  milestDone();
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

  milestDone();
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

  milestDone();
}




//D-day 
$(function () {
  $("#desti-datepicker").datepicker({
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

