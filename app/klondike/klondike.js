import angular from "angular";

import "./board.js";
import "./game.js";
import { Scoring } from "./scoring.js";

angular.module("klondike.scoring", [])
  .service("scoring", [Scoring]);

angular.module("klondike", [
  "klondike.game",
  "klondike.board",
  "klondike.scoring"
]);