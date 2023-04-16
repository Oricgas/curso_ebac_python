const form=document.getElementById('form-teste');

function validForm(a,b){
    if(b>a){
    return true;
    }else{
    return false;
    }
}

form.addEventListener('submit',function(e){
    let formEValido;
    e.preventDefault();
    const numberA = document.getElementById('campoA');
    const numberB = document.getElementById('campoB');
    const messagesuccess = `Parabéns! O número ${numberB.value} é maior que o número ${numberA.value}.`;
    const wrongmessage = `Tente novamente! O número ${numberB.value} não é maior que o número ${numberA.value}.`;
    const divMessage = document.querySelector('.message');

    formEValido= validForm(numberA.value,numberB.value) 
    if(formEValido){
        
        divMessage.innerHTML = messagesuccess;
        divMessage.style.display='block';
        numberA.value='';
        numberB.value='';
    }else{
        divMessage.innerHTML =wrongmessage;
        divMessage.style.display='block';
        numberA.value='';
        numberB.value='';
    }

})



