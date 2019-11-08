//creando plantilla
class Pelicula { 
    constructor(idPelicula,nombrePelicula){
        //propiedades
        this.id = idPelicula;
        this.nombre = nombrePelicula;
    }

    //metodo
    reproducir(){
        return `Reproduciendo pelicula.. ${this.nombre}`;
    }
}

//hereando de Pelicula
class Serie extends Pelicula{

}

//creando objeto
const peliculaUno = new Pelicula(1,'Harry');

console.log(peliculaUno.reproducir());
