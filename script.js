var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var isPartyTime = false;

var partyTimeText = document.getElementById("partyTimeButton");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var updateClock = function() 
{
	var timeEventJS = document.getElementById("timeEvent");
	var lolcat = document.getElementById('lolcat');

	var image;
	var messageText;
	
	if (time == partyTime){
    	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
		messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
    	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "IZ NAP TIME...";
	} else if (time == lunchTime) {
    	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeupTime) {
    	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
		messageText = "IZ TIME TO GETTUP.";
	} else if (time < noon) {
    	image = "https://i.gyazo.com/791e90a434d2264faa42c5359c90fd7a.png";
		messageText = "Good morning!";
	} else if (time > evening) {
		image = "https://i.gyazo.com/e4234ba8f1fe2a218826727ea31609c0.png";
    	messageText = "Good Evening!";
	} else {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    	messageText = "Good afternoon!";
	}

	lolcat.src = image;
	timeEventJS.innerText = messageText;

	var showCurrentTime = function()
	{
    	// display the string on the webpage
   		var clock = document.getElementById('clock');
    	var currentTime = new Date();
    	var hours = currentTime.getHours();
    	var minutes = currentTime.getMinutes();
    	var seconds = currentTime.getSeconds();
    	var meridian = "AM";
     	// Set hours 
    	if (hours >= noon) 
    	{ 
        	meridian = "PM"; 
    	}  
    	if (hours > noon) 
    	{ 
        	hours = hours - 12; 
    	}
     	// Set Minutes
    	if (minutes < 10)
    	{
        	minutes = "0" + minutes;
    	}
     	// Set Seconds
    	if (seconds < 10)
    	{
        	seconds = "0" + seconds;
    	}
     	// put together the string that displays the time
    	var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
     	clock.innerText = clockTime;
	};
	showCurrentTime(); 
};

updateClock(); 

var oneSecond = 1000; 
setInterval (updateClock, oneSecond);

var partyEvent = function() {
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeText.innerText = "PARTY OVER";
      partyTimeText.style.backgroundColor = "#0A8DAB";     }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeText.innerText = "PARTY TIME!";
      partyTimeText.style.backgroundColor = "#222";   
   }
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
var napEvent = function() {
    napTime = napTimeSelector.value;
};

partyTimeText.addEventListener("click", partyEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);