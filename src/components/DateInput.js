import React from "react";

export default function DateInput() {
  return (
    <div>
      <h3>Dates</h3>
      <label htmlFor="CNInput">Date from</label>
      <input type="date" id="CNInput" />
      <label htmlFor="CNInput">Date to</label>
      <input type="date" id="CNInput" />
      <label htmlFor="CheckDateInput">On going</label>
      <input type="checkbox" name="DateInput" id="CheckDateInput" />
    </div>
  );
}
