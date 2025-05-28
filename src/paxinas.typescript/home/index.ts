import { Comunicacion } from "../../clases/Comunicacion";
import { TipoPeticionPaxina } from "../../tipos/TIpoPeticionPaxina";
document.addEventListener("DOMContentLoaded",async ()=>{
    if(location.pathname == "/home"){
        let bodyHome : HTMLBodyElement;
        bodyHome = document.querySelector("#body-sa");
        console.log("carga home??")
        let usarioToken = localStorage.getItem("usuario");
        console.log("usuarioToken ",usarioToken);
        
        let datos : TipoPeticionPaxina = {
                    method: 'GET',
                    headers: {
                        "Authorization":usarioToken
                    }
                }
        await Comunicacion.metodoPaxinaGet('/api/home',datos) 
        bodyHome.innerHTML = Comunicacion.Paxina
        
        
    }
})