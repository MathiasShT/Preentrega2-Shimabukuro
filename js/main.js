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
    listaConsultas.removeChild(listaConsultas.firstChild);
    Swal.fire({
      title: "Deseas eliminar las consultas?",
      text: "No se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "Su seleccion fue eliminada.",
          icon: "success"
        });
      }
    });
  }
  consultas = [];
  agregarStorage();
  
};

function agregarStorage() {
  localStorage.setItem('buzon', JSON.stringify(consultas))
};

window.addEventListener("DOMContentLoaded", () => {
  fetch('data/pasturas.json')
    .then((respuesta) => {
      return respuesta.json()
    })
    .then((data) => {
      dibujarProductos(data);
    })
    .catch((err) => {
      Swal.fire({
        title: "Error",
        text: "Algo salio mal!",
        icon: "question"
      });
    });

  consultas = JSON.parse(localStorage.getItem('buzon')) || [];
});

function dibujarProductos(pasturas){
  const contenido = document.querySelector('.row');
  let html = "";
  pasturas.forEach((pastura) => {
    html += `
    <article class="card col-xxl-3 col-xl-3 col-md-4 col-sm-12" style="width: 18rem;">
        <img src="${pastura.img}" class="card-img-top" alt="Ryegrass">
      <div class=" card-body">
        <h5 class="articulos card-title">${pastura.especie}</h5>
        <p class="card-text">${pastura.costo} U$S/Kg.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item-1">${pastura.habito}</li>
          <li class="list-group-item-2">${pastura.ciclo}</li>
          <li class="list-group-item-3">${pastura.densidad} KG/Ha.</li>
        </ul>
        <div class="card-body btnConsultar">
          <a href="#" class="card-link consultar">Consultar</a>
        </div>
      </article>
    `
  });

  contenido.innerHTML = html;
}


tarjetas.addEventListener('click', consultar);
eliminarConsulta.addEventListener('click', eliminarConsultas);
