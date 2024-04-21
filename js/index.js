 document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    const passwordField=document.getElementById('user-password');
    const password =passwordField.value;
    if (email==='shahrukh@bap.com'&& password==='sadi'){
        window.location.href='bank.html';
    }
    else{
        alert('toke ami tejjo sontan ghosona korlam toi password vole gechos')
    }
 })