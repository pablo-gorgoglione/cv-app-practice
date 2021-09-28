import React from "react";
import DateInput from "./DateInput";

export default function EducationalExperience() {
  return (
    <div>
      <h2>Educational Experience</h2>
      <form>
        <label htmlFor="SchoolNameInput">School Name</label>
        <input type="text" id="SchoolNameInput" />
        <label htmlFor="TitleInput">Title of study</label>
        <input type="text" id="TitleInput" />
        <DateInput />
      </form>
    </div>
  );
}
