document.getElementById('reload').addEventListener('click', AutoRefresh);
document.getElementById('reload').addEventListener('click', diactivate);


document.getElementById('faceDp').addEventListener("click", facestudying);
document.getElementById('faceDp').addEventListener("click", diactivate);



document.getElementById('reload1').addEventListener('click', faceName);
document.getElementById('reload1').addEventListener('click', AutoRefresh);


document.getElementById('reload2').addEventListener('click', AutoRefresh);
document.getElementById('reload2').addEventListener('click', diactivate);

document.getElementById('reload3').addEventListener('click', AutoRefresh);
document.getElementById('reload3').addEventListener('click', diactivate);

// document.getElementById('fileInput').addEventListener('change', labelD);
// function labelD(){
//     let imgs;
//     if (imgs) imgs.remove();
//     const button = document.getElementById('show');
//     button.style.display = 'inline-block';
//     button.style.margin ='5px';
//     document.getElementById('fileLabel').style.display='none';
//     imgs = faceapi.bufferToImage(document.getElementById('fileInput').files[0]);
//     imgs.then((v)=>{
//         v.id='temp';
//         document.getElementById('searchimg').append(v);
//     });
    
   
// }