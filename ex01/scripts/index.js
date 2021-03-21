// Get the modal
var modal = document.getElementById("myModal");
var iframeBlock = document.getElementById("iframe-block");
var imgTitle = document.getElementsByClassName("img-title");

for (i = 0; i < imgTitle.length; i++) {
  imgTitle[i].addEventListener("click", function () {
    var iframeTitle = this.getAttribute("data-iframe");

    modal.style.display = "block";
    iframeBlock.innerHTML =
      '<iframe src="' + iframeTitle + '" width="100%" height="500"></iframe>';
  });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
