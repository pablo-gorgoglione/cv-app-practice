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
          dateFromInput: "",
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
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleChangeGral = this.handleChangeGral.bind(this);
  }
  //changes on the general component..
  handleChangeGral = (e) => {
    const { name, value } = e.target;
    this.setState({
      generalInformation: {
        ...this.state.generalInformation,
        [name]: value,
      },
    });
  };
  //changes on educational and practical component..
  handleInputChange = (e, compName) => {
    let tempState;
    const { name, value } = e.target;
    if (compName === "practicalExperience") {
      tempState = this.state.practicalExperience;
    } else {
      tempState = this.state.educationalExperience;
    }
    console.log(tempState, "  <-- ??ASD");
    this.setState({
      [compName]: {
        tempState,
        [name]: value,
        dateInput: {
          tempState,
        },
      },
    });
  };
  handleDateChange = (e, compName) => {
    const { name, value } = e.target;
    this.setState({
      [compName]: {
        ...this.state,
        dateInput: {
          ...this.state.compName,
          [name]: value,
        },
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
          handleChange={this.handleChangeGral}
        />
        <EducationalExperience
          educationalExperience
          practExp={educationalExperience}
          styles={haveBorder}
          handleChange={this.handleInputChange}
          handleDateChange={this.handleDateChange}
        />
        <PracticalExperience
          eduExp={practicalExperience}
          styles={haveBorder}
          handleChange={this.handleInputChange}
          handleDateChange={this.handleDateChange}
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
