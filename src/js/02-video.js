import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
    if (localStorage.getItem('videoplayer-current-time')) {
        player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
    }
});
const onPlayerTimeupdate = function(evt) {
    localStorage.setItem('videoplayer-current-time', evt.seconds);
}
    
player.on('timeupdate', throttle(onPlayerTimeupdate,1000));