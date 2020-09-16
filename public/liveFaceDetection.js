
const video = document.getElementById('video');
var img = document.getElementById('videostop');

function diactivate() {
	if (document.getElementById('faceRec') !== null)
		document.getElementById('faceRec').remove();
	
}

function facestudying(){
	if (document.getElementById('faceRec') !== null) 
	document.getElementById('faceRec').remove();
	video.style.display ='inline-block';
	document.getElementById('model').style.display = 'flex';

	Promise.all([
	faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
	faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
	faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
	faceapi.nets.faceExpressionNet.loadFromUri('/models')

	]).then(startVideo);

function startVideo(){



	// console.log("active");
	navigator.getUserMedia(

		{audio : false,video :true},
		function(stream) {
         video.srcObject = stream;
        // ...
        video.addTrack;
    	},
		err => console.error(err)
		)

}


video.addEventListener('play', ()=>{
	img.height = 0;
	video.height= "450";
	video.width ='600';
	
	img.width =0;
	
	img.style = 'none';
	document.getElementById('model').style.display = 'none';
	if(document.querySelector('canvas') !==null)
	document.querySelector('canvas').remove();
	const canvas =  faceapi.createCanvasFromMedia(video);
	

	document.getElementById('faceD').append(canvas);
	const displaySize ={ width: video.width, height: video.height};
	faceapi.matchDimensions(canvas, displaySize)
	setInterval( async () =>{
		// canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height)
		const detections = await faceapi.detectAllFaces(video, 
		new faceapi.TinyFaceDetectorOptions() ).withFaceLandmarks().withFaceExpressions()
		// console.log(detections);
		const resizedDetections = faceapi.resizeResults(detections, displaySize)
		canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height)
		faceapi.draw.drawDetections(canvas,resizedDetections)
		// faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
		faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
	},100)

})
}

function AutoRefresh(  ) {

	
	video.height="0px";
	video.width= '0px';
	img.height = '450';
	img.width ='650';
	// img.style.padding = '40px';
	const can = document.querySelector('canvas');
	can.remove();
	video.style.display= 'none';
    var track = video.srcObject.getVideoTracks()[0];  // if only one media track
        // ...
    video.srcObject.active =false;
    // console.log(video);
    track.stop();
   
    // console.log("stop");

               
            }

	
