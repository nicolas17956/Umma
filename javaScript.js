document.querySelector(".barra-abrir").addEventListener("click", () => {
    document.querySelector(".nav").style.display = "flex";
    document.querySelector(".barra-abrir").style.display = "none";
    document.querySelector(".barra-cerrar").style.display = "flex";
    document.querySelector("html").style.overflow = "hidden";
});
document.querySelector(".barra-cerrar").addEventListener("click", () => {
    document.querySelector(".nav").style.display = "none";
    document.querySelector(".barra-cerrar").style.display = "none";
    document.querySelector(".barra-abrir").style.display = "flex";
    document.querySelector("html").style.overflow = "visible";
});
document.querySelector(".ul").addEventListener("click", () => {
    document.querySelector(".nav").style.display = "none";
    document.querySelector(".barra-cerrar").style.display = "none";
    document.querySelector(".barra-abrir").style.display = "flex";
    document.querySelector("html").style.overflow = "visible";
});