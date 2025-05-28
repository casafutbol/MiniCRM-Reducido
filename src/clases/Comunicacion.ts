import { TipoRespostaServidor } from "../tipos/TiposRespostaServidor";

/**
 * Clase para comunicación cliente-servidor mediante fetch.
 * Métodos para GET, POST, recibir páxinas como texto e comprobar usuario.
 */
export class Comunicacion {
    private static datos: any;
    private static paxina: string;

    /**
     * GET: solicita datos do servidor.
     * @param endpoint URL do endpoint
     */
    static async metodoGet(endpoint: string): Promise<void> {
        try {
            const resposta = await fetch(endpoint);
            this.datos = await resposta.json();
        } catch (error) {
            console.error("Erro no metodoGet:", error);
        }
    }

    /**
     * POST: envía datos ao servidor.
     * @param endpoint URL do endpoint
     * @param datos Obxecto co corpo da petición
     */
    static async metodoPost(endpoint: string, datos: any): Promise<void> {
        try {
            const resposta = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datos)
            });
            this.datos = await resposta.json();
            console.log("Resposta do servidor:", this.datos);
        } catch (error) {
            console.error("Erro no metodoPost:", error);
        }
    }

    /**
     * GET de texto: recupera unha páxina como texto.
     * @param endpoint URL do endpoint
     * @param options Opcións fetch (opcional)
     */
    static async metodoPaxinaGet(endpoint: string, options?: RequestInit): Promise<void> {
        try {
            const resposta = await fetch(endpoint, options);
            this.paxina = await resposta.text();
        } catch (error) {
            console.error("Erro no metodoPaxinaGet:", error);
        }
    }

    /**
     * Comproba se o usuario é válido segundo a resposta do servidor.
     * @returns booleano que indica se o usuario é válido
     */
    static isUser(): boolean {
        const datoResposta: TipoRespostaServidor = {
            estado: this.datos?.status,
            mensage: this.datos?.statusText
        };

        if (datoResposta.mensage !== "non é o usuario correcto") {
            localStorage.setItem("usuario", datoResposta.mensage);
            return true;
        }
        return false;
    }

    /** Getter dos datos recibidos */
    static get respostaServidor() {
        return this.datos;
    }

    /** Getter da páxina en texto */
    static get Paxina() {
        return this.paxina;
    }
}