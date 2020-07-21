"use strict";
/*
//Sesion 1 y 2
(function(){

    function saludar( nombre: string ) {
        console.table( 'Hola ' + nombre ); // Hola Logan
    }
    
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    
    saludar( wolverine.nombre );
    

})();
*/
/*
// Sesion 3
(function(){
    
    //Constantes en mayusculas
    const NOMBRE= 'Carlos Gomez';
    console.log(NOMBRE);

    var mensaje= 'hola';
    
    if (true){
        // Let en solo el scope
        let mensaje= 'mi casa';
        console.log(mensaje);
    }

    console.log(mensaje);

})();
*/
/*
// Sesion 4
(function(){

    let mensaje: string='hola';
    let numero: number= 123;
    let fecha: Date= new Date();

    numero=466;
    
    let spiderman= {
        nombre: 'Peter',
        edad: 30
    }
})();
*/
/*
//Sesion 5
(function(){
    
    const NOMBRE= 'Carlos';
    const APELLIDO= 'Gomez';
    const EDAD= 22;

    function getEdad(){
        return EDAD;
    }

    const SALIDA= `${NOMBRE} ${APELLIDO} ${getEdad()}`;

    console.log(SALIDA);
})();
*/
/*
// Sesion 6
(function(){
    
    // Parametro obligatorio, opcional y con valor predefinido
    function activar( quien:string, momento?:string, objeto: string ='batiseñal'){
        if (momento){
            console.log(`${quien} activo ${objeto} en la ${momento}`);
        }
        else{
            console.log(`${quien} avctivo ${objeto}`);
        }

    }

    activar('Carlos');

})();
*/
/*
// Sesion 7
(function(){

    const miFuncion= function(a:string){
        return a.toUpperCase();
    }
    
    // Funcion de flecha que retorna solo a
    const miFuncionF = (a:string) => a.toUpperCase();

    console.log(miFuncion('Carlos'));
    console.log(miFuncionF('Julian'));

    const suma= function(a:number,b:number){
        return a+b;
    }

    // Funcion de flecha de la suma
    const sumaF= (a:number,b:number) => a+b;

    console.log(suma(10,20));
    console.log(sumaF(10.,11));

    const hulk={
        nombre: 'bruce',
        smash(){

            setTimeout(() =>{
                
                console.log(this.nombre + " SMASHH!!");
            },1000);
        }
    };

    hulk.smash();

})();
*/
/*
// Sesion 8
(() =>{

    const avenger ={
        nombre:'Steve',
        clave:'Capitan America',
        poder:'fuerza'
    }
    

    const {nombre, clave,poder}= avenger;
    
    const extraer = ({nombre, clave}: any) =>{
        console.log(nombre , clave);
    }
    
    extraer(avenger);

})();
*/
/*
//Sesion 9
(()=>{

    // Hacer promesas con ES6
    const prom= new Promise( (resolve, reject) => {
        
        setTimeout( () => {
            reject('Se termino el timeout');
        }, 1000);

    });

    prom
        .then( mensaje => console.log(mensaje))
        .catch(err => console.warn(err));

})();
*/
/*
//Sesion 10

(() => {
    
    // ": Promise<number>" Asignar el tipo de retorno
    const retirarDinero = ( monto: number): Promise<number> => {
        let dineroActual= 1000;
        return new Promise ((resolve, reject) => {
            if (monto > dineroActual){
                reject('No hay suficientes fondos');
            }
            else{
                dineroActual -= monto;
                resolve(dineroActual);
            }
        });
    }
    
    retirarDinero(500)
    .then(monto => console.log(`Me quedan ${monto}`))
    .catch(err => console.warn(err));
})();
*/
/*
// Sesion 11
(() => {
    
    //Interface
    interface XMen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const wolverine:XMen ={
        nombre: 'wolverine',
        edad: 60,
        poder: 'garras'
    }

})();
*/
/*
//Sesion 12, 13
(() => {
    
    class Avenger {
        nombre: string;
        equipo: string;
        nombreReal: string;
        peleasGanadas: number;
        puedePelear: boolean;

        constructor(nombre:string, equipo: string, nombreReal:string, peleasGanadas:number, puedePelear: boolean){
            this.nombre=nombre;
            this.equipo=equipo;
            this.nombreReal=nombreReal;
            this.peleasGanadas=peleasGanadas;
            this.puedePelear=puedePelear;
        }
    }

    const antMan: Avenger = new Avenger('antMan','Capitan America', 'Scott', 2,true);

    class Avenger2 {
        
        // antes de ":" se coloca "?" para que el atributo sea opcional como parametro
        constructor(public nombre:string,
                    public equipo: string,
                    public nombreReal:string,
                    public peleasGanadas:number,
                    public puedePelear: boolean){}
    }

    const antMan2: Avenger2 = new Avenger2('antMan','Capitan America', 'Scott', 2,true);
})();
*/
// Sesion 14
(() => {
    const sumar = (a, b) => {
        return a + b;
    };
    const nombre = () => 'Hola Mundo';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Fernando');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase()));
})();
