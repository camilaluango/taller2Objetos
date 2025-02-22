class persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    mostrarDatos(){
    return `Su nombre es ${this.nombre}, tiene ${this.edad} años`
}
    mayorEdad(){
        if (this.edad>18){
            return `y es mayor de edad`
        }else 
        return `y es menor de edad`
    }
}

let lisa =new persona ("lisa", 20);
console.log(lisa.mostrarDatos(),lisa.mayorEdad())