function calculate(){

    var op= document.getElementById("opscreen").value;
    try {
      var result = eval(op);

      var operators = [];
      var operands = [];
      var currentNumber = "";

      for (var i = 0; i < op.length; i++) {
        var char = op.charAt(i);
        if (char === "+" || char === "-" || char === "*" || char === "/") {
          operators.push(char);

          if (currentNumber !== "") {
            operands.push(currentNumber);
            currentNumber = "";
          }
        } else if (!isNaN(parseInt(char))) {
          currentNumber += char;
        }
      }

      if (currentNumber !== "") {
        operands.push(currentNumber);
      }

      const uniqueOperators = [...new Set(operators)];

      document.getElementById("result").innerHTML = "Operators : "+ uniqueOperators +"\n"+"Operands : "+ operands;
    } 
    catch(error) 
    {  
      document.getElementById("result").innerHTML = "Invalid expression";
    }
    return false;
}


