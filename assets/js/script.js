var eventNameInput = document.querySelector(".event-name-input");
var eventDescriptionInput = document.querySelector(".event-description-input");
var timeLabel = document.querySelector("#time-label");
var saveButton = document.querySelector(".save-button");
var currentDay = document.querySelector("#current-day");

console.log(eventNameInput);
console.log(eventDescriptionInput);
console.log(timeLabel, "");

saveButton.addEventListener("click", function saveInfo() {
    saveButton.addEventListener("click", function () {
        console.log(this);
        var description = eventDescriptionInput.value;
        var name = eventNameInput.value;
        // var time = timeLabel.text;
        localStorage.setItem('name', (name));
        localStorage.setItem('description', (description));
})});

eventNameInput.value = localStorage.getItem('name');
eventDescriptionInput.value = localStorage.getItem('description');

function displayDay() {
    currentDay.textContent = moment().toDate()
}