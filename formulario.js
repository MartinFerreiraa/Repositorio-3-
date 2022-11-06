

const volverAtras = document.getElementById("Volver");
volverAtras.addEventListener("click", () => {
    window.location.href = "./index.html";

});

const formulario = document.getElementById("form");
const nombreUsuario = document.getElementById("user_name");
const nombreEmail = document.getElementById("user_email");
const mensaje = document.getElementById("message");

const mandarEmail = async (body) => {
    const settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    }
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", settings);
    const dataa = await response.json();
    return dataa;
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const body = {
        service_id: "service_g55aokh",
        template_id: "template_5ovpnap",
        user_id: "Nnp1l1vzP19oShQrk",
        template_params: {
            "to_name": nombreUsuario.value,
            "from_name": nombreEmail.value,
            "message": mensaje.value
        }
    };

    mandarEmail(body).then()
        Toastify({
            position: "center",
            text: 'Email enviado',
            duration: 2000,
            style: {
                background: "#a8a500"
            }
        }).showToast();
});


export { volverAtras };