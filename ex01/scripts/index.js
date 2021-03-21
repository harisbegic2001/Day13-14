// Get the modal
var modal = document.getElementById("myModal");
var imgBlock = document.getElementById("img-block");

// Get the button that opens the modal
var gridItem = document.getElementsByClassName("grid-item");

for(i = 0; i < gridItem.length; i++){
  gridItem[i].addEventListener('click', function(){
    var imgFull = this.getAttribute('data-image');

    modal.style.display = "block";
    imgBlock.innerHTML = '<img class="w-100" src="../images/' + imgFull + '">';
  });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
