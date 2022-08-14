function toggle(){
    window.close();
}

function newVideoLoad(){

    var secondVideoFile = "https://drive.google.com/file/d/1IBPCSap5TehYBIGKJU-9QP2i1eRTn3xh/preview";

    var videoinIframe = document.getElementById('videoID');
    videoinIframe.src = secondVideoFile;
    videoinIframe.load();
    videoinIframe.play();
}
