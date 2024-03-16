var formulario = document.getElementById("form");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFinal = document.getElementById("fechaFinal").value;

    if (nombre === ""|| fechaInicio === "" || fechaFinal === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    if (Date.parse(fechaFinal) < Date.parse(fechaInicio)) {
        alert("La fecha de final no puede ser menor que la fecha de inicio, trate de nuevo.");
        return;
    }
    alert("¡Su información ha sido enviada!"); 
    formulario.reset(); 
}
   
);