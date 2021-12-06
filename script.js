function myFunction() { //Меню-бургер
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

var btn_prev = document.querySelector('#slider .buttons .prev');
var btn_next = document.querySelector('#slider .buttons .next');
var images = document.querySelectorAll('#slider .photos img');

var i = 0;
btn_prev.onclick = function(){
     images[i].style.display = 'none';
     i = i - 1;
     
     if(i < 0){
         i = images.length - 1;
     }
     
     images[i].style.display = 'block';
}

btn_next.onclick = function(){
     images[i].style.display = 'none';
     i = i + 1; 
     
     if(i >= images.length){
         i = 0;
     }
     
     images[i].style.display = 'block';
}