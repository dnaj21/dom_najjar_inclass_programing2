// Select all buttons and content elements
const btnA = document.getElementById("btn-a");
const btnB = document.getElementById("btn-b");
const btnC = document.getElementById("btn-c");

const contentA = document.getElementById("content-a");
const contentB = document.getElementById("content-b");
const contentC = document.getElementById("content-c");

// Show/Hide Logic
function showContent(button, content) {
  button.addEventListener("click", () => {
    content.style.display = "block";
  });
}

function hideContent() {
  document.querySelectorAll(".hide-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetId = e.target.getAttribute("data-target");
      document.getElementById(targetId).style.display = "none";
    });
  });
}

// Attach events
showContent(btnA, contentA);
showContent(btnB, contentB);
showContent(btnC, contentC);
hideContent();
