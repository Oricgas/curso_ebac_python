$(document).ready(function(){

    $('#telefone').mask('(00) 0000-00000');
    $('#cpf').mask('000.000.000.-00');
    $('#cep').mask('00000-000');
    $('#numero').mask('00000');
    $('form').validate({
    rules: {
        nome: {
            required:true
        },
        email: {
            required:true, 
            email: true
        },
        telefone: {
            required:true,
            rangelength: [10, 11] 
        },
        cpf: {
            required: true,
            minlength: 11
        },
        endereco: {
            required: true,
            minlength: 5
        },
        numero: {
            required: true,
            min: 1
        },
        bairro: {
            required: true
        },
        cep: {
            required: true
        },
        municipio: {
            required: true
        },
        estado: {
            required: true
        },
        complemento: {
            required: false
        },
    },
    messages: {
        nome: 'Por favor, insira o seu nome completo',
        cpf: 'Inserir um CPF válido',
        telefone: 'Insira o telefone com o DDD'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) { 
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }    
    })

})