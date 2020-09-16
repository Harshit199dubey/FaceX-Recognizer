var imgFileForm = document.getElementById("imgFileForm");
var droppedFiles;
var textLabelText = document.getElementById("textLabelText");
function overruleDefault(event) {
    event.preventDefault();
    event.stopPropagation();
}

function textHover() {
    console.log(imgFileForm.id);
    imgFileForm.classList.add('textHover');
}
function textHoverEnd() {
    imgFileForm.classList.remove('textHover');
}
function textaddFiles(event) {
    if (event.dataTransfer !== undefined) {
        document.getElementById('imgInput').files = event.dataTransfer.files
        
    }
    console.log(event.dataTransfer);
    let imgs;
    if (imgs) imgs.remove();
    const btnDownload = document.getElementById('pdf-download');
    const button = document.getElementById('shown');
    button.style.display = 'inline-block';
    btnDownload.style.display = 'none';
    button.style.margin = '5px';
    document.getElementById('textfileLabel').style.display = 'none';
    imgs = faceapi.bufferToImage(document.getElementById('imgInput').files[0]);
    imgs.then((v) => {
        v.id = 'temp';
        document.getElementById('searching').append(v);

    });
}
