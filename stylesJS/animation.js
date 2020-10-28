//By KHALKI Elmehdi.
//MMPG Softwares Test Round 1.
//Animation by Javascript.

//Declarations
var pos = 0;
var id = setInterval(frame, 10);
var elem = document.getElementById("dinfo"); 
var loader = document.getElementById('loader');

//body.dinfo
function frame() {
  if (pos == 100) {
    clearInterval(id);
  } else {
    pos++;
    elem.style.left = pos + "px";   
    
    elem.style.opacity = pos+"%" ;   
  } 
}


//body.loader
//We can use this animated loading functions
function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
           loadNow(opacity - 0.05);
        }, 50);
    }
}
  
function displayContent() {
    loader.style.display = 'none';
    elem.style.display = 'block';
}
  
document.addEventListener("DOMContentLoaded", function() {
    loadNow(1);
});
