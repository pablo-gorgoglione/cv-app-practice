import React from "react";

export default function GeneralInformation({
  styles,
  gnralInfo,
  handleChange,
}) {
  const { nameInput, lastNameInput, emailInput, phoneNumberInput } = gnralInfo;
  return (
    <div className="GeneralInfo" style={styles}>
      <form>
        <h2>General Information</h2>
        <label htmlFor="nameInput">Name</label>
        <input
          value={nameInput}
          onChange={(e) => handleChange(e)}
          type="text"
          id="nameInput"
          name="nameInput"
        />
        <label htmlFor="lastNameInput">Last Name</label>
        <input
          value={lastNameInput}
          onChange={(e) => handleChange(e)}
          type="text"
          id="lastNameInput"
          name="lastNameInput"
        />
        <label htmlFor="emailInput">Email</label>
        <input
          value={emailInput}
          onChange={(e) => handleChange(e)}
          type="text"
          id="emailInput"
          name="emailInput"
        />
        <label htmlFor="phoneNumberInput">Phone number</label>
        <input
          value={phoneNumberInput}
          onChange={(e) => handleChange(e)}
          type="text"
          id="phoneNumberInput"
          name="phoneNumberInput"
        />
      </form>
    </div>
  );
}
