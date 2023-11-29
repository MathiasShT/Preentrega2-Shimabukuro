
let habito = document.getElementById('habito');
let ciclo = document.getElementById('ciclo');
let boton = document.querySelector('button');

function loadPage() {
    //console.log("habito", habito.value);
    //console.log("ciclo", ciclo.value);
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
      alert("Especies no disponibles por el momento");
    }
  }
  
  function navigateTo(pageName) {
    window.location.href = './pages/' + pageName.toLowerCase() + '.html';
  };

if (boton !== null) {
  console.log("addEventListener boton");
}
 boton.addEventListener('click' , loadPage);

 function consultar(){
  console.log("consultar localStorage");
  localStorage.setItem("Pastura" , JSON.stringify('card-title'))
 };

 let guardarConsulta = document.querySelector('.consultar');
 if (guardarConsulta !== null) {
  console.log("addEventListener consultar");
  guardarConsulta.addEventListener('click' , consultar);
 };