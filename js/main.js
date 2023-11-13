console.table (pasturas);

let habito = prompt('Ingresar Pastura Anual o Perenne');
let ciclo = prompt('Ingresar ciclo de produccion Invernal o Estival');

function mostrarPasturas(pasturas){
    pasturas.forEach((pastura)=> console.log(
        'Opciones de pasturas ' + pastura.habito + '/' + pastura.ciclo + '---' +
        pastura.especie + ' - Habito de vida = ' + 
        pastura.habito + ' - Ciclo de produccion = ' + 
        pastura.ciclo + ' - Fecha de siembra optima = ' + 
        pastura.siembra + ' - Densidad recomendada = ' + 
        pastura.densidad + ' Kg/hectarea ' + ' - a un costo de = ' + 
        pastura.costo + 'U$S/Kg.'
    ))};

function filtrarPasturas()
{   const resultado = pasturas
    .filter(filtrarHabito)
    .filter(filtrarCiclo);
    if (resultado.length>0){mostrarPasturas(resultado)}
    else { alert('No disponemos de pasturas perennes estivales')}
};

function filtrarHabito(pastura){
    if(habito){
        return pastura.habito === habito;
    }   return pastura
};
function filtrarCiclo(pastura){
    if(ciclo){
        return pastura.ciclo === ciclo;
    }   return pastura
};


filtrarPasturas();
