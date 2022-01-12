import "./styles/settings/colors.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import CardGame from './src/components/CardGame';

const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();

//console.log($htmlCardGame);
$root.insertAdjacentHTML('beforeend',$htmlCardGame);
