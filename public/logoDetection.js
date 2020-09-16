var logoFileForm = document.getElementById("logoFileForm");
var droppedFiles;
var logoLabelText = document.getElementById("logoLabelText");
// function overruleDefault(event) {
//     event.preventDefault();
//     event.stopPropagation();
// }

function logoHover() {
    console.log(logoFileForm.id);
    logoFileForm.classList.add('logoHover');
}
function logoHoverEnd() {
    logoFileForm.classList.remove('logoHover');
}
function logoaddFiles(event) {
    if (event.dataTransfer !== undefined) {
        document.getElementById('logoInput').files = event.dataTransfer.files
        
    }
    console.log(event.dataTransfer);
    let imgs;
    if (imgs) imgs.remove();
    // const btnDownload = document.getElementById('pdf-download');
    const button = document.getElementById('hide-me');
    button.style.display = 'inline-block';
    // btnDownload.style.display = 'none';
    button.style.margin = '5px';
    document.getElementById('logofileLabel').style.display = 'none';
    imgs = faceapi.bufferToImage(document.getElementById('logoInput').files[0]);
    imgs.then((v) => {
        v.id = 'temp';
        document.getElementById('logoImg').append(v);

    });
}
