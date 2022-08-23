console.log('** Administration Hotel **');

//import { start } from "repl";
//let presentation : any = require("./presentation.js");
import { Presentation } from "./presentation";
let presentation = new Presentation();
presentation.start();
