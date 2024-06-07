/* menu lateral */
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
/* ocultar barra de navegacion despues de seleccionar una opcion */
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
/* generar barritas de animacion de habilidades */
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
/* selecciona todas las barras generales para manipularlas  */
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let ciberseguridad = document.getElementById("Ciber");
crearBarra(Ciber);
let gerente = document.getElementById("gerente");
crearBarra(gerente);
let atencionaclientes = document.getElementById("clientes");
crearBarra(clientes);
let ventas = document.getElementById("Ventas");
crearBarra(ventas);

/* valor de porcentaje en las barritas para que se pinten */
/* arreglo-- cada posicion pertenece a un elemento  */

let contadores = [-1,-1,-1,-1,-1,-1]
let entro = false;
/* funcion que aplica las animaciones de las habilidades */
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight = habilidades.getBoundingClientRect().bottom;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalhtml = setInterval(function(){
            pintarBarra(html, 6, 0, intervalhtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 3, 1, intervalJavascript);
        },100);
        const intervalCiber = setInterval(function(){
            pintarBarra(Ciber, 6, 2, intervalCiber);
        },100);
        const intervalgerente = setInterval(function(){
            pintarBarra(gerente, 17, 3, intervalgerente);
        },100);
        const intervalclientes = setInterval(function(){
            pintarBarra(clientes, 17, 4, intervalclientes);
        },100);
        const intervalventas = setInterval(function(){
            pintarBarra(ventas, 17, 5, intervalventas);
        },100);
    }
}

/* lleno una barra con la cantidad indicada */
function pintarBarra(id_barra,cantidad,indice,interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#ed2a07";
    }else{
        clearInterval(interval)
    }
}
/* detecto el scrolling del mouse para activar la animacion de la barrita */
window.onscroll = function(){
    efectoHabilidades();
}