var submitVar = document.querySelector('.yes');
var submitVarNo = document.querySelector('.no')
var my_text = document.querySelector('.text')

function submitYes(){
    alert("Hello you choose yes .")
    my_text.addEventListener('mouseenter', color_yes())
    function color_yes(){
        my_text.style.backgroundColor = "white"
    }
}

function submitNo(){

    alert("Hello you chose No")

    // my_text.addEventListener('mouseenter', function(){
    //     my_text.backgroundColor="yellow"
    // }())

    my_text.addEventListener('mouseenter', color_no())
    function color_no(){
        my_text.style.backgroundColor = "yellow"
    }
}

submitVar.addEventListener('click', submitYes)
submitVarNo.addEventListener('click', submitNo)

// form submittion detail
var submita = document.querySelector(".submit");
var username = document.getElementById('username');
var password = document.getElementById('password');

submita.addEventListener('click', submit_here)
function submit_here(){
    var variable = username.value
    console.log(variable)
}




