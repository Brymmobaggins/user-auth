const form = document.querySelector('form')
const input = document.querySelector('input')
const para = document.querySelector('p')

// prevent form submission
form.addEventListener('submit', function(e){
    e.preventDefault()
    checkValue()
})

function checkValue(){
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value

    if(!name){
        para.classList.add("error")
        // alert("jjj")
    }
}