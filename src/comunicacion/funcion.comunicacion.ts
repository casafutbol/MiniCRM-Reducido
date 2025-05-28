/**
 * @function comunicacionGET función asíncrona
 */
export const comunicacionGET = async () =>{
    /**
     * @param datosObxeto é un tipo de dato type
     * ```typescript
     * type datosObxeto = {
     *   dato1: string,
     *   dato2: string,
     *  dato3: number
     * }
     * ```
     */
    type datosObxeto = {
        dato1: string,
        dato2: string,
        dato3: number
    }

    let datosEnvio: datosObxeto = {
        dato1: "mariano",
        dato2: "pepito",
        dato3: 5
    }

    let obxetoEnvio = {
        method: 'post',
        headers: {
            "Content-type":"application/json"
        },
        body:JSON.stringify(datosEnvio)
    }
    let resposta = await fetch("/envio-datos-test",obxetoEnvio);
    let respostaJson = await resposta.json()
    console.log("isto ven do servidor",respostaJson)
}