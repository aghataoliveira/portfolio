// Menu
// Show sticky header on click
var burguerMenu = document.getElementsByClassName("burguerMenu")[0];
burguerMenu.addEventListener("click", function(myFunction){
  var stickyHeader = document.getElementsByClassName("sticky-header")[0];
if (stickyHeader.style.display == "block"){
    stickyHeader.style.display = "none";
}else{
  stickyHeader.style.display = "block";
}
});
// Hide sticky header on click
var burguerMenu = document.getElementsByClassName("sticky-header")[0];
burguerMenu.addEventListener("click", function(myFunction){
  if (window.innerWidth>650){
    var stickyHeader = document.getElementsByClassName("sticky-header")[0];
      stickyHeader.style.display = "block";
  }else{
    var stickyHeader = document.getElementsByClassName("sticky-header")[0];
    stickyHeader.style.display = "none";
  }
});
