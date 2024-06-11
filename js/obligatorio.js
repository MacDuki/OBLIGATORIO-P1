document.addEventListener("DOMContentLoaded", () => {
	renderContentLoginHTML();
	renderNavHTML();
});

const HTMLNAVBAR = document.querySelector(".navBar");
const HTMLSECTION = document.getElementById("SECTION");
let renderSection = "";
let renderNavBar = "";
let userLoged = "";
let isAdmin = false;
let isComprador = false;
let isInSales = false;
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
				100,
				true,
				true
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
		this.listaCompras = [
			new compra({
				usuario: "fran123",
				precio: 100,
				howMany: 1,
				status: "pendiente",
				producto: this.listaProductos[0],
			}),
			new compra({
				usuario: "alberto123",
				precio: 80,
				howMany: 100,
				status: "pendiente",
				producto: this.listaProductos[1],
			}),
			new compra({
				usuario: "alberto123",
				precio: 80,
				howMany: 100,
				status: "pendiente",
				producto: this.listaProductos[8],
			}),
			new compra({
				usuario: "alberto123",
				precio: 80,
				howMany: 100,
				status: "pendiente",
				producto: this.listaProductos[7],
			}),
			new compra({
				usuario: "alberto123",
				precio: 80,
				howMany: 100,
				status: "pendiente",
				producto: this.listaProductos[6],
			}),
			new compra({
				usuario: "alberto123",
				precio: 8,
				howMany: 5,
				status: "cancelada",
				producto: this.listaProductos[2],
			}),
			new compra({
				usuario: "alberto123",
				precio: 800,
				howMany: 10,
				status: "aprobada",
				producto: this.listaProductos[5],
			}),
		];
	}

	esUsuarioUnico(usuario) {
		for (let comprador of this.listaCompradores) {
			if (comprador.usuario === usuario) {
				return false;
			}
		}

		for (let admin of this.listaAdministradores) {
			if (admin.usuario === usuario) {
				return false;
			}
		}
		return true;
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
	static ultimoId = 0;
	constructor({ usuario, precio, howMany, status = "pendiente", producto }) {
		(this.id = `${++compra.ultimoId}`), (this.usuario = usuario);
		this.precio = precio;
		this.howMany = Number(howMany);
		this.status = status;
		this.producto = producto;
	}
}

function addEventListenerSafely(selector, event, handler) {
	const element = document.querySelector(selector);
	if (element) {
		element.addEventListener(event, handler);
	}
}

function renderContentLoginHTML() {
	renderSection = `
	<div>
			<h2>Login</h2>
			<label for="txtLoginUsuario">Usuario</label>
			<input type="text" id="txtLoginUsuario" />
			<label for="txtPass">Contraseña</label>
			<div class="btnsLoginContainer">
				<input type="text" id="txtPass" />
				<input type="button" value="Login" id="btnLogin" />
			</div>
			<input
				type="button"
				value="Registrar comprador"
				id="btnRegistrarComprador" />
				</div>`;

	HTMLSECTION.innerHTML = renderSection;

	addEventListenerSafely(
		"#btnRegistrarComprador",
		"click",
		renderContentRegistrarCompradorHTML
	);

	addEventListenerSafely("#btnLogin", "click", handleLogin);
}

function renderContentRegistrarCompradorHTML() {
	renderSection = `
	<div>
	<h2>Registrar Usuario</h2>
				<form class="formRegistro">
					<div>
						<label for="txtNombre">Nombre</label>
						<input type="text" id="txtNombre" required /> <br />

						<label for="txtApellido">Apellido</label>
						<input type="text" id="txtApellido" required /> <br />

						<label for="txtUsuario">Usuario</label>
						<input type="text" id="txtUsuario" required /> <br />
					</div>
					<div>
						<label for="txtContraseña">Contraseña</label>
						<input type="text" id="txtContraseña" required /> <br />

						<label for="txtTarjeta">Tarjeta</label>
						<input type="text" id="txtTarjeta" required /> <br />

						<label for="txtCvc">Cvc</label>
						<input type="text" id="txtCvc" required /> <br />
					</div>
				</form>
				<div class="buttonsContainerRegistro">
					<input type="button" value="Volver" id="btnVolver" />
					<input type="button" id="btnRegistrar" value="Registrar" />
				</div>
				</div>
				`;
	HTMLSECTION.innerHTML = renderSection;
	addEventListenerSafely("#btnVolver", "click", renderContentLoginHTML);
	addEventListenerSafely("#btnRegistrar", "click", handleRegistrarComprador);
}

