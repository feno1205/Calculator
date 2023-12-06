function displayData(e){
    result.value+=e
}

function out(){
    result.value=eval(result.value)
}

function Allclear(){
    result.value=""
}

function clearonce(){
    result.value=result.value.slice(0,-1)
}