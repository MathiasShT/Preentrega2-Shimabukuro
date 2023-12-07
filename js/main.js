let consultas = [];

const tarjetas = document.querySelector('.tarjetas');
const listaConsultas = document.querySelector('#listas tbody');
const eliminarConsulta = document.querySelector('.limpiar');

function consultar(evt) {
  evt.preventDefault();
    if (evt.target.classList.contains('consultar')) {
        const producto = evt.target.parentElement.parentElement;
    leerDatosProducto(producto);
  }
};

function leerDatosProducto(item) {
    const infoProducto = {
    imagen: item.querySelector('img').src,
    nombre: item.querySelector('h5').textContent,
    precio: item.querySelector('p').textContent,
  };
    consultas.push(infoProducto);
  agregarConsultasHtml();
};



function agregarConsultasHtml() {
  limpiarConsultas();
  consultas.forEach((producto) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td><img src="${producto.imagen}" width="50"/></td>
      <td> ${producto.nombre}</td>
      <td> ${producto.precio}</td>
    `;
    listaConsultas.appendChild(fila);
  })
  agregarStorage();
};

function limpiarConsultas() {
  while (listaConsultas.firstChild) {
    listaConsultas.removeChild(listaConsultas.firstChild)
  }
};

function eliminarConsultas() {
  while (listaConsultas.firstChild) {
    listaConsultas.removeChild(listaConsultas.firstChild)
  }
  consultas = [];
  agregarStorage();
};

function agregarStorage() {
  localStorage.setItem('buzon', JSON.stringify(consultas))
};


tarjetas.addEventListener('click', consultar);
eliminarConsulta.addEventListener('click', eliminarConsultas)
