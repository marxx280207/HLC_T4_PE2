function enviar() {
    const mensajeInput = document.getElementById("mensaje");
    const mensajeContainer = document.getElementById("mensaje-container");
    const nomensaje = document.getElementById("no-mensaje");

    const mensajeText = mensajeInput.value.trim();

    if (mensajeText === "") {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }
    
    const mensaje = document.createElement("div");
    mensaje.className = "note";
    mensaje.innerHTML = `
        <span>${mensajeText}</span>
        <button class="delete-note" onclick="deleteNote(this)">Borrar</button>
    `;

    mensajeContainer.appendChild(mensaje);

    mensajeInput.value = "";
    nomensaje.style.display = "none";
}