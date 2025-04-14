function playVideo() {
    document.querySelector(".video-preview").style.display = "none";
    document.getElementById("videoContainer").style.display = "block";
    document.getElementById("videoReal").play();
}