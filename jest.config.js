describe("Función registrarse", () => {
  // Preparar el entorno simulado del DOM y las funciones necesarias
  beforeEach(() => {
    document.body.innerHTML = `
        <input id="txtNombre" value="Juan">
        <input id="txtApellido" value="Pérez">
        <input id="txtUsuario" value="juanperez">
        <input id="txtContraseña" value="Juan123">
        <input id="txtTarjeta" value="1111-2222-3333-4444">
        <input id="txtCvc" value="123">
      `;

    // Mock de las funciones y variables globales
    global.sistema = {
      esUsuarioUnico: jest.fn().mockReturnValue(true),
      agregarComprador: jest.fn(),
    };
    global.alert = jest.fn();
    global.ocultarTodo = jest.fn();
    document.querySelector = jest.fn((selector) => {
      return document.getElementById(selector.substring(1));
    });
  });

  test("debe registrar un comprador correctamente con datos válidos", () => {
    registrarse();
    expect(sistema.agregarComprador).toHaveBeenCalled();
    expect(alert).toHaveBeenCalledWith("registrado correctamente");
    expect(ocultarTodo).toHaveBeenCalled();
  });

  test("no debe registrar si el usuario ya existe", () => {
    sistema.esUsuarioUnico.mockReturnValue(false);
    registrarse();
    expect(alert).toHaveBeenCalledWith(
      "usuario ya registrado, debe usar otro username"
    );
    expect(sistema.agregarComprador).not.toHaveBeenCalled();
  });

  test("no debe registrar si la contraseña no cumple con el formato", () => {
    document.getElementById("txtContraseña").value = "juan"; // Contraseña inválida
    registrarse();
    expect(alert).toHaveBeenCalledWith(
      "contraseña debe tener al menos 5 caracteres y poseer al menos una letra mayúscula, una minúscula y un número"
    );
    expect(sistema.agregarComprador).not.toHaveBeenCalled();
  });

  test("no debe registrar si el CVC no cumple con el formato", () => {
    document.getElementById("txtCvc").value = "12"; // CVC inválido
    registrarse();
    expect(alert).toHaveBeenCalledWith("cvc invalida");
    expect(sistema.agregarComprador).not.toHaveBeenCalled();
  });
});
