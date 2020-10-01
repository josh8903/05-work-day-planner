var time = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
    currentHour = moment().format("HH");
console.log(currentHour);

// append current day to header
$("#currentDay").html(moment().format("dddd, MMMM Do"));

// append time blocks to body -- set time styles -- populate saved text
for (var i = 9; i <= 17; i++) {
    $(".container").append('<div class="time-block"><div class="row"><div class="hour">' +
        time[i - 9] + '</div><div id="' +
        i + '" class="description"><textarea id="save' +
        i + 't" rows="4" cols ="117"></textarea></div><div class="saveBtn"><i id="save' +
        i + '" class="fa fa-floppy-o"></i></div></div></div>');
    var textDiv = document.getElementById(i),
        text = "save" + i + "t";
    if (i < currentHour) {
        textDiv.classList.add("past");
    }
    if (i == currentHour) {
        textDiv.classList.add("present");
    }
    if (i > currentHour) {
        textDiv.classList.add("future");
    }
    document.getElementById(text).value = localStorage.getItem(text);
}

// save button -- on click save text to local storage
$("i").click(function() {
    var textArea = $(this).attr("id") + "t",
        text = document.getElementById(textArea).value;
    localStorage.setItem(textArea, text);
});