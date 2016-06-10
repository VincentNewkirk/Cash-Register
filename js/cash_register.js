window.onload = (function(){
    var display = document.getElementById('regDisplay');
    var memory = 0;

    [ {id: 'add', label: '+'}, {id: 'subtract', label: '-'}, {id: 'number0', label: 0}, {id: 'number00', label: '00'}, {id: 'divide', label: '/'}, {id: 'number1', label: 1}, {id: 'number2', label: 2}, {id: 'number3', label: 3}, {id: 'number4', label: 4},{id: 'number5', label: 5}, {id: 'number6', label: 6}, {id: 'number7', label: 7}, {id: 'number8', label: 8}, {id: 'number9', label: 9},{id: 'decimal', label: '.'}, {id: 'multiply', label: '*'}].forEach(function(pair){
      var symbols = document.getElementById(pair.id);
      symbols.innerHTML = pair.label;
      //add event listener to symbol keys
      symbols.addEventListener('click',function(){
        display.innerHTML += pair.label;
      })
    });

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
      display.innerHTML = eval(display.innerHTML);
    })

    //get balance and event listener
    var button_balance = document.getElementById('balance');
    button_balance.innerHTML = 'Balance';
    button_balance.addEventListener('click', function(){
      display.innerHTML = memory;
    })

    //deposit button and event listener
    var button_deposit = document.getElementById('deposit');
    button_deposit.innerHTML = 'Deposit';
    button_deposit.addEventListener('click', function(){
      memory += parseFloat(display.innerHTML);
      display.innerHTML = '';
    })

    //withdraw button and event listener
    var button_withdraw = document.getElementById('withdraw');
    button_withdraw.innerHTML = 'Withdraw';
    button_withdraw.addEventListener('click',function(){
      display.innerHTML = memory;
      memory = '';
    })


  });