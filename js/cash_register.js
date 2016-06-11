    var display = document.getElementById('regDisplay');
    var calModule = calculatorModule();
    var initial = true;
    var operator;
    // var keyCodes = {
    //   48: '0',
    //   49: '1',
    //   50: '2',
    //   51: '3',
    //   52: '4',
    //   53: '5',
    //   54: '6',
    //   55: '7',
    //   56: '8',
    //   57: '9',
    //   110: '.',
    //   107: '+',
    //   109: '-',
    //   111: '/',
    //   106: '*',
    //   13: '',
    //   187: '',
    //   67: '',
    //   66: '',
    //   68: '',
    //   87: ''
    // };

    [ {id: 'number0', label: 0},
      {id: 'number00', label: '00'},
      {id: 'number1', label: 1},
      {id: 'number2', label: 2},
      {id: 'number3', label: 3},
      {id: 'number4', label: 4},
      {id: 'number5', label: 5},
      {id: 'number6', label: 6},
      {id: 'number7', label: 7},
      {id: 'number8', label: 8},
      {id: 'number9', label: 9}].forEach(function(pair){
      var symbols = document.getElementById(pair.id);
      symbols.innerHTML = pair.label;

      //add event listener to symbol keys
      symbols.addEventListener('click',function(){

        if( initial === true ){
          display.innerHTML += pair.label;

        } else {
          display.innerHTML = pair.label;
          initial = true;
        }
      })
    });

    //plus button and event listener
    var button_add = document.getElementById('add');
    button_add.innerHTML = '+';
    button_add.addEventListener('click', function(){
      calModule.load(parseFloat(display.innerHTML));
      display.innerHTML += '+';
      initial = false;
      operator = 'add';
    })

    //subtract button and event listener
    var button_subtract = document.getElementById('subtract');
    button_subtract.innerHTML = '-';
    button_subtract.addEventListener('click', function(){
      calModule.load(parseFloat(display.innerHTML));
      display.innerHTML += '-';
      operator = 'subtract';
      initial = false;
    })

    //divide button and event listener
    var button_divide = document.getElementById('divide');
    button_divide.innerHTML = '/';
    button_divide.addEventListener('click', function(){
      calModule.load(parseFloat(display.innerHTML));
      display.innerHTML += '/';
      operator = 'divide';
      initial = false;
    })

    //multiply button and event listener
    var button_multiply = document.getElementById('multiply');
    button_multiply.innerHTML = '*';
    button_multiply.addEventListener('click', function(){
      calModule.load(parseFloat(display.innerHTML));
      display.innerHTML += '*';
      operator = 'multiply';
      initial = false;
    })

    //clear button and event listener
    var button_clear = document.getElementById('clear');
    button_clear.innerHTML = 'Clear';
    button_clear.addEventListener('click', function(){
      display.innerHTML = '';
    });

    //equals button and event listener
    var equals = document.getElementById('calculate');
    equals.innerHTML = '=';
    equals.addEventListener('click',function(){

      if( operator === 'add' ){
        calModule.add(parseFloat(display.innerHTML))
        display.innerHTML = calModule.getTotal();
        initial = false;
        operator = '';

      } else if ( operator === 'subtract' ){
          calModule.subtract(parseFloat(display.innerHTML));
          display.innerHTML = calModule.getTotal();
          initial = false;
          operator = '';

      } else if ( operator === 'divide' ){
          calModule.divide(parseFloat(display.innerHTML));
          display.innerHTML = calModule.getTotal();
          initial = false;
          operator = '';

      } else if ( operator === 'multiply'){
          calModule.multiply(parseFloat(display.innerHTML));
          display.innerHTML = calModule.getTotal();
          initial = false;
          operator = '';
      }

      });

    //deposit button and event listener
    var button_deposit = document.getElementById('deposit');
    button_deposit.innerHTML = 'Deposit';
    button_deposit.addEventListener('click', function(){

      if( parseFloat(display.innerHTML) < 0 ){
          display.innerHTML = 'Error';

      } else {
          calModule.add(parseFloat(display.innerHTML));
          calModule.saveMemory();
          initial = false;
          display.innerHTML = 'Deposited';
      }
    })

    //withdraw button and event listener
    var button_withdraw = document.getElementById('withdraw');
    button_withdraw.innerHTML = 'Withdraw';
    button_withdraw.addEventListener('click',function(){
      display.innerHTML = '(' + calModule.getTotal() + ')';
      calModule.clearMemory();
      initial = false;
    })

    //add decimal values and conditional to not allow more than one decimal
    var button_decimal = document.getElementById('decimal');
    button_decimal.innerHTML = '.'
    button_decimal.addEventListener( 'click', function(){

      if( display.innerHTML.search(/\./) === -1 ){
        display.innerHTML += '.';
        }
      })

    //get balance and event listener
    var button_balance = document.getElementById('balance');
    button_balance.innerHTML = 'Balance';
    button_balance.addEventListener('click', function(){
      display.innerHTML = calModule.recallMemory();
      initial = false;
    })



  //   //key press functionality
  //   window.onkeydown = function(e){
  //     if( keyCodes[e.keyCode] === undefined ){
  //       return;
  //       //equals key
  //     } else if( e.keyCode === 187 || e.keyCode === 13 ) {
  //         display.innerHTML = eval(display.innerHTML);
  //       //clear key
  //     } else if( e.keyCode === 67 ){
  //         display.innerHTML = '';
  //       //balance key
  //     } else if( e.keyCode === 66 ){
  //         display.innerHTML = memory;
  //       //deposit key
  //     } else if ( e.keyCode === 68) {
  //         if( parseFloat(display.innerHTML) < 0 ){
  //             display.innerHTML = 'Error';
  //         } else {
  //             memory += parseFloat(display.innerHTML);
  //             display.innerHTML = 'Deposited';
  //         }
  //       //withdraw key
  //     } else if ( e.keyCode === 87 ){
  //         display.innerHTML = memory;
  //         memory = 0;
  //     } else if ( e.keyCode === 110 ) {
  //         if( display.innerHTML.search(/\./) === -1 ){
  //           display.innerHTML += '.';
  //         }
  //     }
  //     else {
  //         display.innerHTML += keyCodes[e.keyCode];
  //     }
  //   }
