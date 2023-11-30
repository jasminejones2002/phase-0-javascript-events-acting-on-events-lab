const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
function moveDodgerRight() {
    let newPosition = dodger.style.left
    newPosition = parseInt(newPosition)

    if (newPosition < 360){
        dodger.style.left = `${newPosition + 1}px`;
    }
}