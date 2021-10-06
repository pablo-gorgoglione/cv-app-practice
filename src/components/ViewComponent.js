import React from "react";

export default function ViewComponent({ content, styles }) {
  const { generalInformation, educationalExperience, practicalExperience } =
    content;

  const { nameInput, lastNameInput, emailInput, phoneNumberInput } =
    generalInformation;

  const {
    schoolNameInput,
    titleInput,
    dateInput: dateEdu,
  } = educationalExperience;

  const {
    companyNameInput,
    positionTitleInput,
    mainTasksInput,
    dateInput: dateExp,
  } = practicalExperience;

  return (
    <div style={styles}>
      <h1> {nameInput} - CV</h1>
      <h3>
        Full name : {nameInput} {lastNameInput}
      </h3>
      <h4>Educational Experience</h4>
      <p>Date from: {dateEdu.dateFromInput}</p>
      <p>Date to: {dateEdu.dateToInput} </p>
      <p>Company name: {companyNameInput}</p>
    </div>
  );
}
