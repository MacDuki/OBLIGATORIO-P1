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
        "contraseñaFuerte1",
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
    this.listaProductos = [
      new Producto(
        "Guantes de boxeo",
        "Este es el producto 1 y su descripción de guantes de boxeo",
        "https://m.media-amazon.com/images/I/51esH1W-asL._AC_UF1000,1000_QL80_.jpg",
        99,
        200,
        false
      ),
      new Producto(
        "Pelota de Fútbol",
        "Pelota de fútbol profesional de alta calidad.",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%D0%A4%D0%9A_%22%D0%9A%D0%BE%D0%BB%D0%BE%D1%81%22_%28%D0%97%D0%B0%D1%87%D0%B5%D0%BF%D0%B8%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0%2C_%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%29_-_%D0%A4%D0%9A_%22%D0%91%D0%B0%D0%BB%D0%BA%D0%B0%D0%BD%D1%8B%22_%28%D0%97%D0%B0%D1%80%D1%8F%2C_%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%29_%2818790931100%29.jpg/800px-thumbnail.jpg",
        35,
        150,
        false
      ),
      new Producto(
        "Raqueta de Tenis",
        "Raqueta de tenis ligera y resistente para jugadores avanzados.",
        "https://t1.uc.ltmcdn.com/es/posts/6/9/5/tipos_de_deportes_con_raqueta_52596_orig.jpg",
        120,
        75
      ),
      new Producto(
        "Bicicleta de Montaña",
        "Bicicleta de montaña con suspensión total y frenos de disco.",
        "https://chedrauimx.vtexassets.com/arquivos/ids/30669159-800-auto?v=638518189250000000&width=800&height=auto&aspect=true",
        450,
        30
      ),
      new Producto(
        "Guantes de mama",
        "Guantes de boxeo de cuero con relleno extra para mayor protección.",
        "https://m.media-amazon.com/images/I/71gGKDXdoPL._AC_UF1000,1000_QL80_.jpg",
        85,
        200,
        true,
        true
      ),
      new Producto(
        "Zapatillas para Correr",
        "Zapatillas ligeras y cómodas diseñadas para maratones.",
        "https://www.hola.com/us/images/0275-1520a8373d35-1d24cebc0cf6-1000/horizontal-1200/balenciaga-zapatillas.jpg",
        60,
        100
      ),
      new Producto(
        "Pesas Ajustables",
        "Juego de pesas ajustables con incrementos de 2.5 kg.",
        "https://m.media-amazon.com/images/I/71CxDTwx03L._AC_UF894,1000_QL80_.jpg",
        150,
        50
      ),
      new Producto(
        "Casco de Ciclismo",
        "Casco de ciclismo aerodinámico con ventilación mejorada.",
        "https://images.ecestaticos.com/oRpsnZZrRBfcZAzDhIseaACvYFk=/1x151:999x659/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbd5%2Fa89%2Fc26%2Fbd5a89c26e32422bc1677edcdf1579e6.jpg",
        45,
        120
      ),
      new Producto(
        "Traje de Neopreno",
        "Traje de neopreno de 3mm ideal para deportes acuáticos.",
        "https://contents.mediadecathlon.com/p1554251/k$9dd3c3eebf92602ef08663c0bd20cd6a/neopreno-surf-hombre-agua-fria-4slash3mm-negro.jpg?format=auto&quality=40&f=800x800",
        180,
        25
      ),
      new Producto(
        "Saco de Dormir",
        "Saco de dormir ultraligero para acampada y senderismo.",
        "https://http2.mlstatic.com/D_NQ_NP_889663-MLU73954308613_012024-O.webp",
        70,
        80
      ),
    ];
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
  constructor(nombre, apellido, usuario, pass, tarjeta, cvc, saldo = 3000) {
    this.id = contadorCompradores;
    this.nombre = nombre;
    this.apellido = apellido;
    this.usuario = usuario.toLowerCase();
    this.pass = pass;
    this.tarjeta = tarjeta;
    this.cvc = cvc;
    this.saldo = saldo;
    contadorCompradores++;
  }
}

class Producto {
  static ultimoId = 0;
  constructor(
    nombre,
    descripcion,
    urlImagen,
    precio,
    stock,
    isAvailable = true,
    isSale = false,
    rating = getRandomNumber()
  ) {
    this.isAvailable = isAvailable;
    (this.id = `PROD_ID_${++Producto.ultimoId}`),
      (this.rating = rating),
      (this.nombre = nombre),
      (this.descripcion = descripcion),
      (this.urlImagen = urlImagen),
      (this.precio = precio),
      (this.stock = stock),
      (this.isSale = isSale);
  }
}

class compra {
  constructor({ usuario, idProducto, precio, howMany, status = "pendiente" }) {
    this.usuario = usuario;
    this.idProducto = idProducto;
    this.precio = precio;
    this.howMany = Number(howMany);
    this.status = status;
  }
}

