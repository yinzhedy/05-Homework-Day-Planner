var eventNameInput = document.querySelector(".event-name-input");
var eventDescriptionInput = document.querySelector(".event-description-input");
var timeLabel = document.querySelector("#time-label");
var saveButton = document.querySelector(".save-button");
var currentDay = document.getElementById("current-day");
var timeRow = document.querySelector(".row")
var timeRowsAll = document.querySelectorAll(".row");
var timeRows = [
  document.getElementById("row-9"),
  document.getElementById("row-10"),
  document.getElementById("row-11"),
  document.getElementById("row-12"),
  document.getElementById("row-1"),
  document.getElementById("row-2"),
  document.getElementById("row-3"),
  document.getElementById("row-4"),
  document.getElementById("row-5"),
]

// display current day
var currentHour = moment().format("H");
console.log(currentHour)
var today = moment();
currentDay.textContent = today.format("MMM Do, YYYY");

// save input for event name and description to local storage on save-button click
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

// get information from local storage
eventNameInput.value = localStorage.getItem("name");
eventDescriptionInput.value = localStorage.getItem("description");

// set time for each row according to value and change background color accordingly
function setTimePerRow() {
    for (var i = 0; i < timeRows.length; i++) {
        var time = timeRows[i].getAttribute("value");
        console.log(time)
            if (time == currentHour) {
                timeRows[i].style.background = "yellow";}
            else if (time > currentHour) {
                timeRows[i].style.background = "blue";}
            else (time < currentHour) 
                timeRows[i].style.background = "red";};};
            

setTimePerRow();
