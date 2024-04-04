let inputBox =  document.querySelector("#input-box");
let button = document.querySelector("button");
let listContainer = document.querySelector("#list-container");

button.addEventListener("click", function() {
    if (inputBox.value === "") {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let cross = document.createElement("span");
        cross.innerText = "\u00d7";
        li.appendChild(cross);
    }
    inputBox.value = "";
    saveData();
});

listContainer.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("krishnaData", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("krishnaData");
}
showData();