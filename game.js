let array1 = ["blue","green","yellow","red"];
let array2 = [];
let selectedDivOne = false;
let removedValue;
let click =0;
let firstColor = "";
let secondColor = "";
var container = document.getElementById("container");
let first = document.getElementById("firstColor");
for(let index = 0; index<array1.length; index++){
    const element = array1[index];
    //console.log(element)
    firstColor += `<div style="background-color:${element}; height:30px; width:100%; text-align:center; font-size:20px; color:white;">${element}</div>`
    document.getElementById("firstColor").innerHTML = firstColor;
}

function remove(){
    first.firstChild.remove();
}

array1.reverse();
function clickFirstContainer(){
    console.log(click);
    container.style.WebkitAnimation = "";
    if(selectedDivOne == false){
        selectedDivOne = true
    }
}
function clickSecondContainer(){
    container.style.WebkitAnimation = "move 3s";
    if(selectedDivOne == true){
        console.log(array1);
        if(removedValue = array1.pop()){
            click = click + 1;
            var sec = new Array(array1);
            console.log(removedValue);
            setTimeout(() => {
                array2.reverse().push(removedValue);
                selectedDivOne = false;
                startAnimation = false;
                secondColor += `<div style="background-color:${removedValue}; height:30px; width:100%; text-align:center; font-size:20px; color:white;">${removedValue}</div>`
                document.getElementById("secondColor").innerHTML = secondColor;
                console.log(array1);
                remove();
            },1500);

        }
        // removedValue = array1.reverse().pop();
    }
    console.log(array2);

}
