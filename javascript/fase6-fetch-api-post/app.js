//console.log('hola');

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault(); //evita que el post se vea en la URL
    
    var data = new FormData(formulario);

    fetch('post.php',{
        method: 'POST',
        body: data  
    })
    .then( res => res.json())
    .then( datos => {
        //console.log(data);
        if(datos == 'error'){
            respuesta.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Llena todos los campos
            </div>
            `
        }else{
            respuesta.innerHTML = `
            <div class="alert alert-primary" role="alert">
                <p> Usuario: ${data.get('InputUser')} </p>
                <p> Contraseña: ${data.get('InputPassword')} </p>
            </div>
            `
        }
    })
    
});