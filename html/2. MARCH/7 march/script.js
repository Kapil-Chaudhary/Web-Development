console.log('file running')
let submitVar = document.querySelector('.submit');

// console.log(submitVar)
submitVar.style.hight = "50px"

function submitFunc(){
    alert("you clicked the button")
}

submitVar.addEventListener('click', submitFunc)

function printfunc(){
    submitVar.style.background="yellow"
}

function backfunc(){
    submitVar.style.background="pink"
}

submitVar.addEventListener('mouseenter', printfunc)
submitVar.addEventListener('mouseleave', backfunc )
    
