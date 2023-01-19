import {default as Game, GameSavingData, writeGameSaving as loadGame, readGameSaving as saveGame} from "./game";

const game = new Game();
game.start();