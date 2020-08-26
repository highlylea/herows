// const slider = document.querySelector('.items');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });

// 드래그앤드롭
// $(function() {
//   $(".sidebar .draggable").draggable({
//     grid: [ 20, 20 ],
//     appendTo: '#droppable',
//     containment: "window",
//     cursor: 'move',
//     revertDuration: 100,
//     revert: 'invalid',
//     helper: 'clone'
//   });

//   $("#droppable").droppable({
//     accept: ".sidebar .draggable",
//     drop: function (event, ui) {
//       ui.helper.clone().appendTo('#droppable');
//       $(".container .draggable").draggable({					
//         containment:"#droppable"
//       });				
//     }
//   });	
// });


