function display(num){
    result.value+=num
}

function equal(){
    result.value=eval(result.value)
}

function clearResult(){
    result.value = "";
}

function del(){
result.value=result.value.slice(0,-1)
}