const iconBtn = document.getElementById("nav-icon");

const icon = iconBtn.firstChild;

iconBtn.addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("dark-mode");

  body.classList.contains("dark-mode")
    ? (icon.className = "fa fa-sun")
    : (icon.className = "fa fa-moon");
});
