const Token = require("../../clases/Token.js");
const paxinaTextoHome = require("../../paxinas.texto/paxinas.home.js");

/**
 * @author Pepito Rodriguez
 * @function isUser esta función recibe o TOKEN que nos indica o usuario . Desencríptao para comprobar
 * se é o usuario accedendo a base de datos. 
 * Recibimos do cliente na cabecera o token, no campo authorization, e o leeremos ou desestructuraremos:
 * @example 
 * const { authorization } = req.headers;
 * @param {Object} req variable Request
 * @param {Object} res variable Response que ten por defecto Node, que fará a resposta o cliente 
 * @returns 
 * @param usuarioToken envía o token
 * @param resposta non é o usuario 
 */
const isUser = (req,res,next)=>{
    const token = new Token(req.body);
    try{
        // RECIBO TOKEN 
        const { authorization } = req.headers;
        token.verificarToken(authorization);
        let condicionDeEnvioDePaxina = token.userToken.nome == 'Israel' && token.userToken.apelido == 'mariano'
        console.log("usuario verificado ", token.userToken)
        condicionDeEnvioDePaxina && next() 
            
        
        
    }catch(error){
        throw new Error ("Usuario non autorizado");
    }
    

}

module.exports = isUser