import React from "react";
import Navigation from "../components/Navigation";
import Experiences from "../components/knowledges/Experiences";
import Hobbies from "../components/knowledges/Hobbies";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Experiences />
        <Hobbies />
        <Languages />
        <OtherSkills />
      </div>
    </div>
  );
};

export default Knowledges;
