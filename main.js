import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import BoardGame from "./objects/BoardGame";
import PlayerGame from "./src/components/PlayerGame";

const $root = document.querySelector('#root');
const $htmlPlayerGame = PlayerGame();
const $htmlBoardGame = BoardGame(6); 

$root.insertAdjacentHTML('beforebegin', $htmlPlayerGame)
$root.insertAdjacentHTML('beforeend',$htmlBoardGame);



