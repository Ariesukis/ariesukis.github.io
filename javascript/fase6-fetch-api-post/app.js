//console.log('hola');

var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    var data = new FormData(formulario);
    console.log(data.get('InputUser'));

    
    
    
});