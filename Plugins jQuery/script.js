$(document).ready(function (){
    $('.carousel').slick({
        autoplay : true,
    })

    $('.menu').click(function(){
        $('nav').slideToggle()
    })

    $('#phone').mask('(00) 0000-0000', {
        placeholder: '(__) _____-____'
    });

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
            interesse: {
                required: true,
            },
        },
        messages :{
            nome: 'Por favor insira o seu nome'
        }
    })


    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        let interesseVal = $(this).parent().find('h3').text()

        $('#interesse').val(interesseVal)
        $('html').animate({
                scrollTop: destino.offset().top
        }, 500)  
        
    })
})
