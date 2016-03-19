
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    // Sample code
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	box = document.querySelector('#textbox');
    	box.innerHTML = box.innerHTML == "Basic" ? "Sample" : "Basic";
    });
    
    
    try {
        var channel = tizen.tvchannel.getCurrentChannel();
        console.log("The current channel name is "  + channel.channelName);
        console.log("The current channel's major number is "  + channel.major);
        console.log("The current channel's ", channel.major);
    } catch (error) {
        console.log("Error name = "+ error.name + ", Error message = " + error.message);
    } 
    
   
    
};
