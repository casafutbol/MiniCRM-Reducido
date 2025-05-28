const jwt = require("jsonwebtoken");

class Token{
    #nome;
    #apelido;
    #userToken;
    constructor(usuario){
        this.#nome = usuario.nome2;
        this.#apelido = usuario.apelido2;
    }


    creoToken(){
        this.token = jwt.sign({nome:this.#nome,apelido:this.#apelido},process.env.SEGREDO)
    }

    verificarToken(autorizacion){
       
        this.#userToken = jwt.verify(autorizacion,process.env.SEGREDO);
    }
    get Token(){
        return this.token
    }

    get userToken(){
        return this.#userToken
    }

}

module.exports = Token