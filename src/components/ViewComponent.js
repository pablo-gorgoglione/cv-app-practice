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
      <p> School Name: {schoolNameInput}</p>
      <p> Title Name: {titleInput}</p>
      {dateEdu.checkDateInput ? (
        <p> Dates: On going</p>
      ) : (
        <div>
          <p> Date from: {dateEdu.dateFromInput}</p>
          <p>Date to: {dateEdu.dateToInput}</p>
        </div>
      )}
      <h4>Practical Experience</h4>
      <p>Company Name: {companyNameInput}</p>
      <p>Position Title: {positionTitleInput}</p>
      <p>Main task of the job:</p>
      <ul>
        {mainTasksInput.map((t) => {
          return <li>{t.text}</li>;
        })}
      </ul>
      {dateExp.checkDateInput ? (
        <p> Dates: On going</p>
      ) : (
        <div>
          <p> Date from: {dateExp.dateFromInput}</p>
          <p>Date to: {dateExp.dateToInput}</p>
        </div>
      )}
      <h4>Contact</h4>
      <p> Email: {emailInput}</p>
      <p>Tel: {phoneNumberInput}</p>
    </div>
  );
}
