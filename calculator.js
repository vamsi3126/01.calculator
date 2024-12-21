answer={
    solution:0,
    clear:0
}

function appendValue(value){
    document.querySelector(".input").value+=value;
    document.querySelector(".input").value             //we will get a string as "234-2"
    
}


function calculateValue(){
    const Value=document.querySelector(".input").value
    const result=eval(Value)                                   // eval - is an inbuilt fuction to solve numbers inside the string
    answer.solution=result
    document.querySelector(".input").value=answer.solution

    if(document.querySelector(".input").value==='undefined'){
        document.querySelector(".input").value=0
    }
    
}


function clearValue(){
    document.querySelector(".input").value=answer.clear
}