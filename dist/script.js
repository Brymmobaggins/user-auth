const form = document.querySelector('form')
const input = document.querySelector('input')


form.addEventListener("submit" ,function(e){
    e.preventDefault();
    checkValue()
})

function checkValue(){
    let name=document.getElementById("name").value;
    let email = document.getElementById("email").value

    if(!name){
        // alert("Please enter your Name");
        input.classList.add("invalid")
    }
}
