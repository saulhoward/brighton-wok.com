var player;
var width, height, trailerDiv;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: height + 20,
        width: width,
        videoId: '-EKR9xHllEA',
        playerVars: {
            modestbranding: 1
        }
    });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    trailerDiv = document.getElementById("ytplayer");
    if (trailerDiv) {
        width = trailerDiv.offsetWidth;
        height = Math.ceil((width/16) * 9);
    }
});
