
/*Galleria initializing*/
$('.photoset-grid-basic').photosetGrid();

$('.photoset-grid-custom').photosetGrid({
  // Set the gutter between columns and rows
  gutter: '5px',
  // Manually set the grid layout
  layout: '21',
  // Wrap the images in links
  highresLinks: true,
  // Asign a common rel attribute
  rel: 'print-gallery',

  onInit: function(){},
  onComplete: function(){
    // Show the grid after it renders
    $('.photoset-grid-custom').attr('style', '');
  }
});





/*current time function//
var today = new_Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(new_Date);
*/
/*on screen clock
function display_ct(){
var refresh=1000; // Refresh rate in mili seconds
mytime=setTimeout("display_ct()",refresh)
}
*/
/*
function display_ct() {
var x = new Date()
document.getElementById('ct').innerHTML = x;
display_c();
 }
 */