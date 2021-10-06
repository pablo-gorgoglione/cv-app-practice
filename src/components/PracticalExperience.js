import React from "react";
import DateInput from "./DateInput";
import Task from "./Task";

export default function PracticalExperience({
  practExp,
  styles,
  handleChange,
  handleDateChange,
  handleTaskChange,
  onSubmitTask,
  handleTaskDelete,
  handleTaskEdit,
}) {
  const {
    companyNameInput,
    positionTitleInput,
    mainTasksInput,
    dateInput,
    task,
  } = practExp;
  const compName = "practicalExperience";
  return (
    <div style={styles}>
      <h2>Practical Experience</h2>
      <form>
        <label htmlFor="companyNameInput">Company Name</label>
        <input
          value={companyNameInput}
          onChange={(e) => handleChange(e, compName)}
          name="companyNameInput"
          type="text"
          id="companyNameInput"
        />
        <label htmlFor="positionTitleInput">Position Title</label>
        <input
          value={positionTitleInput}
          onChange={(e) => handleChange(e, compName)}
          name="positionTitleInput"
          type="text"
          id="positionTitleInput"
        />
        <label htmlFor="task">Task: </label>
        <input
          value={task.text}
          onChange={handleTaskChange}
          name="task"
          type="text"
          id="task"
        />
        <button onClick={onSubmitTask}>Add</button>

        <h3>Main Tasks</h3>
        <p>(max 5)</p>
        <ul>
          {mainTasksInput.map((t) => {
            return (
              <Task
                task={t}
                handleDelete={handleTaskDelete}
                handleEdit={handleTaskEdit}
              />
            );
          })}
        </ul>
        <DateInput
          compNameProp={compName}
          dateInput={dateInput}
          handleChange={handleDateChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(practExp, "  <--test");
          }}
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}
