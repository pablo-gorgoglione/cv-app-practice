import React from "react";

export default function GeneralInformation({
  styles,
  gnralInfo,
  handleChange,
}) {
  const { nameInput, lastNameInput, emailInput, phoneNumberInput } = gnralInfo;
  const compName = "generalInformation";
  return (
    <div className="GeneralInfo" style={styles}>
      <form>
        <h2>General Information</h2>
        <label htmlFor="nameInput">Name</label>
        <input
          value={nameInput}
          onChange={(e) => handleChange(e, compName)}
          type="text"
          id="nameInput"
          name="nameInput"
          required={true}
        />
        <label htmlFor="lastNameInput">Last Name</label>
        <input
          value={lastNameInput}
          onChange={(e) => handleChange(e, compName)}
          type="text"
          id="lastNameInput"
          name="lastNameInput"
          required
        />
        <label htmlFor="emailInput">Email</label>
        <input
          value={emailInput}
          onChange={(e) => handleChange(e, compName)}
          type="email"
          id="emailInput"
          name="emailInput"
          required
        />
        <label htmlFor="phoneNumberInput">Phone number</label>
        <input
          value={phoneNumberInput}
          onChange={(e) => handleChange(e, compName)}
          type="text"
          id="phoneNumberInput"
          name="phoneNumberInput"
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}
