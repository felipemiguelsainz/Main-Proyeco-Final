
//Inventario de productos
class producto{
    constructor(id, precio, clase){
        this.id = id;
        this.precio = precio;
        this.clase = clase;
    }
}
//Declaracion de clases de Producto
const producto1 = new producto(11, 110, "Fifa 22");
const producto2 = new producto(22, 120, "God of War");
const producto3 = new producto(33, 130, "Steam-Key");
const producto4 = new producto(44, 140, "Gift-Cart PSN");

const productos = [producto1, producto2, producto3, producto4];
//Array de Carrito
let cart = [];
//Chequeo de la existencia de Carrito en Local
let existLocal = JSON.parse(localStorage.getItem("Carrito"))
    if ( existLocal ){
        for (let i = 0; i < existLocal.length; i++) {
            const element = existLocal[i];
            cart.push(element)
        }
    }
//Botones de Compra
$(".button_comprar_p1").click( () => {
        let cantidad=0;
        let {id, precio, clase} = producto1;
        let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
        if(elementoEnElStorage){
            let {cantidad:CantidadExistente} = elementoEnElStorage
            cantidad=Number(CantidadExistente)+1 
        }else{cantidad=1}
        localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
        alert("Fifa fue agregado al carrito")
    })
$(".button_comprar_p2").click( () => {
        let cantidad=0;
        let {id, precio, clase} = producto2;
        
        let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
        if(elementoEnElStorage){
            let {cantidad:CantidadExistente} = elementoEnElStorage
            cantidad=Number(CantidadExistente)+1
        }else{cantidad=1}
        localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
        alert("God of War fue agregado al carrito")
    })
$(".button_comprar_p3").click( () => {
    let cantidad=0;
    let {id, precio, clase} = producto3;
    
    let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
    if(elementoEnElStorage){
        let {cantidad:CantidadExistente} = elementoEnElStorage
        cantidad=Number(CantidadExistente)+1
    }else{cantidad=1}
    localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
    alert("Steam Key fue agregado al carrito")
})
$(".button_comprar_p4").click( () => {
    let cantidad=0;
    let {id, precio, clase} = producto4;
    
    let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
    if(elementoEnElStorage){
        let {cantidad:CantidadExistente} = elementoEnElStorage
        cantidad=Number(CantidadExistente)+1
        
    }else{cantidad=1}
    localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
    alert("Psn Card fue agregado al carrito")
})
//Traer comentarios median Json place holder
const URL = "https://jsonplaceholder.typicode.com"

$(".comments").prepend(`<div class="comments-mostrar">Mostrar comentarios de clientes</div>`)
$(".comments-mostrar").click(()=>{
    $(".comments-mostrar").css("display","none")
    $(".container-comments").css("display","block")
})
$(".container-comments").prepend(`<div class="container-comments-ppal"></div>`)
$(".container-comments").prepend(`<div class="comments-esconder">Esconder Comentarios</div>`)
$(".comments-esconder").click(()=>{
    $(".comments-mostrar").css("display","block")
    $(".container-comments").css("display","none")
})
//Esta Funcion es para visualizar los comentarios
$.get(`${URL}/comments`, function (res, state){
    if (state === "success"){
        for (const{name, email, body} of res){
            $(".container-comments-ppal").append(`
                <div class="comments-gral">
                    <div class="comments-head">
                    <span>User: ${name} /</span>
                    <span class="email"> ${email}</span>
                    </div>
                    <div class="comments-body">${body}</div>
                </div>
            `)
        }
    }
})
