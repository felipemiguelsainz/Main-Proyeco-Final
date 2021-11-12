//Traer carrito del Local
let p1 = JSON.parse(localStorage.getItem(11));
let p2 = JSON.parse(localStorage.getItem(22));
let p3 = JSON.parse(localStorage.getItem(33));
let p4 = JSON.parse(localStorage.getItem(44));
//Visualizacion de Carrito
if (p1 && p1.cantidad > 0){
    $(".container-cart").prepend(`
        <div class="item-cart-producto">
            <div>
                <img class="producto-img-cart" src="../img/fifa22.jpeg" alt="">
                <p class="producto-titulo">${p1.clase}</p>
                <p>$${p1.precio}</p>
                <p><i id="removeProduct${p1.id}" class="far fa-minus-square fa-2x"></i>
                Cantidad ingresada: ${p1.cantidad }
                <i id="addProduct${p1.id}" class="far fa-plus-square fa-sm fa-2x"></i></p>
                </div>
        </div>`)
        $(`#removeProduct${p1.id}`).click(function () {
            let cantidad=0;
            let {id, precio, clase} = p1;
            let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
            if(elementoEnElStorage){
                let {cantidad:CantidadExistente} = elementoEnElStorage
                cantidad=Number(CantidadExistente)-1
            }else{cantidad=1}
            localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
            location.reload()
        })
        $(`#addProduct${p1.id}`).click(function () {
            let cantidad=0;
            let {id, precio, clase} = p1;
            
            let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
            if(elementoEnElStorage){
                let {cantidad:CantidadExistente} = elementoEnElStorage
                cantidad=Number(CantidadExistente)+1
            }else{
                cantidad=1
            }
            localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
            location.reload()
        })}
if (p2 && p2.cantidad > 0){
    $(".container-cart").prepend(`
        <div class="item-cart-producto">
            <div>
                <img class="producto-img-cart" src="../img/God_of_war_ps4.webp" alt="">
                <p class="producto-titulo">${p2.clase}</p>
                <p>$${p2.precio}</p>
                <p><i id="removeProduct${p2.id}" class="far fa-minus-square fa-2x"></i>
                Cantidad ingresada: ${p2.cantidad }
                <i id="addProduct${p2.id}" class="far fa-plus-square fa-sm fa-2x"></i></p>
                </div>
        </div>`)
        $(`#removeProduct${p2.id}`).click(function () {
            let cantidad=0;
            let {id, precio, clase} = p2;
            let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
            if(elementoEnElStorage){
                let {cantidad:CantidadExistente} = elementoEnElStorage
                cantidad=Number(CantidadExistente)-1
            }else{cantidad=1}
            localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
            location.reload()
        })
        $(`#addProduct${p2.id}`).click(function () {
            let cantidad=0;
            let {id, precio, clase} = p2;
            
            let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
            if(elementoEnElStorage){
                let {cantidad:CantidadExistente} = elementoEnElStorage
                cantidad=Number(CantidadExistente)+1
            }else{
                cantidad=1
            }
            localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
            location.reload()
        })}
if (p3 && p3.cantidad > 0){
    $(".container-cart").prepend(`
        <div class="item-cart-producto">
            <div>
                <img class="producto-img-cart" src="../img/unnamed.png" alt="">
                <p class="producto-titulo">${p3.clase}</p>
                <p>$${p3.precio}</p>
                <p><i id="removeProduct${p3.id}" class="far fa-minus-square fa-2x"></i>
                Cantidad ingresada: ${p3.cantidad }
                <i id="addProduct${p3.id}" class="far fa-plus-square fa-sm fa-2x"></i></p>
                </div>
        </div>`)
        $(`#removeProduct${p3.id}`).click(function () {
            let cantidad=0;
            let {id, precio, clase} = p3;
            let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
            if(elementoEnElStorage){
                let {cantidad:CantidadExistente} = elementoEnElStorage
                cantidad=Number(CantidadExistente)-1
            }else{cantidad=1}
            localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
            location.reload()
        })
        $(`#addProduct${p3.id}`).click(function () {
            let cantidad=0;
            let {id, precio, clase} = p3;
            
            let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
            if(elementoEnElStorage){
                let {cantidad:CantidadExistente} = elementoEnElStorage
                cantidad=Number(CantidadExistente)+1
            }else{
                cantidad=1
            }
            localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
            location.reload()
        })}
if (p4 && p4.cantidad > 0){
            $(".container-cart").prepend(`
                <div class="item-cart-producto">
                    <div>
                        <img class="producto-img-cart" src="../img/psn.jpg" alt="">
                        <p class="producto-titulo">${p4.clase}</p>
                        <p>$${p4.precio}</p>
                        <p><i id="removeProduct${p4.id}" class="far fa-minus-square fa-2x"></i>
                        Cantidad ingresada: ${p4.cantidad }
                        <i id="addProduct${p4.id}" class="far fa-plus-square fa-sm fa-2x"></i></p>
                        </div>
                </div>`)
                $(`#removeProduct${p4.id}`).click(function () {
                    let cantidad=0;
                    let {id, precio, clase} = p3;
                    let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
                    if(elementoEnElStorage){
                        let {cantidad:CantidadExistente} = elementoEnElStorage
                        cantidad=Number(CantidadExistente)-1
                    }else{cantidad=1}
                    localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
                    location.reload()
                })
                $(`#addProduct${p4.id}`).click(function () {
                    let cantidad=0;
                    let {id, precio, clase} = p4;
                    
                    let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
                    if(elementoEnElStorage){
                        let {cantidad:CantidadExistente} = elementoEnElStorage
                        cantidad=Number(CantidadExistente)+1
                    }else{
                        cantidad=1
                    }
                    localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
                    location.reload()
                })}
if((p1 && p1.cantidad > 0)||(p2 && p2.cantidad > 0)||(p3 && p3.cantidad > 0)||(p4 && p4.cantidad > 0)){
    $(".container-cart").append(`<div class="cart-button"><a href="compra.html"">Confirmar compra</a></div>`)
}else if((p1 && p1.cantidad <= 0)||(p2 && p2.cantidad <= 0)||(p3 && p3.cantidad <= 0)||(p4 && p4.cantidad <= 0)){
    $(".cart-empty-div").append(`<div class="cart-empty">No tiene Productos en el Carrito</div>`)
}
$(".container-cart").prepend(`<div class="cart-button"><a href="../index.html"">ir al Home</a></div>`)
$("#restar-producto-4").click(()=>{
    let cantidad=0;
    let {id, precio, clase} = producto4;
    
    let elementoEnElStorage = JSON.parse(localStorage.getItem(id));
    if(elementoEnElStorage){
        let {cantidad:CantidadExistente} = elementoEnElStorage
        cantidad=Number(CantidadExistente)-1
    }else{
        cantidad=1
    }
    localStorage.setItem(id, JSON.stringify({id, precio, clase, cantidad}));
})