const WORDS = [
  "Hi i like HTML",
  "I also like css",
  "Lorem ipsum dolor sit amet",
  " consectetur adipiscing elit",
  "sed do eiusmod tempor incididunt",
];

let words = WORDS.slice();
let part = "";
let i = 0;
let offset = 0;
let len = words.length;
let forwards = true;
let skip_count = 0;
let skip_delay = 15;
let speed = 70;

const wordflick = () => {
  setInterval(() => {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }

    part = words[i].substring(0, offset);

    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }

    $(".word").text(part);
  }, speed);
};

$(() => {
  wordflick();
});
