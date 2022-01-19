import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import BoardGame from "./objects/BoardGame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `
  ${PlayerName("Player 1")} 
  ${PlayerName("Player 2")} 
  ${BoardGame(6)}
`
);
