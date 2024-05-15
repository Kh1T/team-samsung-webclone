
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

const orderSummary = document.getElementById("order-summary");
const chevron = document.getElementById("chevron");
const expandButton = document.getElementById("expand-button");

const chevron2 = document.getElementById("chevron-2");

const toggleSummaryHandle = () => {
    orderSummary.classList.toggle("hidden");
    expandButton.classList.toggle("bg-gray-50");
    chevron.classList.toggle("rotate-180");
}
chevron.addEventListener("click", toggleSummaryHandle)

const toggleSummaryHandle2 = () => {
    chevron2.classList.toggle("rotate-180")
}

chevron2.addEventListener("click", toggleSummaryHandle2)

