// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona los elementos de los piñones
    const leftGear = document.querySelector(".gears-left");
    const rightGear = document.querySelector(".gears-right");

    // Función para rotar los piñones en función del desplazamiento vertical (scroll)
    function rotateGears() {
        const rotation = window.scrollY / 5; // Controla la velocidad del giro
        leftGear.style.transform = `rotate(${rotation}deg)`;
        rightGear.style.transform = `rotate(-${rotation}deg)`; // Gira en sentido contrario
    }

    // Escuchar el evento de scroll para animar los piñones
    window.addEventListener("scroll", rotateGears);
});
