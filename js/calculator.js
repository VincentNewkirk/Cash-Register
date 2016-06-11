function calculatorModule(){
  var total = 0;
  var memory = 0;

  function makeHist(operator, number){
    var tempObj = {
      name: operator,
      number: number
    }
    histArray.push(tempObj);
  }


  function _load(x){
     total = x
    return total;
    }

  function _getTotal(){
    return total;
  }

  function _add(x){
    total += x;
    return total;
  }

  function _subtract(x){
      total -= x;
    }

  function _multiply(x){
    total *= x;
   }

  function _divide(x){
    total /= x;
   }

  function _getMemory(){
    return memory;
   }

  function _changeMemory() {
     memory = total;
   }

  function _clearMemory(){
    memory = 0;
   }

  return {
    load:_load,
    getTotal: _getTotal,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    recallMemory: _getMemory,
    saveMemory: _changeMemory,
    clearMemory: _clearMemory,

  };}