import {observable} from 'mobservable';

const timerState = observable({
  timer: 0
});

timerState.resetTimer = function() {
  timerState.timer = 0;
};

setInterval(() => {
  timerState.timer += 1;
}, 1000);

export default timerState;
