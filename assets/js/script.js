var eventNameInput = document.querySelector(".event-name-input");
var eventDescriptionInput = document.querySelector(".event-description-input");
var timeLabel = document.querySelector("#time-label");
var saveButton = document.querySelector(".save-button");
var currentDay = document.getElementById("current-day");

console.log(eventNameInput);
console.log(eventDescriptionInput);
console.log(timeLabel, "");

saveButton.addEventListener("click", function saveInfo() {
  saveButton.addEventListener("click", function () {
    console.log(this);
    var description = eventDescriptionInput.value;
    var name = eventNameInput.value;
    // var time = timeLabel.text;
    localStorage.setItem("name", name);
    localStorage.setItem("description", description);
  });
});

eventNameInput.value = localStorage.getItem("name");
eventDescriptionInput.value = localStorage.getItem("description");

var today = moment();
currentDay.textContent = today.format("MMM Do, YYYY");
console.log(currentDay.textContent)
currentDay.textContent
