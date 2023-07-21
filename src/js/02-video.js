import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player'); 
const player = new Player(iframe);// создаем функцию прототипом которой есть ф-я Плеер

player.on(
  'timeupdate',
  throttle(a => {
    localStorage.setItem('videoplayer-current-time', a.seconds);
  }, 1000)
);

let currentTime = localStorage.getItem('videoplayer-current-time');

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
