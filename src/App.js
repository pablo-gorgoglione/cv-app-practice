import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";
import "./App.css";
import EducationalExperience from "./components/EducationalExperience";

class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInformation: {
        nameInput: "",
        lastNameInput: "",
        emailInput: "",
        phoneNumberInput: "",
      },
      practicalExperience: {
        companyNameInput: "",
        positionTitleInput: "",
        mainTasksInput: "",
        dateInput: {
          dateFromInput: new Date().toLocaleString(),
          dateToInput: "",
          checkDateInput: false,
        },
      },
      educationalExperience: {
        schoolNameInput: "",
        titleInput: "",
        dateInput: {
          dateFromInput: "",
          dateToInput: "",
          checkDateInput: false,
        },
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (e, compName) => {
    const { name, value } = e.target;
    this.setState({
      [compName]: {
        ...this.state,
        [name]: value,
      },
    });
  };

  render() {
    const haveBorder = {
      border: "2px solid #c00",
      margin: "10px 10px",
    };
    const { generalInformation, practicalExperience, educationalExperience } =
      this.state;
    return (
      <div className="App" styles={haveBorder}>
        <header>CV-Creator</header>
        <GeneralInformation
          gnralInfo={generalInformation}
          styles={haveBorder}
          handleChange={this.handleInputChange}
        />
        <EducationalExperience
          practExp={practicalExperience}
          styles={haveBorder}
          handleChange={this.handleInputChange}
        />
        <PracticalExperience
          eduExp={educationalExperience}
          styles={haveBorder}
          handleChange={this.handleInputChange}
        />
        <div style={haveBorder}>
          <button>Submit</button>
          <button>Edit</button>
        </div>
      </div>
    );
  }
}
export default App;
