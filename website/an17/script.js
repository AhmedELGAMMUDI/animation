var accordions = document.getElementsByClassName("accordion"); //accordion is the button
 //accordions is array [accordion,accordion,accordion];
for (var i = 0; i < accordions.length; i++) { // for loop to 3 time  
  accordions[i].onclick = function() {      // accordions 1,2,3 it's.clicked so open 
    this.classList.toggle('is-open');        
 
    var content = this.nextElementSibling; 
    if (content.style.maxHeight) { 
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}