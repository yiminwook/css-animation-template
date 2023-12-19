// const WORDS = [
//   "Hi i like HTML",
//   "I also like css",
//   "Lorem ipsum dolor sit amet",
//   " consectetur adipiscing elit",
//   "sed do eiusmod tempor incididunt",
// ];

// let words = WORDS.slice();
// let part = "";
// let i = 0;
// let offset = 0;
// let len = words.length;
// let forwards = true;
// let skip_count = 0;
// let skip_delay = 15;
// let speed = 70;

// const wordflick = () => {
//   setInterval(() => {
//     if (forwards) {
//       if (offset >= words[i].length) {
//         ++skip_count;
//         if (skip_count == skip_delay) {
//           forwards = false;
//           skip_count = 0;
//         }
//       }
//     } else {
//       if (offset === 0) {
//         forwards = true;
//         i++;
//         offset = 0;
//         if (i >= len) {
//           i = 0;
//         }
//       }
//     }

//     part = words[i].substring(0, offset);

//     if (skip_count == 0) {
//       if (forwards) {
//         offset++;
//       } else {
//         offset--;
//       }
//     }

//     $(".typing").text(part);
//   }, speed);
// };

// const cardMouseEvent = () => {
//   $(".card").on("mousemove", (e) => {
//     const x = e.offsetX;
//     const y = e.offsetY;
//     const rotateX = (4 / 30) * y - 20;
//     const rotateY = (-1 / 5) * x + 20;

//     //  마우스 위치      카드회전율   꼭지점위치
//     // (   0,   0 )  => ( -20,  20 )  1사분면
//     // ( 220,   0 )  => ( -20, -20 )  2사분면
//     // (   0, 310 )  => (  20,  20 )  3사분면
//     // ( 220, 310 )  => (  20, -20 )  4사분면

//     $(e.currentTarget).css(
//       "transform",
//       `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
//     );
//   });

//   $(".card").on("mouseleave", (e) => {
//     $(e.currentTarget).css("transform", "");
//   });
// };

// $(() => {
//   wordflick();
//   cardMouseEvent();
// });