function renderContentHomeHTML() {
	renderSection = `
				<div>
				<h2>Home</h2>
				<div class="productosContainer"></div>
				</div>
			`;

	HTMLSECTION.innerHTML = renderSection;

	sistema.listaProductos.forEach((producto) => {
		if (producto.stock > 0 && producto.isAvailable && !producto.isSale) {
			const productoHTML = `
			  <div class="producto">
				<div class='img-container'>
				  <img src="${producto.urlImagen}" alt="${producto.nombre}">
				  <div class="parrafoContainerProducto"> <p>$${producto.precio}</p></div>
				 
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
			document.querySelector(".productosContainer").innerHTML += productoHTML;
		}
	});

	const botonesComprar = document.querySelectorAll(".btnComprarPruducto");
	botonesComprar.forEach((boton) => {
		boton.addEventListener("click", () => {
			renderProductDetailsHTML(boton.dataset.idproducto);
		});
	});
}

function renderProductDetailsHTML(idProducto) {
	const selectedProduct = sistema.listaProductos.find(
		(producto) => producto.id === idProducto
	);
	if (!selectedProduct) {
		console.error(`Producto con id ${idProducto} no encontrado`);
		return;
	}
	renderSection = `
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
			<span class="stockProductoDetails">Stock: ${selectedProduct.stock}</span>
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

	HTMLSECTION.innerHTML = renderSection;

	addEventListenerSafely(
		".exitButtonDetails",
		"click",
		isInSales ? renderSalesProductsHTML : renderContentHomeHTML
	);
	document.querySelectorAll(".CartBtn").forEach((btn) => {
		btn.addEventListener("click", () => {
			handleAddProductToCart(selectedProduct);
		});
	});
}

function renderNavHTML() {
	if (isAdmin) {
		renderNavBar = `
			<img   class="img-logo"
					src="https://www.creativefabrica.com/wp-content/uploads/2022/06/21/Fitness-Sale-Icon-Gym-Shop-Logo-Design-Graphics-32726026-2-580x386.jpg"
					alt="Logo" />
		<ul class="navBarAdmin">
		
			<p>Opciones de administrador</p>
			<li>
				<a class="signOut">Deslogearse</a>
			</li>
		</ul>
			`;
	} else if (isComprador) {
		renderNavBar = `
			<img	class="img-logo"
					src="https://www.creativefabrica.com/wp-content/uploads/2022/06/21/Fitness-Sale-Icon-Gym-Shop-Logo-Design-Graphics-32726026-2-580x386.jpg"
					alt="Logo" />
		<ul class="navBarUser">
			<li>
				<span class="changeSectionToPurchaseHistory">Historial de compra</span>
			</li>
			<li>
				<span class="buttonSectionChange">Ofertas</span>
			</li>
			<li>
				<a class="signOut">Deslogearse</a>
			</li>
			
		</ul>
			`;
	} else {
		renderNavBar = `
		<img	class="img-logo"
				src="https://www.creativefabrica.com/wp-content/uploads/2022/06/21/Fitness-Sale-Icon-Gym-Shop-Logo-Design-Graphics-32726026-2-580x386.jpg"
				alt="Logo" />
	
	
			<span class="">Debe iniciar sesión :) </span>
	
		
		

		`;
	}

	HTMLNAVBAR.innerHTML = renderNavBar;

	addEventListenerSafely(".signOut", "click", handleSignOut);
	addEventListenerSafely(".buttonSectionChange", "click", handleProductsView);
	addEventListenerSafely(
		".changeSectionToPurchaseHistory",
		"click",
		renderHistoryOfPurchasesHTML
	);
}

function renderSalesProductsHTML() {
	renderSection = `
	<div>
	<h2>Ofertas</h2>
	<div class="productosEnOfertaContainer"></div>	
	</div>
	`;
	HTMLSECTION.innerHTML = renderSection;

	sistema.listaProductos.forEach((producto) => {
		if (producto.stock > 0 && producto.isAvailable && producto.isSale) {
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
			document.querySelector(".productosEnOfertaContainer").innerHTML +=
				productoHTML;
		}
	});

	const botonesComprar = document.querySelectorAll(".btnComprarPruducto");
	botonesComprar.forEach((boton) => {
		boton.addEventListener("click", () => {
			renderProductDetailsHTML(boton.dataset.idproducto);
		});
	});
}

function renderHistoryOfPurchasesHTML() {
	renderSection = `
	<div>
	<h2>Historial de compra</h2>
	<div class="historyOfPurchasesContainer"></div>
	</div>		
	`;
	HTMLSECTION.innerHTML = renderSection;
	sistema.listaCompras.forEach((compra) => {
		if (compra.usuario === userLoged) {
			document.querySelector(".historyOfPurchasesContainer").innerHTML += `
	<div class="purchase-container">
		<div class="order-list">
			<div class="order-item">
				<img
				src="${compra.producto.urlImagen}"
				alt="${compra.producto.nombre}"
				width="80"
				height="80"
				class="order-image"
				/>
			<div class="order-info">
					<h3 class="order-title">${compra.producto.nombre}</h3>
						<div class="order-price">$ ${compra.precio * compra.howMany}</div>
					<p class="order-quantity">${compra.howMany} unidades</p>
			</div>
			<div class="order-status">
				<span>Estado:</span>
				<p>${compra.status}</p>
			</div>
	</div>
`;
		}
	});
}

function renderContentAdminListPurchasesHTML() {
	renderSection = `
	<div class="adminHome"> 
	<h2>Lista de compras</h2>
	<div class="purchasesListsContainer">
	<div class="purchasesPendingList"><p class="parrafo-tittle-admin-container">Compras pendientes</p></div>
	<div class="purchasesApprovedList"><p class="parrafo-tittle-admin-container">Compras aprobadas</p></div>
	<div class="purchasesCancelList"><p class="parrafo-tittle-admin-container">Compras canceladas</p></div>
	</div>
	</div>
	`;
	HTMLSECTION.innerHTML = renderSection;
	let purchaseHTML = "";
	const HTMLpurchasesPendingList = document.querySelector(
		".purchasesPendingList"
	);
	const HTMLpurchasesApprovedList = document.querySelector(
		".purchasesApprovedList"
	);
	const HTMLpurchasesCancelList = document.querySelector(
		".purchasesCancelList"
	);

	sistema.listaCompras.forEach((compra) => {
		purchaseHTML = `
		<div class="purchase-container-admin">
			<div class="order-list-admin">
				<div class="order-item-admin">
					<img
						src="${compra.producto.urlImagen}"
						alt="${compra.producto.nombre}"
						width="80"
						height="80"
						class="order-image-admin"
					/>
					<div class="order-info-admin">
						<h3 class="order-title">${compra.producto.nombre}</h3>
						<p class="order-quantity">${compra.howMany} unidades</p>
						<p class="order-user">Usuario: ${compra.usuario}</p>
					</div>
					<div class="order-status-admin-${compra.status}">
					</div>
				</div>
			</div>
		</div>
		`;

		if (compra.status === "pendiente") {
			HTMLpurchasesPendingList.innerHTML += purchaseHTML;
		} else if (compra.status === "aprobada") {
			HTMLpurchasesApprovedList.innerHTML += purchaseHTML;
		} else {
			HTMLpurchasesCancelList.innerHTML += purchaseHTML;
		}
	});

	document
		.querySelectorAll(".order-status-admin-pendiente")
		.forEach((container, index) => {
			const compra = sistema.listaCompras.filter(
				(c) => c.status === "pendiente"
			)[index];
			container.innerHTML = `
			<div class='btns-admin'>
				<div class="order-price">$ ${compra.precio * compra.howMany}</div>
				<button class="btn-approve" ACTION_TO_DO="aprobar" id="${
					compra.id
				}">Aprobar</button>
				<button class="btn-cancel" ACTION_TO_DO="cancelar" id="${
					compra.id
				}">Cancelar</button>
			</div>
		`;
		});

	document
		.querySelectorAll(".order-status-admin-aprobada")
		.forEach((container, index) => {
			const compra = sistema.listaCompras.filter(
				(c) => c.status === "aprobada"
			)[index];
			container.innerHTML = `
				<div class="order-price">$ ${compra.precio * compra.howMany}</div>
				<img alt='compra aprobada' src='/assets/comprobado-icon.svg' />
			`;
		});

	document
		.querySelectorAll(".order-status-admin-cancelada")
		.forEach((container, index) => {
			const compra = sistema.listaCompras.filter(
				(c) => c.status === "cancelada"
			)[index];
			container.innerHTML = `
				<div class="order-price">$ ${compra.precio * compra.howMany}</div>
				<img alt='compra cancelada' src='/assets/cancelado-icon.svg' />
			`;
		});

	document.querySelectorAll(".btn-approve").forEach((btn) => {
		btn.addEventListener("click", () => {
			const compraId = btn.id;
			handleStatePurchases(compraId, "aprobar");
		});
	});

	document.querySelectorAll(".btn-cancel").forEach((btn) => {
		btn.addEventListener("click", () => {
			const compraId = btn.id;
			handleStatePurchases(compraId, "cancelar");
		});
	});
}

function handleProductsView() {
	if (isInSales) {
		isInSales = false;
		document.querySelector(".buttonSectionChange").innerHTML = "Ofertas";
		renderContentHomeHTML();
	} else {
		isInSales = true;
		document.querySelector(".buttonSectionChange").innerHTML = "Home";

		renderSalesProductsHTML();
	}
}

function handleSignOut() {
	isAdmin = false;
	isComprador = false;
	userLoged = "";
	renderSection = "";
	renderContentLoginHTML();
	renderNavHTML();
}

function handleLogin() {
	let usuario = document.querySelector("#txtLoginUsuario").value.toLowerCase();
	let pass = document.querySelector("#txtPass").value;

	sistema.listaAdministradores.forEach((admin) => {
		if (admin.usuario === usuario && admin.pass === pass) {
			isAdmin = true;
			userLoged = admin.usuario;
			renderNavHTML();
			renderContentAdminListPurchasesHTML();
		} else if (admin.usuario === usuario && admin.pass !== pass) {
			alert("contraseña incorrecta");
		}
	});

	if (!isAdmin) {
		sistema.listaCompradores.forEach((comprador) => {
			if (comprador.usuario == usuario && comprador.pass == pass) {
				isComprador = true;
				userLoged = comprador.usuario;
				renderContentHomeHTML();
				renderNavHTML();
			}
		});
	}

	if (!isComprador && !isAdmin) {
		alert("Datos incorrectos");
	}
}

function handleRegistrarComprador() {
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
	let numeroTarjeta = document.getElementById("txtTarjeta").value;
	let esTarjetaValida = handleAlgorithmLuhn(numeroTarjeta);

	const formatoPass = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/;
	const formatoCvc = /^[0-9]{3}$/;

	if (
		sistema.esUsuarioUnico(usuario) &&
		formatoPass.test(pass) &&
		formatoCvc.test(cvc) &&
		esTarjetaValida
	) {
		sistema.listaCompradores.push(nuevoComprador);
		alert("Usuario registrado correctamente");
		renderContentLoginHTML();
	} else if (!sistema.esUsuarioUnico(usuario)) {
		alert("usuario ya registrado, debe usar otro username");
	} else if (!formatoPass.test(pass)) {
		alert(
			"contraseña debe tener al menos 5 caracteres y poseer al menos una letra mayúscula, una minúscula y un número"
		);
	} else if (!formatoCvc.test(cvc)) {
		alert("cvc invalida");
	} else if (!esTarjetaValida) {
		alert("La tarjeta NO es válida");
	}
}

function handleAddProductToCart(selectedProduct) {
	let selectedStock = Number(
		document.querySelector("#btnSelectStockBuyer").value
	);

	sistema.listaCompras.push(
		new compra({
			usuario: userLoged,
			producto: selectedProduct,
			precio: selectedProduct.precio,
			howMany:
				selectedStock == 0 || selectedStock === undefined
					? (selectedStock = 1)
					: selectedStock,
		})
	);
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

function getRandomNumber() {
	return Math.floor(Math.random() * 5) + 1;
}

function handleStatePurchases(id, actionToDo) {
	const compra = sistema.listaCompras.find((compra) => compra.id === id);
	if (compra) {
		if (actionToDo === "aprobar") {
			compra.status = "aprobada";
		} else if (actionToDo === "cancelar") {
			compra.status = "cancelada";
		}
		renderContentAdminListPurchasesHTML();
	}
}
function handleAlgorithmLuhn(numeroTarjeta) {
	let tarjetaValida = false;
	let digitoAVerificar = numeroTarjeta.charAt(numeroTarjeta.length - 1);
	let acumulador = 0;

	for (let i = 0; i < numeroTarjeta.length - 1; i++) {
		if (i % 2 === 0) {
			let duplicado = Number(numeroTarjeta.charAt(i)) * 2;
			if (duplicado >= 10) {
				let duplicadoString = String(duplicado);
				let resultado =
					Number(duplicadoString.charAt(0)) + Number(duplicadoString.charAt(1));
				acumulador += resultado;
			} else {
				acumulador += duplicado;
			}
		} else {
			acumulador += Number(numeroTarjeta.charAt(i));
		}
	}

	let multiplicadoPor9 = acumulador * 9;
	let multiplicadoPor9String = String(multiplicadoPor9);
	let digitoVerificador = multiplicadoPor9String.charAt(
		multiplicadoPor9String.length - 1
	);

	if (digitoAVerificar === digitoVerificador) {
		tarjetaValida = true;
	}
	return tarjetaValida;
}

const sistema = new Sistema();
