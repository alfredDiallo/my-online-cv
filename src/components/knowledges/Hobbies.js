import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Interêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i> <span>Course à pied</span>
        </li>
        <li className="hobby">
          <i className="fas fa-futbol"></i>
          <span>Football</span>
        </li>
        <li className="hobby">
          <i className="fas fa-gamepad"></i>
          <span>Gaming</span>
        </li>
        <li className="hobby">
          <i className="fas fa-wallet"></i>
          <span>Bourse</span>
        </li>
        <li className="hobby">
          <i className="fas fa-egg"></i>
          <span>Patisserie</span>
        </li>
        <li className="hobby">
          <i className="fas fa-seedling"></i> <span>Environnement</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
