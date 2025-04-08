let btnMostrar = document.getElementById("btnMostrar");

let encabezado1 = document.getElementById("encabezado1");

let encabezado2 = document.getElementById("encabezado2");

let lista = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item p-4 active")

let otroElemento = document.querySelector("ul>li");

let otrosElementos = document.querySelectorAll("ul>li");

console.log(otroElemento);
console.log(otrosElementos);
console.log(otrosElementos.length);
//console.log(elementos.length);
//console.log(lista.length);
//console.log(lista.item(0));
//console.log(elementos[0]);



//FUNCIONES...

function myFunction(){
    encabezado1.innerHTML = encabezado1.innerHTML + "<em>Hola jejej</em>"
    contador++;
}

btnMostrar.addEventListener("click",function(event) {
    event.preventDefault();
    let element  = document.createElement("li");
    element.innerText="Another item"; //Another item
    element.classList.add('list-group-item', 'p-4'); 

    let element2 = element.cloneNode(true);
    
    // lista.item(0).before(element);
    // lista.item(0).prepend(element2);

    lista.item(0).append(element);
    lista.item(0).after(element2);
});