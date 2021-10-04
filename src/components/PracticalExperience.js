import React from "react";
import DateInput from "./DateInput";

export default function PracticalExperience({
  practExp,
  styles,
  handleChange,
  handleDateChange,
}) {
  const { companyNameInput, positionTitleInput, mainTasksInput, dateInput } =
    practExp;
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
        <label htmlFor="mainTasksInput">Main Tasks</label>
        <input
          value={mainTasksInput}
          onChange={(e) => handleChange(e, compName)}
          name="mainTasksInput"
          type="text"
          id="mainTasksInput"
        />
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
