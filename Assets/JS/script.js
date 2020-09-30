// current time
var currentTime = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentTime);

// append empty time block el

$(".container").append('<div class="time-block"><div class="row"><div class="hour">hour</div><div class="description past"><textarea rows="4" cols ="117"></textarea></div><div class="saveBtn"><i class="fa fa-floppy-o"></i></div></div></div>');