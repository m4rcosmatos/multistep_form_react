import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const Thanks = () => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você recebera um cupom de 10%
        de desconto para sua proxima compra.
      </p>
      <p>Para concluir a sua avaliação clique no botao de enviar abaixo </p>
      <h3>Aqui esta o resumo da sua avaliaçao</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
      </p>
      <p className="review-data">
        <span>Comentario:</span>
      </p>
    </div>
  );
};

export default Thanks;
