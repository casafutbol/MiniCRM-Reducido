# Observacións 
## Indice
- [Typedoc](#TYPEDOC)
- [Servidor-Front](#Servidor-FRONT)
- [Creacion_da_carpeta_docsFRONT](#creación-da-carpeta-docsfront)
- [JSDoc](#JSDoc)

## TYPEDOC

> Antes de ler este documento deberás ter lido o proxecto de 
[Inicio con TypeDoc]("[text](https://github.com/cursosisraelsp/InicioConTypeDoc)")

> [!NOTE] 
> ***Estamos a comenzar a usar `TypeDoc` e `JSDoc`***

Pero en calquer caso, para que sexa executado o ***typedoc***, está creado un comando para xerar neste caso `docsFRONT`, sendo o seguinte:

```bash
npm run typedoc
```
## Servidor FRONT
Creamos un servidor aparte `serverDocumentacionFront.js`.

Este servizo actuará para tratar de visualizar a documentación do proxecto de `typescript`.

```javascript
const express = require("express");
const path = require("path");

const app = express();

// USE

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "docsFRONT")));

//START SERVER
app.listen(5000, function () {
 console.log("Server documentacion FRONT");
});
```
> Date conta que este `servizo` está no porto **5000**, e ten como carpeta compartida **docsFRONT**

Para visualizalo, simplemente deberías executar:

```bash
node serverDocumentacionFront.js
```

## Comentarios 
> Agreguei diferentes comentarios nos diferentes arquivos `typescript` para poder lelos

## Creación da carpeta `docsFRONT`

Creo unha nova carpeta cada vez que xenere a documentación, chamada `docsFRONT`.

Isto está configurado en `tsconfig.json` do seguinte xeito:

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "module": "NodeNext",
    "target": "ES2022",
    "moduleResolution":"nodenext"
  },
  "typedocOptions": {
    "entryPoints": [
      "src/**/*.ts" // <--- take everything from this location
    ],
    "out": "docsFRONT/" // <--- output directory
  }
}
```

## JSDoc

Crearemos un arquivo `jsdoc.json`,

```json
{
    "source": {
        "include": ["controladores","server.js"],
        "includePattern": ".js$"
    },
    "opts": {
      "destination": "./docsBACK",
      "recurse": true
    }
}
```


Está configurado no `package.json` o seguinte:
```bash
"jsdoc": "npx jsdoc -c jsdoc.json"
```
Este será executado na consola, mediante:

```bash
npm run jsdoc
```

Isto xenerará a carpeta `docsBACK`, que conterá diferentes arquivos cun `index.html`.

Deberemos crear un servidor para esta documentación, neste caso temos creado un arquivo `serverDocumentacionBack.js`, que contén o seguinte:

```javascript
const express = require("express");
const path = require("path");

const app = express();

// USE

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "docsBACK")));

//START SERVER
app.listen(4000, function () {
 console.log("Server documentacion BACK");
});
```# MiniCRM-Reducido
# MiniCRM-Reducido
