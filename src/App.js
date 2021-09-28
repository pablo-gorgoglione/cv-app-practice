import React, { Component } from "react";
import EducationalExperience from "./components/EducationalExperience";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";

class App extends Component {
  constructor() {
    super();
    this.state = {
      educationalExperience: {
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      educationalExperience: {
        schoolName: "",
        title: "",
        dateFrom: "",
        dateTo: "",
        onGoing: false,
      },
      practicalExperience: {
        companyName: "",
        positionTitle: "",
        mainTasks: [],
        dateFrom: "",
        dateTo: "",
        onGoing: false,
      },
    };
  }
  render() {
    return (
      <div className="App">
        <header>CV-Creator</header>
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
        <div>
          <button>Submit</button>
          <button>Edit</button>
        </div>
      </div>
    );
  }
}
export default App;
