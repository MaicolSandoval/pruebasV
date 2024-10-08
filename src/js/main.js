// se crea una variable global que se va a encargar de crear el iframe que nos va a llevar el contenido de las paginas y sus funciones
const iframe = document.createElement("iframe")

// se utiliza el metodo onload para que cargue la parte inicial de la pagina
window.addEventListener("load", () => {
    iframe.src = "./pages/inicio.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

});

// se crea la parte inial de la pagina con una funcion para asignar el onclick en los botones del menu superior
const iframeInicio = document.getElementById("btnInicio")
iframeInicio.addEventListener("click", () => {

    document.getElementById("iframeDimanico") ? document.getElementById("paginas").removeChild(document.getElementById("iframeDimanico")) : ""
    iframe.src = "./pages/inicio.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

})

// esta parte controla la funcion de la carga de la seccion nosostros
const iframeNosotros = document.getElementById("btnNosotros")
iframeNosotros.addEventListener("click", () => {
    document.getElementById("iframeDimanico") ? document.getElementById("paginas").removeChild(document.getElementById("iframeDimanico")) : ""
    iframe.src = "./pages/Nosotros.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

})

// esta parte controla la funcion de la carga de la seccion experiencia
const iframeExperiencia = document.getElementById("btnExperiencia")
iframeExperiencia.addEventListener("click", () => {
    document.getElementById("iframeDimanico") ? document.getElementById("paginas").removeChild(document.getElementById("iframeDimanico")) : ""
    iframe.src = "./pages/Experiencias.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

})

// esta parte controla la funcion de la carga de la seccion planes
const iframePlanes = document.getElementById("btnPlanes")
iframePlanes.addEventListener("click", () => {
    document.getElementById("iframeDimanico") ? document.getElementById("paginas").removeChild(document.getElementById("iframeDimanico")) : ""
    iframe.src = "./pages/Planes.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

})

// esta parte controla la funcion de la carga de la seccion ofertas
// en todas las secciones se valida la existencia del inframe 
// si existe se removera el nodo y se creara el siguiente apra tenas de navegacion
const iframeOfertas = document.getElementById("btnOfertas")
iframeOfertas.addEventListener("click", () => {
    document.getElementById("iframeDimanico") ? document.getElementById("paginas").removeChild(document.getElementById("iframeDimanico")) : ""
    iframe.src = "./pages/Ofertas.html"
    iframe.id = "iframeDimanico"
    document.getElementById("paginas").append(iframe)

})


