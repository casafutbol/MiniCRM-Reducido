const Token = require("../clases/Token.js");

/**
 * @author Pepito Rodriguez
 * @function logueo esta función crea o token e o envía o cliente
 * @param {Object} req variable Request
 * @param {Object} res variable Response que ten por defecto Node, que fará a resposta o cliente 
 * @returns 
 * @param usuarioToken envía o token
 * @param resposta non é o usuario 
 */
const logueo = (req,res)=>{
    
    try{

        let condicion = req.body.nome2 === 'Israel' && req.body.apelido2 === 'mariano';//simula acceso a base de datos
        const token = new Token(req.body);
        token.creoToken()
        const usuarioToken = token.Token;
        condicion ? res.status(200).send({statusText:usuarioToken}) : res.status(200).send({statusText:"non é o usuario correcto"})
    
    }catch(error){
        throw new Error ("algo está ocurrindo")
    }
    

}

module.exports = logueo