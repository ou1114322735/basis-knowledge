import fs from "fs";

export  function getStypeLink() {
    return fs.readdirSync('./public/css').filter(item=>item.endsWith('.css')).map(item=>`<link rel="stylesheet" href="./css/${item}" />`)[0];
}