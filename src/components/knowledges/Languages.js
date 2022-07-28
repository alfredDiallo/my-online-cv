import { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.4 },
      { id: 2, value: "Html", xp: 1.6 },
      { id: 3, value: "Css", xp: 1.6 },
      { id: 4, value: "Php", xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.4 },
      { id: 2, value: "Sass", xp: 0.6 },
      { id: 3, value: "Vue", xp: 0.5 },
      { id: 4, value: "Bootstrap", xp: 0.6 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title=" Languages"
        />
        <ProgressBar
          languages={frameworks}
          title="Frameworks & Bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}

export default Languages;
