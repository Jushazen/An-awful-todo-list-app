const inputBox = document.getElementById("input-box");
const containerList = document.getElementById("container-list");

function AddTask() {
  if (inputBox.value === "") {
    alert("Task is empty!");
  } else {
    let li = document.createElement("li");
    let checkbox = document.createElement("img");
    checkbox.src = "uncheck.png";
    li.appendChild(checkbox);
    li.insertAdjacentText("beforeend", inputBox.value);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    containerList.appendChild(li);
  }
  inputBox.value = "";
}

containerList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    const checkbox = e.target.querySelector("img");
    if (checkbox) {
      checkbox.src = e.target.classList.contains("checked")
        ? "check.png"
        : "uncheck.png";
    }
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.classList.toggle("checked");
    e.target.src = e.target.parentElement.classList.contains("checked")
      ? "check.png"
      : "uncheck.png";
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
