// Live Preview
document.getElementById("codeInput").addEventListener("input", function () {
  const iframe = document.getElementById("liveOutput");
  iframe.srcdoc = this.value;
});

// Interactive Examples
function changeColor() {
  document.getElementById("exampleBox").style.backgroundColor = "lightblue";
}

// Navigation Buttons
function navigate(action) {
  if (action === "prev") {
    window.location.href = "course-previous.html";
  } else if (action === "next") {
    window.location.href = "course-next.html";
  } else if (action === "test") {
    window.location.href = "tests.html";
  }
}

function toggleAside() {
  document.getElementById("sidebar").classList.toggle("hidden");
}

function toggleDropdown(index) {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  const currentDropdown = dropdowns[index];
  currentDropdown.style.display =
    currentDropdown.style.display === "block" ? "none" : "block";
}
