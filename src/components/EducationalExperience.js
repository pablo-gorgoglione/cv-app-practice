import React from "react";
import DateInput from "./DateInput";

export default function EducationalExperience({
  eduExp,
  styles,
  handleChange,
  handleDateChange,
  addEdu,
  editEdu,
  deleteEdu,
}) {
  const { schoolNameInput, titleInput, dateInput } = eduExp;
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
      </form>

      <button onClick={editEdu}> Save</button>
      <button onClick={deleteEdu}> Delete</button>
    </div>
  );
}
