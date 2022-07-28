import React from "react";

const Notfound = () => {
  return (
    <div className="Nav">
      <div className="navContent">
        <h4>Désolé cette page n'existe pas !</h4>
        <br />
        <a href="../" class="btn-primary">
          Revenez à l'accueil
        </a>
      </div>
    </div>
  );
};

export default Notfound;
