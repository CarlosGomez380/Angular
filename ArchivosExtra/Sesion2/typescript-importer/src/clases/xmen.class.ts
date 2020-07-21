
function imprimirConsola(constructorClase: Function){
    console.log(constructorClase);

}


@imprimirConsola // Permite añadir funcionalidades a la clase
export class XMen {
    constructor(public nombre:string, 
                public clase:string){}

    imprimir(){
        console.log('nombre ' + this.nombre + 'clave '+ this.clase  );
    }
}