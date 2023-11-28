console.table(pasturas);

let habito = document.getElementById('habito');
let ciclo = document.getElementById('ciclo');
let boton = document.querySelector('button');

/*function mostrarPasturas(pasturas){
  pasturas.forEach(
    (pastura) => console.log(
      'Opciones de pasturas ' + pastura.habito + '/' + pastura.ciclo + '---' +
        pastura.especie + ' - Habito de vida = ' + 
        pastura.habito + ' - Ciclo de produccion = ' + 
        pastura.ciclo + ' - Fecha de siembra optima = ' + 
        pastura.siembra + ' - Densidad recomendada = ' + 
        pastura.densidad + ' Kg/hectarea ' + ' - a un costo de = ' + 
        pastura.costo + 'U$S/Kg.'
    )
  )
};*/

function loadPage() {
    console.log("habito", habito.value);
    console.log("ciclo", ciclo.value);
    let h = habito.value;
    let c = ciclo.value;
    if (h == "Anual" && c == "Invernal") {
      return navigateTo("invernales");
    } else if (h == "Anual" && c == "Estival"){
      return navigateTo("estivales");
    } else if (h == "Perenne" && c == "Invernal"){
        return navigateTo("perennes");
      }
    else {
      alert("nada seleccionado o opcion desconocida");
    }
  }
  
  function navigateTo(pageName) {
    window.location.href = './pages/' + pageName.toLowerCase() + '.html';
  };
  

/*function filtrarPasturas() {
  let resultado = pasturas.filter(filtrarHabito).filter(filtrarCiclo);
  if (resultado.length > 0) {
    mostrarPasturas(resultado)
  }
  return resultado
};

function filtrarHabito(pastura){
  return pastura.habito === habito.value;
};

function filtrarCiclo(pastura){
  return pastura.ciclo === ciclo.value;
};*/

boton.addEventListener('click' , loadPage);
