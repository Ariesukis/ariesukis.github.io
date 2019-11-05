//console.log('hola');

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault(); //evita que el post se vea en la URL
    
    var data = new FormData(formulario);

    console.log(data.get('InputUser'));

    fetch('http://127.0.0.1:5500/javascript/fase6-fetch-api-post/post.php',{
        method: 'POST',
        body: data  
    })
    .then( res => res.json())
    .then( datos => {
        console.log(datos);
        if(data === 'error'){
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Llena todos los campos
            </div>
            `
        }else{
            respuesta.innerHTML = `
            <div class="alert alert-primary" role="alert">
                ${data}
            </div>
            `
        }
    })
    
});