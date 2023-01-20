let resultScreen = document.getElementById("result-screen");

function display(number){
    resultScreen.value += number;
}

function allClear(){
    resultScreen.value = "";
}

function del(){
    resultScreen.value = resultScreen.value.slice(0,-1);
}

function calc(){
    try{
        resultScreen.value = eval(resultScreen.value);
    }
    catch(err){
        resultScreen.value = "";
        alert("Invalid operation");
    }
}