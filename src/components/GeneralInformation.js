import React from "react";

export default function GeneralInformation() {
  return (
    <div className="GeneralInfo">
      <form>
        <h2>General Information</h2>
        <label htmlFor="NameInput">Name</label>
        <input type="text" id="NameInput" />
        <label htmlFor="LastNameInput">Last Name</label>
        <input type="text" id="LastNameInput" />
        <label htmlFor="EmailInput">Email</label>
        <input type="text" id="EmailInput" />
        <label htmlFor="PhoneNumberInput">Phone number</label>
        <input type="text" id="PhoneNumberInput" />
      </form>
    </div>
  );
}
