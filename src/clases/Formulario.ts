import { TipoDatosFormEnvio } from "../tipos/TipoDatosFormEnvio.js";
import { TipoDatosFormulario } from "../tipos/TipoDatosFormulario.js";

/**
 * @class Formulario esta clase, realizará a montaxe dos datos do formulario para a saída para o `fetch`
 * @public metodoAccionFormulario este método contén os métodos que accionan todo o proceso
 * @example
 * // Accións dende o 
 * public metodoAccionFormulario(){  
        this.metodoRefFormulario();         // 1º Seleciono o Formulario mediante o selector introducido no constructor    
        this.metodoDatosFormulario();       // 2º Obteño os datos do Formulario e os paso a variable 'this.datosFormulario'
        this.metodoDatosObxetoEnvio();      // 3º Preparo os datos para enviar mediante '.entries()' e 'fromEntries'
        this.metodoPreparandoObxetoEnvio(); // 4º Preparo o OBXETO A ENVIAR
    }
 * @example
 * let oFormulario = new Formulario("#form-logueo");
 * let datosFormulario = oFormulario.DatosTransformadosEnObxeto;
 * 
 * @constructor introducimos unha referencia que pasamos por texto
 * @returns os datos do formulario a través do método 'get' DatosTransformadosEnObxeto
 */
export class Formulario{

    private refSelectorFormulario: string;
    private refFormulario : any;
    private datosFormulario: FormData;
    private datosFormTransformadosObxeto:any;
    private obxetoEnvio: TipoDatosFormEnvio

    constructor(selector:string){
        this.refSelectorFormulario = selector;
    }

    public metodoAccionFormulario(){  
        this.metodoRefFormulario();         // 1º Seleciono o Formulario mediante o selector introducido no constructor    
        this.metodoDatosFormulario();       // 2º Obteño os datos do Formulario e os paso a variable 'this.datosFormulario'
        this.metodoDatosObxetoEnvio();      // 3º Preparo os datos para enviar mediante '.entries()' e 'fromEntries'
        this.metodoPreparandoObxetoEnvio(); // 4º Preparo o OBXETO A ENVIAR
    }
    private metodoRefFormulario(){
        this.refFormulario = document.querySelector(this.refSelectorFormulario);  // 1º Selecciono o FORMULARIO mediante A REFERENCIA
    }

    private metodoDatosFormulario(){
        this.datosFormulario = new FormData(this.refFormulario)
    }

    private metodoDatosObxetoEnvio(){
        let datosFormArrayArrays = this.datosFormulario.entries();//[[clave1,valor1],[clave2,valor2]]
        this.datosFormTransformadosObxeto = Object.fromEntries(datosFormArrayArrays); // {clave1: valor1,clave2,valor2}
    }
    private metodoPreparandoObxetoEnvio(){
        let datos : TipoDatosFormEnvio = {
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(this.datosFormTransformadosObxeto)
        }
        this.obxetoEnvio = datos
    }
    get DatosEnviados(){
        return this.obxetoEnvio;
    }

}