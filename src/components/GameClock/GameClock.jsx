// (function() {
//     var decrementDigit;

//     $(function() {
//       window.digit_one = $('div.digit-one');
//       window.digit_two = $('div.digit-two');
//       window.digit_three = $('div.digit-three');
//       window.digit_four = $('div.digit-four');
//       return window.timer_int = self.setInterval((function() {
//         return decrementDigit(window.digit_four);
//       }), 1000);
//     });

//     decrementDigit = function(e) {
//       if (e.hasClass('num-zero')) {
//         if (e.hasClass('digit-three')) {
//           decrementDigit(window.digit_two);
//           e.removeClass('num-zero').addClass('num-five');
//         }
//         if (e.hasClass('digit-two')) {
//           decrementDigit(window.digit_one);
//           e.removeClass('num-zero').addClass('num-nine');
//         }
//         if (e.hasClass('digit-four')) {
//           decrementDigit(window.digit_three);
//           e.removeClass('num-zero').addClass('num-nine');
//         }
//       } else if (e.hasClass('num-nine')) {
//         e.removeClass('num-nine').addClass('num-eight');
//       } else if (e.hasClass('num-eight')) {
//         e.removeClass('num-eight').addClass('num-seven');
//       } else if (e.hasClass('num-seven')) {
//         e.removeClass('num-seven').addClass('num-six');
//       } else if (e.hasClass('num-six')) {
//         e.removeClass('num-six').addClass('num-five');
//       } else if (e.hasClass('num-five')) {
//         e.removeClass('num-five').addClass('num-four');
//       } else if (e.hasClass('num-four')) {
//         e.removeClass('num-four').addClass('num-three');
//       } else if (e.hasClass('num-three')) {
//         e.removeClass('num-three').addClass('num-two');
//       } else if (e.hasClass('num-two')) {
//         e.removeClass('num-two').addClass('num-one');
//       } else if (e.hasClass('num-one')) {
//         e.removeClass('num-one').addClass('num-zero');
//       } else if (e.hasClass('num-zero')) {
//         e.removeClass('num-zero').addClass('num-nine');
//       }
//       if ($('.digit-two').hasClass('num-zero') && $('.digit-one').hasClass('num-zero')) {
//         return $('.circle-contain').addClass('warning');
//       } else if ($('.circle-contain').hasClass('warning')) {
//         return $('.circle-contain').removeClass('warning');
//       }
//     };

//   }).call(this);

//   <div class="timer-contain">
//   <div id="timer">
//     <div class="digit">
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//     </div>
//     <div class="digit-one num-zero">
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//     </div>
//     <div class="digit-two num-one">
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//     </div>
//     <div class="colon">
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//     </div>
//     <div class="digit-three num-one">
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//     </div>
//     <div class="digit-four num-zero">
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//     </div>
//     <div class="digit">
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//       <div class="circle-contain"></div>
//     </div>
//   </div>
// </div>
