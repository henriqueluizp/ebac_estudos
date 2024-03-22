$(document).ready(function (){
    $('#phone').mask('(00) 0000-0000')

    $('#cpf').mask('000-000-000-00')

    $('#cep').mask('00000-000')


    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            rua: {
                required: true,
            },
            cep: {
                required: true,
            },

        },
        messages :{
            nome: 'Por favor insira o seu nome'
        }
    })
})
