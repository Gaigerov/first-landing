var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        videoId: 'dTUPnrAZESU',
    });
}

const playButton = document.querySelector('.VideoProjectBlock__button');
const image = document.querySelector('.VideoProjectBlock__Player');

playButton.addEventListener('click', () => {
    image.style.display = 'none';

    player.playVideo();
})
