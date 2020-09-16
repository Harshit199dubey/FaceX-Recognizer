var dropFileForm = document.getElementById("dropFileForm");
var droppedFiles;
var fileLabelText = document.getElementById("fileLabelText");
function overrideDefault(event) {
    event.preventDefault();
    event.stopPropagation();
}

function fileHover() {
    console.log(dropFileForm.id);
    dropFileForm.classList.add('fileHover');
}
function fileHovereEnd() {
    dropFileForm.classList.remove('fileHover');
}
function addFiles(event) {
    if (event.dataTransfer !== undefined) {
        document.getElementById('fileInput').files = event.dataTransfer.files
    }
    console.log(event.dataTransfer);
    let imgs;
    if (imgs) imgs.remove();
    const button = document.getElementById('show');
    button.style.display = 'inline-block';
    button.style.margin = '5px';
    document.getElementById('fileLabel').style.display = 'none';
    imgs = faceapi.bufferToImage(document.getElementById('fileInput').files[0]);
    imgs.then((v) => {
        v.id = 'temp';
        document.getElementById('searchimg').append(v);

    });
}
