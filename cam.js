const video=document.querySelector(".video")
var canva = document.getElementById('myCanvas');
const strip=document.querySelector(".strip")
var context = canva.getContext('2d');

function getvid(){
    navigator.mediaDevices.getUserMedia({video:true,audio:false})
    .then(localMediaStream=>{
        video.src=window.URL.createObjectURL(localMediaStream)
        video.play()
    }).catch(error=>{
        console.log(error)
    })
}
getvid()

