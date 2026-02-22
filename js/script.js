document.addEventListener("DOMContentLoaded", () => {

    const btnGit = document.getElementById("btnGit");
    const btnInfo = document.getElementById("btnInfo");

    btnGit.addEventListener("click", () => {
        window.open("https://github.com/Asterthorck/Taller-01-Git/tree/main", "_blank");
    });

    btnInfo.addEventListener("click", () => {
        alert(
            "Git es un sistema de control de versiones que te permite " +
            "guardar cambios, trabajar en equipo y manejar versiones de código."
        );
    });

});