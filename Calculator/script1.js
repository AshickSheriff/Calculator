var os=document.getElementById("opscreen");

function calculate(){
    try{
        result = eval(os.value)
        var os1=document.getElementById("opscreen1").innerHTML = "Operators : "+os.value.match(/[+\-*/]/g).toString();
        var os2=document.getElementById("opscreen2").innerHTML = "Operands : "+os.value.match(/[0-9]/g).toString();
        os.value = Math.floor(result);
    }
    catch(err){
        alert("Invalid");
        console.log(os.value);
    }
}

function clr(){
    os.value = "";
}

