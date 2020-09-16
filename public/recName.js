const imageUpload = document.getElementById('imageUpload');
const recImg = document.getElementById('recImg');

function faceName() {
  if (document.getElementById('waits')) 
    document.getElementById('waits').remove();
    
  
  document.getElementById('model').style.display='flex';
 
  
  // <span id='waitC'><img src="./img/loading.gif" height="20px" width="20px"> Loading...</span>
Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
]).then(start)

async function start() {
  
  const container = document.createElement('div')
  container.style.position = 'relative'
  recImg.append(container)
  const labeledFaceDescriptors = await loadLabeledImages()
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)
  let image
  let canvas
  //  document.getElementById('waitC').remove();
  const sSpan = document.createElement('span');
  sSpan.id='waits';
  //  document.querySelector('.file-upload').style.background = ' rgba(0, 91, 227, 0.77)';
  document.getElementById('wait').style.color = 'white';
  sSpan.append('Upload Image')
  document.getElementById('wait').append(sSpan);
  imageUpload.type = 'file';
  document.getElementById('model').style.display = 'none';
  const cavnasPlace = document.createElement("span");
  container.id ='faceRec'
  container.appendChild(cavnasPlace);
  imageUpload.addEventListener('change', async () => {
    if (image) image.remove()
    if (canvas) canvas.remove()
    
    image = await faceapi.bufferToImage(imageUpload.files[0])
    // image.id = "faceRec";
    image.height = '450';
    image.width ='650';
    container.append(image)
    canvas = faceapi.createCanvasFromMedia(image)
    cavnasPlace.append(canvas)
    const displaySize = { width: image.width, height: image.height }
    faceapi.matchDimensions(canvas, displaySize)
    const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box
      const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
      drawBox.draw(canvas)
    })
  })
}

function loadLabeledImages() {
  const labels = ['Harshit Dubey', 'Surya', 'Unknown']
  return Promise.all(
    labels.map(async label => {
      const descriptions = []
      for (let i = 1; i <= 4; i++) {
        const img = await faceapi.fetchImage(`./labeled_images/${label}/${i}.jpg`)
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
        descriptions.push(detections.descriptor)
      }

      return new faceapi.LabeledFaceDescriptors(label, descriptions)
    })
  )
}
}

