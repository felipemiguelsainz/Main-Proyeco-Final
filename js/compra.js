$("#btnRate").click(()=>{
    let rate0 = document.getElementsByName("rate")[0].value;
    let rate1 = document.getElementsByName("rate")[1].value;
    let rate2 = document.getElementsByName("rate")[2].value;
    let rate3 = document.getElementsByName("rate")[3].value;
    let rates = [{"#Card": rate0, "Code": rate1, "E-mail": rate2, "Adress": rate3}]
    let ratesJson = JSON.stringify(rates)
    localStorage.setItem("ID", ratesJson)
    alert("Compra Satisfactoria")
})
let p1 = JSON.parse(localStorage.getItem(11));
let p2 = JSON.parse(localStorage.getItem(22));
let p3 = JSON.parse(localStorage.getItem(33));
let p4 = JSON.parse(localStorage.getItem(44));
if (p1){
    $(".container-compra2").prepend(`
        <div class="item-cart-producto">
            <div>
            <img class="producto-img-cart" src="../img/fifa22.jpeg" alt="">
            <p class="producto-titulo">${p1.clase}</p>
            <p>$${p1.precio}</p>
            <p>Cantidad ingresada: ${p1.cantidad}</p>
            </div>
        </div>
    `)
}
if (p2){
    $(".container-compra2").prepend(`
        <div class="item-cart-producto">
            <div>
            <img class="producto-img-cart" src="../img/God_of_War_ps4.webp" alt="">
            <p class="producto-titulo">${p2.clase}</p>
            <p>$${p2.precio}</p>
            <p>Cantidad ingresada: ${p2.cantidad}</p>
            </div>
        </div>
    `)
}
if (p3){
    $(".container-compra2").prepend(`
        <div class="item-cart-producto">
            <div>
            <img class="producto-img-cart" src="../img/unnamed.png" alt="">
            <p class="producto-titulo">${p3.clase}</p>
            <p>$${p3.precio}</p>
            <p>Cantidad ingresada: ${p3.cantidad}</p>
            </div>
        </div>
    `)
}
if (p4){
    $(".container-compra2").prepend(`
        <div class="item-cart-producto">
            <div>
            <img class="producto-img-cart" src="../img/psn.jpg" alt="">
            <p class="producto-titulo">${p4.clase}</p>
            <p>$${p4.precio}</p>
            <p>Cantidad ingresada: ${p4.cantidad}</p>
            </div>
        </div>
    `)
}