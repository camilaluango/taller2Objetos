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

};

