$(document).ready(function(){
let id = 0;

$('form').on('submit',function(e){
    e.preventDefault();
    const tarefaId = $('#tarefasid').val();
    const novaLinha = $(`<li id="${id}">${tarefaId}</li>`)
    $(novaLinha).appendTo('ul');
    $('#tarefasid').val('');
    id++;
})

$("#lista").click((e)=>{
    let linha = e.target.id;
    console.log(linha.val)
    if($(`#${linha}`).hasClass("marcado"))
    {
    $(`#${linha}`).removeClass("marcado");
    $(`#${linha}`).css('text-decoration', "");
    }
    else
    {
    $(`#${linha}`).addClass("marcado");
    $(`#${linha}`).css('text-decoration',"line-through");
    }
}); 
});
