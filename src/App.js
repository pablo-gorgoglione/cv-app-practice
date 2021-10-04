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
      educationalExperience: {
        schoolNameInput: "",
        titleInput: "",
        dateInput: {
          dateFromInput: "",
          dateToInput: "",
          checkDateInput: false,
        },
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
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleChangeGral = this.handleChangeGral.bind(this);
  }
  //changes on the general component..
  handleChangeGral = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      generalInformation: {
        ...prevState.generalInformation,
        [name]: value,
      },
    }));
  };
  //changes on educational and practical component..
  handleInputChange = (e, compName) => {
    const { name, value } = e.target;
    if (compName === "educationalExperience") {
      this.setState((prevState) => ({
        [compName]: {
          ...prevState.educationalExperience,
          [name]: value,
          dateInput: {
            ...prevState.educationalExperience.dateInput,
          },
        },
      }));
    } else {
      this.setState((prevState) => ({
        [compName]: {
          ...prevState.practicalExperience,
          [name]: value,
          dateInput: {
            ...prevState.practicalExperience.dateInput,
          },
        },
      }));
    }
  };
  handleDateChange = (e, compName) => {
    const { name, value, checked } = e.target;
    let tempValue;
    if (name === "checkDateInput") {
      tempValue = checked;
    } else {
      tempValue = value;
    }

    if (compName === "educationalExperience") {
      this.setState((prevState) => ({
        [compName]: {
          ...prevState.educationalExperience,
          dateInput: {
            ...prevState.educationalExperience.dateInput,
            [name]: tempValue,
          },
        },
      }));
    } else {
      this.setState((prevState) => ({
        [compName]: {
          ...prevState.practicalExperience,
          dateInput: {
            ...prevState.practicalExperience.dateInput,
            [name]: tempValue,
          },
        },
      }));
    }
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
          eduExp={educationalExperience}
          styles={haveBorder}
          handleChange={this.handleInputChange}
          handleDateChange={this.handleDateChange}
        />
        <PracticalExperience
          practExp={practicalExperience}
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
