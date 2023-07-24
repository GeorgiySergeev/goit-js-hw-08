import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player'); 
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = "videoplayer-current-time"
player.on(
  'timeupdate',
  throttle(a => {
    localStorage.setItem(LOCAL_STORAGE_KEY, a.seconds);
  }, 1000)
);

let currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
