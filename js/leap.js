
// Setup Leap loop with frame callback function
var controllerOptions = {
	enableGestures: true
};

var controller = Leap.loop(controllerOptions, function(frame){
  //... handle frame data
   if(frame.valid && frame.gestures.length > 0){
    //console.log(frame.gestures);
    if (frame.gestures.first().type == "swipe"){
    	
    }
  }
});

controller.on("gesture", function(gesture){
  //... handle gesture object
	switch (gesture.type){
		case "keyTap":
			console.log("Key Tap Gesture");
			break;
		case "swipe":

			console.log(gesture);
			Reveal.next();

			break;
	}
});