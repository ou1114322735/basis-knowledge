import React from 'react';
import ReactDom from 'react-dom/server'
import App from "./App";
import {getScript} from "./getScript"
import {getStypeLink} from "./getStyleLink"
export default (req,res)=>{
    const context = {};
    const HtmlElement = ReactDom.renderToString(<App location={req.path} context={context}/>)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        ${getStypeLink()}
    </head>
    <body>
        <div id='root'>${HtmlElement}</div>
        ${getScript()}
    </body>
    </html>
    `)
}