// eslint-disable-next-line max-len
//  !function(){"use strict";function b(a){return a.split("").reverse().join("")}function c(a,b){return a.substring(0,b.length)===b}function d(a,b){return a.slice(-1*b.length)===b}function e(a,b,c){if((a[b]||a[c])&&a[b]===a[c])throw new Error(b)}function f(a){return"number"==typeof a&&isFinite(a)}function g(a,b){var c=Math.pow(10,b);return(Math.round(a*c)/c).toFixed(b)}function h(a,c,d,e,h,i,j,k,l,m,n,o){var q,r,s,p=o,t="",u="";return i&&(o=i(o)),f(o)?(a!==!1&&0===parseFloat(o.toFixed(a))&&(o=0),0>o&&(q=!0,o=Math.abs(o)),a!==!1&&(o=g(o,a)),o=o.toString(),-1!==o.indexOf(".")?(r=o.split("."),s=r[0],d&&(t=d+r[1])):s=o,c&&(s=b(s).match(/.{1,3}/g),s=b(s.join(b(c)))),q&&k&&(u+=k),e&&(u+=e),q&&l&&(u+=l),u+=s,u+=t,h&&(u+=h),m&&(u=m(u,p)),u):!1}function i(a,b,e,g,h,i,j,k,l,m,n,o){var q,r="";return n&&(o=n(o)),o&&"string"==typeof o?(k&&c(o,k)&&(o=o.replace(k,""),q=!0),g&&c(o,g)&&(o=o.replace(g,"")),l&&c(o,l)&&(o=o.replace(l,""),q=!0),h&&d(o,h)&&(o=o.slice(0,-1*h.length)),b&&(o=o.split(b).join("")),e&&(o=o.replace(e,".")),q&&(r+="-"),r+=o,r=r.replace(/[^0-9\.\-.]/g,""),""===r?!1:(r=Number(r),j&&(r=j(r)),f(r)?r:!1)):!1}function j(b){var c,d,f,g={};for(c=0;c<a.length;c+=1)if(d=a[c],f=b[d],void 0===f)"negative"!==d||g.negativeBefore?"mark"===d&&"."!==g.thousand?g[d]=".":g[d]=!1:g[d]="-";else if("decimals"===d){if(!(f>=0&&8>f))throw new Error(d);g[d]=f}else if("encoder"===d||"decoder"===d||"edit"===d||"undo"===d){if("function"!=typeof f)throw new Error(d);g[d]=f}else{if("string"!=typeof f)throw new Error(d);g[d]=f}return e(g,"mark","thousand"),e(g,"prefix","negative"),e(g,"prefix","negativeBefore"),g}function k(b,c,d){var e,f=[];for(e=0;e<a.length;e+=1)f.push(b[a[e]]);return f.push(d),c.apply("",f)}function l(a){return this instanceof l?void("object"==typeof a&&(a=j(a),this.to=function(b){return k(a,h,b)},this.from=function(b){return k(a,i,b)})):new l(a)}var a=["decimals","thousand","mark","prefix","postfix","encoder","decoder","negativeBefore","negative","edit","undo"];window.wNumb=l}();

// //
// $(function() {

//   // Variables
//   var amountSlider = document.getElementById('amount-slider');
//   var amountInput = document.getElementById('amount-input');

//   // Create Loan amount Slider
//   noUiSlider.create(amountSlider, {
//     start: 30000,
//     step: 500,
//     behaviour: 'snap',
//     connect: 'lower',
//     range: {
//       'min': 7500,
//       'max': 250000,
//     },
//     format: wNumb({
//       mark: '.',
//       decimals: '0',
//       thousand: ',',
//       prefix: '$ ',
//     })
//   });

//   // On Update pass Amount Slider value to Amount Input
//   amountSlider.noUiSlider.on('update', function( values, handle ) {
//     amountInput.value = values[handle];
//     calculate();
//   });

//   // On Change Pass Amount Input value to Amount Slider
//   amountInput.addEventListener('change', function(){
//     amountSlider.noUiSlider.set(this.value);
//   });
// });

// /*

//     Calculator
//     v1
//     Author: Kirk Stanton - http://stantondesign.co/
//     Twitter: @captain_kirkus

// */

// function calculate() {

//     // Number formatting
//     var moneyFormat = wNumb({
//       mark: '.',
//       decimals: '2',
//       thousand: ',',
//       prefix: '$ ',
//     });

//     var percentageFormat = wNumb({
//       mark: '.',
//       decimals: '0',
//       postfix: ' %',
//     });

//     // Store elements in calculator
//     var amountRaw = $('#amount-input').val();
//     var loanAmount = moneyFormat.from( amountRaw );
//     var loanTerm = $('#loan-term option:selected').val() * 12;
//     var rateRaw = $('#loan-rate').val();
//     var loanRate = $('#loan-rate').val() / 1200;
//     var balloonRaw = $('.calculator .loan-residual input').val();
//     var loanBalloon = $('#loan-balloon').val();
//     var loanFrequency = $('.calculator .loan-frequency option:selected').val();
//     var amountBankroll = $('#bankroll-input').val();
//     var bankrollAmount = moneyFormat.from( amountBankroll );
//     $('#bankroll-input').html(bankrollAmount);

