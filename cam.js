const video=document.querySelector(".video")
var canva = document.getElementById('myCanvas');
const strip=document.querySelector(".strip")
var context = canva.getContext('2d');

function getvid(){
    navigator.mediaDevices.getUserMedia({video:true,audio:false})
    .then((localmedia) => {
        video.src=window.URL && window.URL.createObjectURL(localmedia)
        video.play()
    }).catch((err) => {
          window.alert(err)
    });
}


function canvas(){
    const width=video.videoWidth;
    const height=video.videoHeight;
    canva.height=height
    canva.width=width
    return setInterval(()=>{
        ctx.drawIMage(video,0,0,width,height)
    },16)
}

function striping(){
    snap.currentTime=0
    snap.play()

    const data=canva.toDataURL('image/jpeg')
    let link=document.createElement('a')
    link.href=data
    link.setAttribute('download','handsome')
    link.innerHTML=`img src="${data}" alt="handsome image"/`
    strip.insertBefore(link,strip.firstChild)
}
getvid()
video.addEventListener('canplay',canvas)
