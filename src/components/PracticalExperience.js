import React from "react";
import DateInput from "./DateInput";

export default function PracticalExperience() {
  return (
    <div>
      <h2>Practical Experience</h2>
      <form>
        <label htmlFor="CNInput">Company Name</label>
        <input type="text" id="CNInput" />
        <label htmlFor="PTInput">Position Title</label>
        <input type="text" id="PTInput" />
        <label htmlFor="CNInput">Main Tasks</label>
        <input type="text" id="MTInput" />
        <DateInput />
      </form>
    </div>
  );
}
