import "klondike/board.js";
import "klondike/game.js";
import "klondike/scoring.js";

angular.module("klondike", [
  "klondike.game",
  "klondike.board",
  "klondike.scoring"
]);