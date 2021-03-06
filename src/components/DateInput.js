import React from "react";

export default function DateInput({
  styles,
  dateInput,
  handleChange,
  compNameProp,
}) {
  const { dateFromInput, dateToInput, checkDateInput } = dateInput;
  return (
    <div style={styles}>
      <h3>Dates</h3>
      <label htmlFor="dateFromInput">Date from</label>
      <input
        value={dateFromInput}
        onChange={(e) => handleChange(e, compNameProp)}
        name="dateFromInput"
        type="date"
        id="dateFromInput"
        disabled={checkDateInput}
      />
      <label htmlFor="dateToInput">Date to</label>
      <input
        value={dateToInput}
        onChange={(e) => handleChange(e, compNameProp)}
        name="dateToInput"
        type="date"
        id="dateToInput"
        disabled={checkDateInput}
      />
      <label htmlFor="checkDateInput">On going</label>
      <input
        value={checkDateInput}
        onChange={(e) => handleChange(e, compNameProp)}
        name="checkDateInput"
        type="checkbox"
        id="checkDateInput"
      />
    </div>
  );
}
