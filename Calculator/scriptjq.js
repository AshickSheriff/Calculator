function calculate() {
    var op = $("#opscreen").val(); 
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
  
      $("#result").html("Operators: " + uniqueOperators + "<br>" + "Operands: " + operands); 
    } catch (error) {
      $("#result").html("Invalid expression"); 
    }
    return false;
  }
  