//     // Do you want a balloon payment?
//     var balloonQuestion = $('#balloon-question option:selected').val();

//     var intervalOutput = $("#payment-frequency");
//     var balloonDollar = ((loanAmount / 100) * balloonRaw );

//     var excludeBalloon = loanAmount - balloonDollar;
//     var repaymentRaw = (excludeBalloon * loanRate / (1 - (Math.pow(1 / (1 + loanRate), loanTerm)))) / loanFrequency;
//     var repayment = moneyFormat.to( repaymentRaw );

//     $('#loan-repayment').html(repayment);
//     $('#balloon-dollar').val(moneyFormat.to( balloonDollar ));

//     if (loanFrequency == 1) {
//         $(intervalOutput).html("per month");
//     } else if (loanFrequency == 2) {
//         $(intervalOutput).html("per fortnight");
//     } else {
//        $(intervalOutput).html("per week");
//     }

//     if (balloonQuestion == 'yes') {

//       $('#balloon-container').show();

//     } else {

//       $('#balloon-container').hide();
//       $('#balloon-percentage').val('0');

//     }

//     return this;
// }

// $(document).ready(function() {
//     calculate();
// });

// $('.calculator input').keyup(function() {
//     calculate();
// });

// $('#balloon-question').on('change', function() {
//     calculate();
// });

// $('.calculator select').on('change', function() {
//     calculate();
// });

{
  /* <section id="calculator-wrapper" class="maxWrapper calculator">
  
  <div class="mb40" id="loan-amount">

    <div id="amount-slider"></div>
    
  </div> <!-- loan-amount -->
  
  
  <div class="clear mb20"> 
    
    <div class="input-container quarter left loan-amount">
      <label for="amount-input">Stake</label>
      <input type="text" id="amount-input" value="30000" />
    </div> <!-- input-container -->
    
    <div class="input-container quarter left loan-term">
      <label for="loan-term">Odds</label>
      <select type="text" id="loan-term">
        <option value="1">1 Year</option>
        <option value="2">2 Years</option>
        <option value="3">3 Years</option>
        <option value="4">4 Years</option>
        <option selected value="5">5 Years</option>
        <option value="6">6 Years</option>
        <option value="7">7 Years</option>
      <select>
    </div> <!-- input-container -->
        
    <div class="input-container quarter left loan-rate">
      <label for="loan-rate">Odds Type</label>
      <input type="text" id="loan-rate" placeholder="rate" value="4.25" />
    </div> <!-- input-container -->
        
    <div class="input-container quarter left loan-frequency">
      <label for="loan-frequency">Payment Frequency</label>
      <select type="text" id="loan-frequency" class="last">
        <option selected value="4">Weekly</option>
        <option value="2">Fortnightly</option>
        <option value="1">Monthly</option>
      <select>
    </div> <!-- input-container -->
        
    <div class="input-container quarter left bankroll-amount">
      <label for="bankroll-input">Bankroll</label>
      <input type="text" id="bankroll-input" value="30000" />
    </div> <!-- input-container -->
        
  </div> <!-- clear -->
      
  <div class="clear mb20">
    
    <div class="input-container quarter left balloon-question">
        <label for="balloon-question">Parlay?</label>
        <select type="text" id="balloon-question">
          <option id="balloon-no" selected value="no">No</option>
          <option id="balloon-yes" value="yes">Yes</option>
        <select>
    </div> <!-- input-container -->
          
    <div class="input-container quarter left">
        <label for="age-question">First or Second in Parlay?</label>
        <select type="text" id="question">
          <option selected value="new">New</option>
          <option value="1-3 years">1 - 3 Years</option>
          <option value="3-7 years">3 - 7 Years</option>
          <option value="7+ years">7+ Years</option>
        <select>
    </div> <!-- input-container -->
          
    <div id="balloon-container" class="half left">
      
      <div class="input-container half left loan-residual">
        <label for="balloon-percentage">Balloon</label>
        <input type="text" id="balloon-percentage" value="30" />
      </div><!-- input-container -->
      
      <div class="input-container half left">
        <label class="opacity" for="balloon-dollar">Balloon Amount</label>
        <input class="last" type="text" id="balloon-dollar" value="0" disabled />
      </div><!-- input-container -->
      
    </div> <!-- balloon-container -->       
  </div><!-- clear -->
      
 <hr>
 
  <div class="output mb20">
    <div class="title">
      Loan Repayment
    </div>
    <span id="loan-repayment"></span>/ <span id="payment-frequency" ></span>
  </div>
      
  <div class="info"></div>
 
</section> */
}
