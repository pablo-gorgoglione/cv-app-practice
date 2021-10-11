import React, { useState } from "react";
import uniqid from "uniqid";
import ViewComponent from "./components/ViewComponent";
import InputComponent from "./components/InputComponent";

const App = () => {
  const initialValueGrl = {
    nameInput: "",
    lastNameInput: "",
    emailInput: "",
    phoneNumberInput: "",
  };
  const initialValueEdu = {
    id: uniqid(),
    schoolNameInput: "",
    titleInput: "",
    dateInput: {
      dateFromInput: "",
      dateToInput: "",
      checkDateInput: false,
    },
  };
  /* const initialValueEdu = {
    id: 0,
    schoolNameInput: "",
    titleInput: "",
    dateInput: {
      dateFromInput: "",
      dateToInput: "",
      checkDateInput: false,
    },
  }; */

  const initialValuePrac = {
    id: uniqid(),
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
  };

  //const [generalInput, setGeneraltInput] = useState(initialValueGrl);
  const [eduIndex, setEduIndex] = useState(0);
  const [test1, setTest1] = useState(0);
  const [educationalInput, setEducationalInput] = useState(initialValueEdu);
  const [practicalInput, setPracticalInput] = useState(initialValuePrac);
  //General is an object, educationals and praticals are arrays.
  const [general, setGeneraltInfo] = useState(initialValueGrl);
  const [educationals, setEducationals] = useState([]);
  const [practicals, setPracticals] = useState([]);
  const [controlView, setcontrolView] = useState(false);

  //maybe the spread operators weren't necessary... only for nested objects.. or in all of them
  //changes on the general component..
  const handleChangeGral = (e) => {
    const { name, value } = e.target;
    setGeneraltInfo({
      ...general,
      [name]: value,
    });
  };

  //changes on educational and practical component..
  const handleInputChange = (e, compName) => {
    const { name, value } = e.target;
    if (compName === "educationalExperience") {
      setEducationalInput({
        ...educationalInput,
        [name]: value,
        dateInput: {
          ...educationalInput.dateInput,
        },
      });
    } else {
      // changes on PracticalExperience Component.
      setPracticalInput({
        ...practicalInput,
        [name]: value,
        task: {
          ...practicalInput.task,
        },
        dateInput: {
          ...practicalInput.dateInput,
        },
      });
    }
  };
  //changes on the dates of practical and educational
  const handleDateChange = (e, compName) => {
    const { name, value, checked } = e.target;
    let tempValue;
    if (name === "checkDateInput") {
      tempValue = checked;
    } else {
      tempValue = value;
    }
    console.log(tempValue, "  <- Pero que wea");
    if (compName === "educationalExperience") {
      setEducationalInput({
        ...educationalInput,
        dateInput: {
          ...educationalInput.dateInput,
          [name]: tempValue,
        },
      });
    } else {
      setPracticalInput({
        ...practicalInput,
        dateInput: {
          ...practicalInput.dateInput,
          [name]: tempValue,
        },
      });
    }
  };
  //switch to enable or disable the final view
  const handleSubmitClick = () => {
    setcontrolView(!controlView);
  };

  //for task on practicalComponent Handlers
  //Change to make, will be to pass an argument of the index.praticals that is being changed ...
  const handleChangeTask = (e) => {
    const { value } = e.target;
    setPracticalInput({
      ...practicalInput,
      task: {
        text: value,
        id: practicalInput.task.id,
      },
      dateInput: {
        ...practicalInput.dateInput,
      },
    });
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    const { mainTasksInput: stateTasks, task: stateTask } = practicalInput;
    setPracticalInput({
      ...practicalInput,
      mainTasksInput: stateTasks.concat(stateTask),
      task: {
        text: "",
        id: uniqid(),
      },
      dateInput: {
        ...practicalInput.dateInput,
      },
    });
  };

  const handleTaskDelete = (id) => {
    setPracticalInput({
      ...practicalInput,
      mainTasksInput: practicalInput.mainTasksInput.filter(
        (task) => task.id !== id
      ),
      task: {
        ...practicalInput.task,
      },
      dateInput: {
        ...practicalInput.dateInput,
      },
    });
  };

  const handleTaskEdit = (text, id) => {
    const taskIndex = practicalInput.mainTasksInput.findIndex(
      (t) => t.id === id
    );
    let stateTasks = [...practicalInput.mainTasksInput];
    stateTasks[taskIndex] = { ...stateTasks[taskIndex], text: text };

    setPracticalInput({
      ...practicalInput,
      mainTasksInput: stateTasks,
      task: {
        ...practicalInput.task,
      },
      dateInput: {
        ...practicalInput.dateInput,
      },
    });
  };

  //Educationals buttons
  // save educationals
  const editEducational = () => {
    let exists;
    if (educationals.length === 0) {
      setEducationals([...educationals, educationalInput]);
      setEducationalInput(initialValueEdu);
      console.log("check1");
    } else {
      let index = educationals.findIndex(
        (edu) => edu.id === educationalInput.id
      );
      educationals.forEach((element) => {
        if (element.id === educationalInput.id) {
          exists = true;
        }
      });
      if (exists) {
        let newEducationals = educationals;
        newEducationals[index] = educationalInput;
        setEducationals(newEducationals);
        console.log("Anduvo bien");
      } else {
        console.log("paso de largo ... ");
        setEducationals([...educationals, educationalInput]);
        setEducationalInput(initialValueEdu);
      }
    }
  };
  const addEducational = () => {
    let exists;
    let index = educationals.findIndex((edu) => edu.id === educationalInput.id);
    educationals.forEach((element) => {
      if (element.id === educationalInput.id) {
        exists = true;
      }
    });
    if (exists) {
      let newEducationals = educationals;
      newEducationals[index] = educationalInput;
      setEducationals(newEducationals);
      console.log("Anduvo bien");
      setEducationalInput(initialValueEdu);
    } else {
      console.log("paso de largo ... ");
      setEducationals([...educationals, educationalInput]);
      setEducationalInput(initialValueEdu);
    }
  };
  const deleteEducational = () => {
    let index = educationals.findIndex((edu) => edu.id === educationalInput.id);
    let tempState = educationals;
    tempState.splice(index, 1);
    setEducationals(tempState);
    setEducationalInput(initialValueEdu);
  };
  //change the one that is showing on the inputs
  const editEducationals = (index) => {
    setEducationalInput(educationals[index]);
  };
  //Practical Buttons
  const savePracticals = () => {
    let exists;
    if (practicals.length === 0) {
      setPracticals([...practicals, practicalInput]);
      setPracticalInput(initialValuePrac);
      console.log("check1");
    } else {
      let index = practicals.findIndex(
        (pract) => pract.id === practicalInput.id
      );
      practicals.forEach((element) => {
        if (element.id === practicalInput.id) {
          exists = true;
        }
      });
      if (exists) {
        let newPract = practicals;
        newPract[index] = practicalInput;
        setPracticals(newPract);
        console.log("Anduvo bien");
      } else {
        console.log("paso de largo ... ");
        setPracticals([...practicals, practicalInput]);
        setPracticalInput(initialValuePrac);
      }
    }
  };
  const addPraticals = () => {
    let exists;
    let index = practicals.findIndex((pract) => pract.id === practicalInput.id);
    practicals.forEach((element) => {
      if (element.id === practicalInput.id) {
        exists = true;
      }
    });
    if (exists) {
      let newPract = practicals;
      newPract[index] = practicalInput;
      setPracticals(newPract);
      console.log("Anduvo bien");
      setPracticalInput(initialValuePrac);
    } else {
      console.log("paso de largo ... ");
      setPracticals([...practicals, practicalInput]);
      setPracticalInput(initialValuePrac);
    }
  };
  const deletePractical = () => {
    let index = practicals.findIndex((pract) => pract.id === practicalInput.id);
    let tempState = practicals;
    tempState.splice(index, 1);
    setPracticals(tempState);
    setPracticalInput(initialValuePrac);
  };
  //change the one that is showing on the inputs
  const movePractical = (index) => {
    setPracticalInput(practicals[index]);
  };
  const haveBorder = {
    border: "2px solid #c00",
    margin: "10px 10px",
  };

  return (
    <div className="App" styles={haveBorder}>
      <header>CV-Creator</header>
      {controlView && <button onClick={handleSubmitClick}>EDIT</button>}
      {controlView ? (
        <ViewComponent
          gnralInfo={general}
          practExp={practicals}
          eduExp={educationals}
          styles={haveBorder}
        />
      ) : (
        <InputComponent
          gnralInfo={general}
          practExp={practicalInput}
          eduExp={educationalInput}
          handleChange={handleInputChange}
          handleChangeGral={handleChangeGral}
          handleDateChange={handleDateChange}
          handleTaskChange={handleChangeTask}
          onSubmitTask={onSubmitTask}
          handleTaskDelete={handleTaskDelete}
          handleTaskEdit={handleTaskEdit}
          //educationals
          educationals={educationals}
          addEdu={addEducational}
          editEdu={editEducational}
          deleteEdu={deleteEducational}
          editEducationals={editEducationals}
          //practicals
          practicals={practicals}
          savePract={savePracticals}
          addPract={addPraticals}
          deletePract={deletePractical}
          movePract={movePractical}
          styles={haveBorder}
        />
      )}
      {!controlView && <button onClick={handleSubmitClick}>Preview</button>}
    </div>
  );
};

export default App;
