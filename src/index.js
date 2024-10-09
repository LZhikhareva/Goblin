import "./css/style.css";

import { Board } from "./js/app";
import src from './img/goblin.png';

// TODO: write your code in app.js

const boardlist = new Board(4);
boardlist.generateBoard();

boardlist.addHero(src)


setInterval(() => {
    boardlist.addHero(src);
}, 2000);