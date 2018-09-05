var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var message = document.getElementById("timeEvent");
var lolcat = document.getElementById('lolcat');
var image;
if (time == partyTime){
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
} else {
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good afternoon!";
}
message.innerText=messageText;
lolcat.src= image;
var showCurrentTime = function()
{
	var clock=document.getElementById("clock");
	var currentTime= new Date();
	var hours= currentTime.getHours();
	var minutes= currentTime.getMinutes();
	var seconds= currentTime.getSeconds();
	var meridian="PM";

	if (time<noon){
		meridian="AM";
	}
	if (time>noon){
		hours=hours-12;
	}
	if(minutes<10){
		minutes="0"+minutes;
	}
	if(seconds<10){
		seconds="0"+seconds;
	}

var clockTime= hours+":"+minutes+":"+seconds;
clock.innerText=clockTime;

};
showCurrentTime();

var updateClock=function(){
	showCurrentTime();
};
updateClock();
setInterval(updateClock, 1000);