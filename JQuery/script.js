$(document).ready(function() {

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('form button[type=reset]').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e){
        e.preventDefault()

        let atividadeName = $('input[type=text]').val()
        let newItem = $(`<li></li>`);
        $(`<p>${atividadeName}</p>`).appendTo(newItem)
        $(newItem).appendTo('ul');

        $('li p').click(function(){
            $(this).css('text-decoration', 'line-through');
        });
    })
})
