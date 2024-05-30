let contadorAdministradores = 1;
let contadorCompradores = 1;

class Sistema {
  constructor() {
    this.listaAdministradores = [
      new Administrador("juan", "juan123"),
      new Administrador("pedro", "pedro123"),
    ];
    this.listaCompradores = [
      new Comprador(
        "alberto",
        "Fernandez",
        "alberto123",
        "5555-1456-2858-9999",
        "124"
      ),
      new Comprador(
        "fran",
        "Rodriguez",
        "fran123",
        "contraseñaFuerte1",
        "1115-1366-9858-7799",
        "185"
      ),
    ];
    this.listaProductos = [];
    this.listaCompras = [];
  }

  agregarComprador(comprador) {
    this.listaCompradores.push(comprador);
  }

  esUsuarioUnico(usuario) {
    for (let comprador of this.listaCompradores) {
      if (comprador.usuario === usuario) {
        return false;
      }
    }
    return true;
  }

  //VAMOS A HACER FUNCIONES GENÉRICAS PARA BUSCAR CUALQUIER OBJETO / POSICIÓN DE OBJETO EN UN ARRAY
  obtenerElemento(arrayElem, prop, valor) {
    let obj = null;
    for (let i = 0; i < arrayElem.length; i++) {
      const unElemento = arrayElem[i];
      if (unElemento[prop] === valor) {
        obj = unElemento;
        break;
      }
    }
    return obj;
  }
}
class Administrador {
  constructor(usuario, pass) {
    this.id = contadorAdministradores;
    this.usuario = usuario;
    this.pass = pass;
    contadorAdministradores++;
  }
}

class Comprador {
  constructor(nombre, apellido, usuario, pass, tarjeta, cvc) {
    this.id = contadorCompradores;
    this.nombre = nombre;
    this.apellido = apellido;
    this.usuario = usuario;
    this.pass = pass;
    this.tarjeta = tarjeta;
    this.cvc = cvc;
    contadorCompradores++;
  }
}
//poner las otras clases

const sistema = new Sistema();
inicio();

function inicio() {
  ocultarTodo();
  document.querySelector("#pantallaLogin").style.display = "block";
  document.querySelector("#btnLogin").addEventListener("click", hacerLogin);
  document
    .querySelector("#btnRegistrarComprador")
    .addEventListener("click", mostrarPantallaRegistro);

  document
    .querySelector("#btnRegistrar")
    .addEventListener("click", registrarse);
}

function ocultarTodo() {
  document.querySelector("#navPrincipal").style.display = "none";
  document.querySelector("#pantallaLogin").style.display = "none";
  document.querySelector("#navPrincipalComprador").style.display = "none";
  document.querySelector("#pantallaRegistro").style.display = "none";
}

function hacerLogin() {
  // capturar los datos
  let usuario = document.querySelector("#txtLoginUsuario").value;
  let pass = document.querySelector("#txtPass").value;
  //obtengo un Admin con ese nombre de usuario
  //let adminBuscado=sistema.buscarAdmin(usuario)
  let adminBuscado = sistema.obtenerElemento(
    sistema.listaAdministradores,
    "usuario",
    usuario
  );
  //si no es null verifico que la contraseña se la correcta

  if (adminBuscado != null) {
    if (adminBuscado.pass === pass) {
      //alert("login ok")
      ocultarTodo();
      document.querySelector("#navPrincipal").style.display = "block";
    } else {
      alert("password incorrecto");
    }
  } else {
    //busco el comprador
    let compradorBuscado = sistema.obtenerElemento(
      sistema.listaCompradores,
      "usuario",
      usuario
    );
    //hacer la logica del comprador
    if (compradorBuscado !== null) {
      if (compradorBuscado.pass === pass) {
        ocultarTodo();
        document.querySelector("#navPrincipalComprador").style.display =
          "block";
      }
    }
  }

  //si es la contraseña correcta muestro el menu
}
function mostrarPantallaRegistro() {
  ocultarTodo();
  document.querySelector("#pantallaRegistro").style.display = "block";
}

function registrarse() {
  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;
  let usuario = document.getElementById("txtUsuario").value;
  let pass = document.getElementById("txtContraseña").value;
  let tarjeta = Number(document.getElementById("txtTarjeta").value);
  let cvc = Number(document.getElementById("txtCvc").value);
  const nuevoComprador = new Comprador(
    nombre,
    apellido,
    usuario,
    pass,
    tarjeta,
    cvc
  );
  if (sistema.esUsuarioUnico(usuario)) {
    sistema.agregarComprador(nuevoComprador);
    ocultarTodo();
    document.querySelector("#pantallaLogin").style.display = "block";
    alert("registrado correctamente");
  } else {
    alert("usuario ya registrado, debe usar otro username");
  }
}

// Logout function
document.querySelector("#deslogearseButton").addEventListener("click", () => {
  ocultarTodo();
  document.querySelector("#pantallaLogin").style.display = "block";
  document.querySelector("#txtLoginUsuario").value = "";
  document.querySelector("#txtPass").value = "";
});
