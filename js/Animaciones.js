//Animaciones de Inicio
$("body").fadeIn("slow");
//Modo Oscuro/Claro Local
let modo = localStorage.getItem("Modo");
if( modo == "Oscuro"){
    $("body").css({"background-color":"black",
    "display":"none"})
    $(".oscuro1").css("display","none")
    $(".oscuro2").css("display","block")
    $("body").fadeIn("slow");
    $("header").css("background-color","grey")
}
//Modo Oscuro/Claro funcionamiento
$(".oscuro1").click( () =>{
    $("body").css({"background-color":"black",
                    "display":"none"})
    $(".oscuro1").css("display","none")
    $(".oscuro2").css("display","block")
    $("body").fadeIn("slow");
    $("header").css("background-color","grey")
    $(".cart-empty").css("color","white")
    localStorage.setItem("Modo","Oscuro" )
})
$(".oscuro2").click( () =>{
    $("body").css({"background-color":"white",
                    "display":"none"})
    $(".oscuro2").css("display","none")
    $(".oscuro1").css("display","block")
    $("body").fadeIn("slow");
    $("header").css("background-color","#0769e9")
    $(".cart-empty").css("color","black")
    localStorage.removeItem("Modo")
})
