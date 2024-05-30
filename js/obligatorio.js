let contadorAdministradores = 1
let contadorCompradores = 1


class Sistema {
    constructor() {
        this.listaAdministradores = [
            new Administrador("juan", "juan123"),
            new Administrador("pedro", "pedro123")
        ]
        this.listaCompradores = [
            new Comprador("alberto", "Fernandez", "alberto123", "5555-1456-2858-9999", "124"),
            new Comprador("fran", "Rodriguez", "fran123", "1115-1366-9858-7799", "185")
        ];
        this.listaProductos = [];
        this.listaCompras = [];
    }


    //VAMOS A HACER FUNCIONES GENÉRICAS PARA BUSCAR CUALQUIER OBJETO / POSICIÓN DE OBJETO EN UN ARRAY
    obtenerElemento(arrayElem, prop, valor) {
        let obj = null
        for (let i = 0; i < arrayElem.length; i++) {
            const unElemento = arrayElem[i];
            if (unElemento[prop] === valor) {
                obj = unElemento
                break;
            }
        }
        return obj
    }


}
class Administrador {
    constructor(usuario, pass) {
        this.id = contadorAdministradores
        this.usuario = usuario
        this.pass = pass
        contadorAdministradores++
    }
}


class Comprador {
    constructor(usuario, pass, tarjeta, cvc) {
        this.id = contadorCompradores
        this.usuario = usuario
        this.pass = pass
        this.tarjeta = tarjeta
        contadorCompradores++
    }
}
//poner las otras clases

let sistema = new Sistema()
inicio()

function inicio() {
    ocultarTodo()
    document.querySelector("#pantallaLogin").style.display = "block"
    document.querySelector("#btnLogin").addEventListener("click", hacerLogin);
    document.querySelector("#btnLogin").addEventListener("click", hacerLogin);


}

function ocultarTodo() {
    document.querySelector("#navPrincipal").style.display = "none"
    document.querySelector("#pantallaLogin").style.display = "none"
    document.querySelector("#navPrincipalComprador").style.display = "none"
    document.querySelector("#pantallaRegistro").style.display = "none"
    
}

function hacerLogin() {
    // capturar los datos
    let usuario = document.querySelector("#txtLoginUsuario").value;
    let pass = document.querySelector("#txtPass").value;
    //obtengo un Admin con ese nombre de usuario
    //let adminBuscado=sistema.buscarAdmin(usuario)
    let adminBuscado = sistema.obtenerElemento(sistema.listaAdministradores, "usuario", usuario)
    //si no es null verifico que la contraseña se la correcta

    if (adminBuscado != null) {
        if (adminBuscado.pass === pass) {
            //alert("login ok")
            ocultarTodo()
            document.querySelector("#navPrincipal").style.display = "block"
        } else {

            alert("password incorrecto")
        }
    } else {

        //busco el comprador
        let compradorBuscado = sistema.obtenerElemento(sistema.listaCompradores, "usuario", usuario)
        //hacer la logica del comprador
        if (compradorBuscado !== null) {
            if (compradorBuscado.pass === pass) {
                ocultarTodo()
                document.querySelector("#navPrincipalComprador").style.display = "block"
            }
        }

    }





    //si es la contraseña correcta muestro el menu          


}

