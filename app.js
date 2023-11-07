const cercles = document.querySelectorAll(".cercle");
indicator = document.querySelector(".progress_bar .bar");
btns = document.querySelectorAll("button");

console.log(btns);

let step = 1;

const updateStep = (e) => {
  step = e.target.className === "next" ? ++step : --step;

  cercles.forEach((cercle, index) => {
    cercle.classList[`${index < step ? "add" : "remove"}`]("active");
  });

  console.log(step);
  indicator.style.width = `${((step - 1) / (cercles.length - 1)) * 100}%`;

  console.log(btns[0]);
  if (step === cercles.length) {
    btns[1].disabled = true;
    btns[1].style.cursor = "not-allowed";
  } else if (step === 1) {
    btns[0].disabled = true;
    btns[0].style.cursor = "not-allowed";
  } else {
    //   btns[0].disabled = false;
    //   btns[0].style.cursor = "pointer";
    //   btns[1].disabled = false;
    //   btns[1].style.cursor = "pointer";
    btns.forEach((btn) => {
      btn.disabled = false;
      btn.style.cursor = "pointer";
    });
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", updateStep);
});
