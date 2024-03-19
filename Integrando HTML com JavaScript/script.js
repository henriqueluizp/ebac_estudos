
let formSubmit = document.querySelector('form')
let input = document.querySelectorAll('input')
let campA = input[0];
let campB = input[1];


formSubmit.addEventListener('submit' ,function(event){
    event.preventDefault();

    if (campB.value > campA.value ){
        document.querySelector('.sucess').classList.remove('d-none')
        document.querySelector('.error').classList.add('d-none')
    } else {
        document.querySelector('.sucess').classList.add('d-none')
        document.querySelector('.error').classList.remove('d-none')
    }
})

