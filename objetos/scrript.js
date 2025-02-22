const perfumeria = {
    perfumes : [{nombre:"sauvage", precio:800, cantidad:24},
        {nombre:"miss dior", precio:80, cantidad:12},
        {nombre:"yara", precio:600, cantidad:24},
        {nombre:"360", precio:400, cantidad:15},
        {nombre:"ultra male", precio:1000, cantidad:28}
    ],
    agregarProducto(nombre,precio,cantidad){
        const nuevoPerfume = {nombre,precio,cantidad};
        this.perfumes.push(nuevoPerfume);//push se usa para agregar el producto al array
    },
    actCantProductos(nombre,nuevaCantidad){
        const producto = this.perfumes.find(perfumes => perfumes.nombre === nombre);// el find se usa para buscar el nombre del perfume en el array y poder modificar el parametro cantidad
        if (producto) {
            producto.cantidad = nuevaCantidad;
        } else {
            console.log("Producto no encontrado");
        }
    },
    mostrarProductos() {
        this.perfumes.forEach(perfume => {
            console.log(`El perfume ${perfume.nombre}, tiene un precio de ${perfume.precio} dolares y hay ${perfume.cantidad} unidades disponibles`);
        });
    }
};
perfumeria.agregarProducto("lacoste roja",30,50);
perfumeria.actCantProductos("sauvage", 30);
perfumeria.mostrarProductos();


console.log(perfumeria)

