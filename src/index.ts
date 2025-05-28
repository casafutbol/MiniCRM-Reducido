import { Comunicacion } from "./clases/Comunicacion";
import { Formulario } from "./clases/Formulario";
import './css/main.css';

function main(): void {
    const path = location.pathname;

    if (path === "/") {
        console.log("estou en inicio");
    }

    if (path === "/logueo") {
        console.log("estou en /logueo");

        const refBotonFormulario = document.querySelector<HTMLButtonElement>("#envio2");
        if (!refBotonFormulario) {
            console.error("Botón #envio2 no encontrado en la página /logueo");
            return;
        }

        refBotonFormulario.addEventListener("click", async (e) => {
            e.preventDefault();

            try {
                const oFormulario = new Formulario("#form-logueo");
                oFormulario.metodoAccionFormulario();
                const datosFormulario = oFormulario.DatosEnviados;

                await Comunicacion.metodoPost("/logueandome", datosFormulario);

                if (Comunicacion.isUser()) {
                    const usuarioToken = localStorage.getItem("usuario");
                    console.log("usuarioToken", usuarioToken);
                    location.href = "/home";
                } else {
                    console.log("Non é o usuario");
                }
            } catch (error) {
                console.error("Error en la petición de login:", error);
            }
        });
    }

    if (path === "/paxina-app") {
        const refBotonGET = document.querySelector<HTMLButtonElement>("#solicitudeGET");
        const refBotonPOST = document.querySelector<HTMLButtonElement>("#solicitudePOST");

        if (!refBotonGET || !refBotonPOST) {
            console.error("Botón GET o POST no encontrado en /paxina-app");
            return;
        }

        refBotonGET.addEventListener("click", async () => {
            try {
                const endpoint = "/recibo-datos-do-servidor";
                await Comunicacion.metodoGet(endpoint);
                console.log(Comunicacion.respostaServidor);
                // Usar el dato recibido para pintar en la UI
            } catch (error) {
                console.error("Error en método GET:", error);
            }
        });

        refBotonPOST.addEventListener("click", async () => {
            try {
                const endpoint = "/envio-datos-o-servidor";
                // Aquí deberías pasar datos si es necesario, ejemplo: {}
                await Comunicacion.metodoPost(endpoint, {});
                console.log(Comunicacion.respostaServidor);
                // Usar el dato recibido para pintar en la UI
            } catch (error) {
                console.error("Error en método POST:", error);
            }
        });
    }

    if (path === "/invoices") {
        console.log("estou en invoice");
    }

    if (path === "/recibo-datos-do-servidor") {
        console.log("estou document.querySelector");
        console.log("document.querySelector", document.body);
    }
}

main();