$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown(200);
    })  

    $('#botao-cancelar').click(function(){
        $('form').slideUp(200);
    })

    $('form').on("submit", function(e){
        e.preventDefault();
        const idImgNova = $('#id-img-nova').val();
        const novoItem =  $('<li style="display: none"></li>');
        $(`<img src="${idImgNova}">`).appendTo(novoItem);
        $(`<div class="overlay-img-link">
            <a href="${idImgNova}" target="_blank" title="ver imagem em tamanho real">
            ver imagem em tamanho real
            </a>
        </div>
        
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#id-img-nova').val('');
    })
    
})