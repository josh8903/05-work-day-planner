var currentDay = moment().format("dddd, MMMM Do"),
    HH = moment().format("HH");

// push current day
$("#currentDay").html(currentDay);

// append empty time blocks
$(".container").append('<div class="time-block"><div class="row"><div class="hour">9:00 am</div><div id="9" class="description"><textarea id="save9t" rows="4" cols ="117"></textarea></div><div class="saveBtn"><i id="save9" class="fa fa-floppy-o"></i></div></div></div>');
$(".container").append('<div class="time-block"><div class="row"><div class="hour">10:00 am</div><div id="10" class="description"><textarea id="save10t" rows="4" cols ="117"></textarea></div><div class="saveBtn"><i id="save10" class="fa fa-floppy-o"></i></div></div></div>');
$(".container").append('<div class="time-block"><div class="row"><div class="hour">11:00 am</div><div id="11" class="description"><textarea id="save11t" rows="4" cols ="117"></textarea></div><div class="saveBtn"><i id="save11" class="fa fa-floppy-o"></i></div></div></div>');
$(".container").append('<div class="time-block"><div class="row"><div class="hour">12:00 pm</div><div id="12" class="description"><textarea id="save12t" rows="4" cols ="117"></textarea></div><div class="saveBtn"><i id="save12" class="fa fa-floppy-o"></i></div></div></div>');
$(".container").append('<div class="time-block"><div class="row"><div class="hour">1:00 pm</div><div id="13" class="description"><textarea id="save13t" rows="4" cols ="117"></textarea></div><div class="saveBtn"><i id="save13" class="fa fa-floppy-o"></i></div></div></div>');
$(".container").append('<div class="time-block"><div class="row"><div class="hour">2:00 pm</div><div id="14" class="description"><textarea id="save14t" rows="4" cols ="117"></textarea></div><div class="saveBtn"><i id="save14" class="fa fa-floppy-o"></i></div></div></div>');
$(".container").append('<div class="time-block"><div class="row"><div class="hour">3:00 pm</div><div id="15" class="description"><textarea id="save15t" rows="4" cols ="117"></textarea></div><div class="saveBtn"><i id="save15" class="fa fa-floppy-o"></i></div></div></div>');
$(".container").append('<div class="time-block"><div class="row"><div class="hour">4:00 pm</div><div id="16" class="description"><textarea id="save16t" rows="4" cols ="117"></textarea></div><div class="saveBtn"><i id="save16" class="fa fa-floppy-o"></i></div></div></div>');
$(".container").append('<div class="time-block"><div class="row"><div class="hour">5:00 pm</div><div id="17" class="description"><textarea id="save17t" rows="4" cols ="117"></textarea></div><div class="saveBtn"><i id="save17" class="fa fa-floppy-o"></i></div></div></div>');

// loop over time blocks - check style against current time and pull any saved data
for (var i = 9; i < 18; i++) {
    var timeBlock = document.getElementById(i),
        pullSave = "save" + i + "t";
    if (i < HH) {
        timeBlock.classList.add("past");
    }
    if (i === HH) {
        timeBlock.classList.add("present");
    }
    if (i > HH) {
        timeBlock.classList.add("future");
    }
    document.getElementById(pullSave).value = localStorage.getItem(pullSave);
}

// onclick for save buttons
$("i").click(function() {
    var clickSave = $(this).attr("id") + "t",
        saveThis = document.getElementById(clickSave).value;
    localStorage.setItem(clickSave, saveThis);
});