//function handle rating
function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function handleRating(rating) {
  switch (rating) {
    case 1:
      return "⭐ (1/5)";
    case 2:
      return "⭐⭐ (2/5)";
    case 3:
      return "⭐⭐⭐ (3/5)";
    case 4:
      return "⭐⭐⭐⭐ (4/5)";
    case 5:
      return "⭐⭐⭐⭐⭐ (5/5)";
    default:
      return "⭐⭐⭐⭐⭐⭐(6/5)";
  }
}

const sistema = new Sistema();
inicio();

function inicio() {
  ocultarTodo();
  document.querySelector("#pantallaLogin").style.display = "block";

  document.querySelector("#btnLogin").addEventListener("click", () => {
    hacerLogin();
    const userSesionIniciada = sistema.listaCompradores.find(
      (comprador) => comprador.usuario === `${userLoged}`
    );
    showDataUser(userSesionIniciada);
  });

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
  document.querySelector(".compraDeProductosSection").style.display = "none";
  document
    .querySelector(".productoDetailsSection")
    .classList.remove("visibleEffect");

  document.querySelector(".productosEnOferta").style.display = "none";
}

let userLoged = "";
function hacerLogin() {
  // capturar los datos
  let usuario = document.querySelector("#txtLoginUsuario").value.toLowerCase();
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
        document.querySelector(".compraDeProductosSection").style.display =
          "block";
        handleSectionProducts();
        document
          .querySelector(".buttonSectionChange")
          .addEventListener("click", handleSectionProducts);
        userLoged = usuario;
      }
    }
  }
}

function mostrarPantallaRegistro() {
  ocultarTodo();
  document.querySelector("#pantallaRegistro").style.display = "block";
}

function registrarse() {
  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;
  let usuario = document.getElementById("txtUsuario").value.toLowerCase();
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

  const formatoPass = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/;
  //   const formatoTarjeta = /^(?:[0-9]{4}-){3}[0-9]{4}$/;
  const formatoCvc = /^[0-9]{3}$/;

  if (
    sistema.esUsuarioUnico(usuario) &&
    formatoPass.test(pass) &&
    // formatoTarjeta.test(tarjeta) &&
    formatoCvc.test(cvc)
  ) {
    sistema.agregarComprador(nuevoComprador);
    ocultarTodo();
    document.querySelector("#pantallaLogin").style.display = "block";
    alert("registrado correctamente");
  } else if (!sistema.esUsuarioUnico(usuario)) {
    alert("usuario ya registrado, debe usar otro username");
  } else if (!formatoPass.test(pass)) {
    alert(
      "contraseña debe tener al menos 5 caracteres y poseer al menos una letra mayúscula, una minúscula y un número"
    );
    //   } else if (!formatoTarjeta.test(tarjeta)) {
    //     alert("tarjeta invalida");
  } else if (!formatoCvc.test(cvc)) {
    alert("cvc invalida");
  }
}

//regresar function
document.querySelector("#btnVolver").addEventListener("click", () => {
  ocultarTodo();
  document.querySelector("#pantallaLogin").style.display = "block";
  document.querySelector("#txtLoginUsuario").value = "";
  document.querySelector("#txtPass").value = "";
});

// Logout function
document.querySelector("#deslogearseButton").addEventListener("click", () => {
  ocultarTodo();
  document.querySelector("#pantallaLogin").style.display = "block";
  document.querySelector("#txtLoginUsuario").value = "";
  document.querySelector("#txtPass").value = "";
});

//PRODUCTOS DISPONIBLES SECCIÓN
document.addEventListener("DOMContentLoaded", renderizarProductosDisponibles);

function renderizarProductosDisponibles() {
  const productosContainer = document.querySelector(".productosContainer");
  productosContainer.innerHTML = "";

  sistema.listaProductos.forEach((producto) => {
    if (producto.stock > 0 && producto.isAvailable && !producto.isSale) {
      const productoHTML = `
      <div class="producto">
        <div class='img-container'>
          <img src="${producto.urlImagen}" alt="${producto.nombre}">
          <div class="parrafoContainerProducto"> <p>$${
            producto.precio
          }</p></div>
         
        </div>
        <div class="producto-info">
          <h3>${producto.nombre}</h3>
          <span class="ratingProducto">${handleRating(producto.rating)}</span>
        </div>


        <button  
        type="button"
        value="Ver producto"
        class="btnComprarPruducto btn-shine "
        data-idProducto="${producto.id}" >
        <span>Ver Producto</span>
    </button>

   
    `;
      productosContainer.innerHTML += productoHTML;
    }
  });

  const botonesComprar = document.querySelectorAll(".btnComprarPruducto");
  botonesComprar.forEach((boton) => {
    boton.addEventListener("click", () => {
      document.querySelector(".compraDeProductosSection").style.display =
        "none";

      showProductDetails(boton.dataset.idproducto);
    });
  });
}

