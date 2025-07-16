import React from 'react';
import './Sobre.css';
import sobre1 from '../assets/sobre1.png';
import sobre2 from '../assets/sobre2.png';

function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-texto">
        <h2>Sobre a AL SKIN</h2>
        <h4>QUEM SOMOS</h4>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
        </p>

        <h4>POR QUE EXISTIMOS?</h4>
        <p>
          Neme enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...
        </p>

        <h4>O QUE A GENTE FAZ?</h4>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet...
        </p>

        <img src={sobre1} alt="Imagem gota" className="sobre-img" />
      </div>

      <div className="sobre-lateral">
        <img src={sobre2} alt="Imagem tubo" className="sobre-img" />
        <div className="sobre-contato">
          <h4>VAMOS CONVERSAR?</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
          <button className="btn-fale">💬 Fale conosco</button>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
