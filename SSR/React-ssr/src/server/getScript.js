import fs from "fs";

export  function getScript() {
    return fs.readdirSync('./public/js').filter(item=>item.endsWith('.js')).map(item=>`<script src=./js/${item}></script>`)[0];
}