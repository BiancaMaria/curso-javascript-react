import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import BoardGame from "./objects/BoardGame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector('#root');
const $htmlPlayerName = PlayerName();
const $htmlBoardGame = BoardGame(6); 

$root.insertAdjacentHTML('beforebegin', $htmlPlayerName)
$root.insertAdjacentHTML('beforeend',$htmlBoardGame);



