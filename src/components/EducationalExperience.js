import React from "react";
import DateInput from "./DateInput";

export default function EducationalExperience({
  practExp,
  styles,
  handleChange,
  handleDateChange,
}) {
  const { schoolNameInput, titleInput, dateInput } = practExp;
  const compName = "educationalExperience";
  return (
    <div style={styles}>
      <h2>Educational Experience</h2>
      <form>
        <label htmlFor="schoolNameInput">School Name</label>
        <input
          value={schoolNameInput}
          onChange={(e) => handleChange(e, compName)}
          type="text"
          id="schoolNameInput"
          name="schoolNameInput"
        />
        <label htmlFor="titleInput">Title of study</label>
        <input
          value={titleInput}
          onChange={(e) => handleChange(e, compName)}
          type="text"
          id="titleInput"
          name="titleInput"
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