function showProductDetails(idProducto) {
  const productosDetailsSection = document.querySelector(
    ".productoDetailsSection"
  );
  productosDetailsSection.classList.add("visibleEffect");

  const selectedProduct = sistema.listaProductos.find(
    (producto) => producto.id === idProducto
  );
  if (!selectedProduct) {
    console.error(`Producto con id ${idProducto} no encontrado`);
    return;
  }

  const productDetails = `
  <div class="productoDetailsContainer">
    <div class="exitButtonDetailsContainer">
      <button class="exitButtonDetails">
      <span class="X"></span>
      <span class="Y"></span>
      <div class="close">Close</div>
      </button>
    </div>
    <h2 class="titleProductoDetails">${selectedProduct.nombre}</h2>
    <div class="productoDetailsContainerImg">
      <img src="${selectedProduct.urlImagen}" alt="imagenRandome" />
    </div>
    <div class='spansContainerProductoDetails'>
      <span>${selectedProduct.descripcion}</span>    
      <div class="priceAndStockContainer">
        <span class="priceProductoDetails">$ ${selectedProduct.precio}</span>
        <span class="stockProductoDetails">Stock: ${
          selectedProduct.stock
        }</span>
      </div>
      <span class="ratingProductoDetails">${handleRating(
        selectedProduct.rating
      )}</span>
    </div>
    <div class="productoDetailsControlsContainer">
      <label>Cuantas unidades?<input type="number" min="1" id="btnSelectStockBuyer" placeholder="1" value="selectStock" /></label>
      <button class="CartBtn">
  <span class="IconContainer"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  </span>
  <p class="text">Add to Cart</p>
</button>
    </div>
  </div>
  `;

  productosDetailsSection.innerHTML = productDetails;

  document
    .querySelector(".productoDetailsContainer")
    .classList.add("visibleEffect");

  document.querySelector(".exitButtonDetails").addEventListener("click", () => {
    document.querySelector(
      ` ${isInSale ? ".compraDeProductosSection" : ".productosEnOferta"} `
    ).style.display = "block";
    productosDetailsSection.classList.remove("visibleEffect");
    document
      .querySelector(".productoDetailsContainer")
      .classList.remove("visibleEffect");
  });

  //Add cart function

  document.querySelectorAll(".CartBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      let selectedStock = Number(
        document.querySelector("#btnSelectStockBuyer").value
      );

      sistema.listaCompras.push(
        new compra({
          usuario: userLoged,
          idProducto: selectedProduct.id,
          precio: selectedProduct.precio,
          howMany:
            selectedStock == 0 || selectedStock === undefined
              ? (selectedStock = 1)
              : selectedStock,
        })
      );
      alert(`${sistema.listaCompras.length} compras agregadas`);
    });
  });
}

///Function add product to cart

//Function loged user data
function showDataUser(userLoged) {
  document.querySelector(
    "#spanSaldo"
  ).innerHTML = `Hola ${userLoged.nombre}, su saldo es de:$${userLoged.saldo}`;
}

let isInSale = false;

function productosEnOferta() {
  const sectionProductosOferta = document.querySelector(".productosEnOferta");
  sectionProductosOferta.innerHTML = "";

  sistema.listaProductos.forEach((producto) => {
    if (producto.stock > 0 && producto.isAvailable && producto.isSale) {
      const productoHTML = `
      <h2 style="">Productos en oferta</h2>
      <div class="producto">
        <div class='img-container'>
          <img src="${producto.urlImagen}" alt="${producto.nombre}">
          <div class="parrafoContainerProducto"> <p>$${
            producto.precio
          }</p></div>
         
        </div>
        <div class="producto-info">
          <h3>${producto.nombre}</h3>
          <span class="ratingProducto">${handleRating(producto.rating)}</span>
        </div>


        <button  
        type="button"
        value="Ver producto"
        class="btnComprarPruducto btn-shine "
        data-idProducto="${producto.id}" >
        <span>Ver Producto</span>
    </button>

   
    `;
      sectionProductosOferta.innerHTML += productoHTML;
    }

    const botonesComprar = document.querySelectorAll(".btnComprarPruducto");
    botonesComprar.forEach((boton) => {
      boton.addEventListener("click", () => {
        document.querySelector(".productosEnOferta").style.display = "none";

        showProductDetails(boton.dataset.idproducto);
      });
    });
  });
}

function handleSectionProducts() {
  isInSale = !isInSale;
  if (isInSale) {
    document.querySelector(".buttonSectionChange").innerHTML = "Ver ofertas";
    document.querySelector(".productosEnOferta").style.display = "none";
    document.querySelector(".compraDeProductosSection").style.display = "block";
    renderizarProductosDisponibles();
  } else {
    document.querySelector(".buttonSectionChange").innerHTML =
      "Volver a inicio";
    document.querySelector(".productosEnOferta").style.display = "block";
    document.querySelector(".compraDeProductosSection").style.display = "none";
    productosEnOferta();
  }
}
