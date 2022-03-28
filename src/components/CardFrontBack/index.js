import CardGame from "../CardGame";

function CardFrontBack(){
  return /*html*/`
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame("javascript","Logo do javascript")}
      ${CardGame("html","Logo do html")}
    </article>`;
}

export default CardFrontBack;