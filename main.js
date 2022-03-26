import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame"
import ScoreBoard from "./src/objects/ScoreBoard";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
  ${ScoreBoard()} 
  ${BoardGame(6)}
`
);
