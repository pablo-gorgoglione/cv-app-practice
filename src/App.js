import React, { Component } from "react";
import uniqid from "uniqid";
import GeneralInformation from "./components/GeneralInformation";
import PracticalExperience from "./components/PracticalExperience";
import EducationalExperience from "./components/EducationalExperience";
import ViewComponent from "./components/ViewComponent";

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
        mainTasksInput: [],
        task: {
          text: "",
          id: uniqid(),
        },
        dateInput: {
          dateFromInput: "",
          dateToInput: "",
          checkDateInput: false,
        },
      },
      returnTheView: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleChangeGral = this.handleChangeGral.bind(this);
    this.handleChangeTask = this.handleChangeTask.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleTaskEdit = this.handleTaskEdit.bind(this);
  }

  //maybe the spread operators weren't necessary... only for nested objects.. or in all of them
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
      // changes on PracticalExperience Component.
      this.setState((prevState) => ({
        [compName]: {
          ...prevState.practicalExperience,
          [name]: value,
          task: {
            ...prevState.practicalExperience.task,
          },
          dateInput: {
            ...prevState.practicalExperience.dateInput,
          },
        },
      }));
    }
    console.log(this.state.practicalExperience, "  <--test");
  };
  //changes on the dates of practical and educational
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
  //switch to enable or disable the final view
  handleSubmitClick = () => {
    this.setState(() => ({
      returnTheView: !this.state.returnTheView,
    }));
  };

  //for task on practicalComponent Handlers
  handleChangeTask = (e) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      practicalExperience: {
        ...prevState.practicalExperience,
        task: {
          text: value,
          id: this.state.practicalExperience.task.id,
        },
        dateInput: {
          ...prevState.practicalExperience.dateInput,
        },
      },
    }));
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    const { mainTasksInput: stateTasks, task: stateTask } =
      this.state.practicalExperience;
    this.setState((prevState) => ({
      practicalExperience: {
        ...prevState.practicalExperience,
        mainTasksInput: stateTasks.concat(stateTask),
        task: {
          text: "",
          id: uniqid(),
        },
        dateInput: {
          ...prevState.practicalExperience.dateInput,
        },
      },
    }));
  };

  handleTaskDelete = (id) => {
    this.setState((prevState) => ({
      practicalExperience: {
        ...prevState.practicalExperience,
        mainTasksInput: this.state.practicalExperience.mainTasksInput.filter(
          (task) => task.id !== id
        ),
        task: {
          ...prevState.practicalExperience.task,
        },
        dateInput: {
          ...prevState.practicalExperience.dateInput,
        },
      },
    }));
  };
  handleTaskEdit = (text, id) => {
    const taskIndex = this.state.practicalExperience.mainTasksInput.findIndex(
      (t) => t.id === id
    );
    let stateTasks = [...this.state.practicalExperience.mainTasksInput];
    stateTasks[taskIndex] = { ...stateTasks[taskIndex], text: text };

    this.setState((prevState) => ({
      practicalExperience: {
        ...prevState.practicalExperience,
        mainTasksInput: stateTasks,
        task: {
          ...prevState.practicalExperience.task,
        },
        dateInput: {
          ...prevState.practicalExperience.dateInput,
        },
      },
    }));
  };

  render() {
    const haveBorder = {
      border: "2px solid #c00",
      margin: "10px 10px",
    };
    const {
      generalInformation,
      practicalExperience,
      educationalExperience,
      returnTheView,
    } = this.state;
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
          onSubmitTask={this.onSubmitTask}
          handleTaskChange={this.handleChangeTask}
          handleTaskDelete={this.handleTaskDelete}
          handleTaskEdit={this.handleTaskEdit}
        />
        <div style={haveBorder}>
          <button onClick={this.handleSubmitClick}>Submit</button>
          <button>Edit</button>
        </div>

        {returnTheView && (
          <div className="viewDiv">
            <ViewComponent content={this.state} styles={haveBorder} />
          </div>
        )}
      </div>
    );
  }
}
export default App;
