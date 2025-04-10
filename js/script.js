let btnMostrar = document.getElementById("btnMostrar");

let encabezado1 = document.getElementById("encabezado1");

let encabezado2 = document.getElementById("encabezado2");

let lista = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item p-4 active")

let otroElemento = document.querySelector("ul>li");

let otrosElementos = document.querySelectorAll("ul>li");

let txtRFC = document.getElementById("txtRFC");
let txtTelefono = document.getElementById("txtTelefono");
let txtCURP = document.getElementById("txtCURP");

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
    
    // Before inserta el elemento antes de la lista 
    // lista.item(0).before(element);
    // Prepend inserta el elemento al icnio de la lista uwu 
    // lista.item(0).prepend(element2);

    // Appne dinserta el lemento al final de la lista 
    // lista.item(0).append(element);
    // after inserta el elemento despu es de la lista
    // lista.item(0).after(element2);

    // afterbeginong

    // // afterbegin inserta el elemento al princio de la lista 
    // lista.item(1).insertAdjacentElement("afterbegin",element)
    // // beforeend inserta el lemento al final de la lista
    // lista.item(1).insertAdjacentElement("beforeend", element2)

    lista.item(1).insertAdjacentHTML("beforebegin",`<li class="list-group-item p-4 active" >Aother new item</li>`)
    lista.item(1).insertAdjacentHTML("afterend",`<li class="list-group-item p-4 active" >Aother new afterend item last item</li>`)


    lista.item(1).insertAdjacentHTML("afterbegin",`<li class="list-group-item p-4 active" >Aother new item</li>`)
    lista.item(1).insertAdjacentHTML("beforeend",`<li class="list-group-item p-4 active" >Aother beforened item last item</li>`)
});

window.addEventListener("load",function(event){
        console.log("se termino de cargar la pagina")
});

function txtToUppter (event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
};

txtRFC.addEventListener("blur",txtToUppter);//txtRFC
txtCURP.addEventListener("blur",txtToUppter);//txtCURP
// blue-> cuando se sale del campo
// txtRFC.addEventListener("blur",function(event){
//     event.preventDefault();
//     // txtRFC.value = txtRFC.value.toUpperCase();
//     event.target.value = event.target.value.toUpperCase();
// });//txtRFC
// blue-> cuando se sale del campo
// txtCURP.addEventListener("blur",function(event){
//     event.preventDefault();
//     txtCURP.value = txtCURP.value.toUpperCase();
// });//txtCURP

txtTelefono.addEventListener("blur", function(event){
    event.preventDefault();
    txtTelefono.value = txtTelefono.value.trim().slice(0,10);
});//txtTelefono