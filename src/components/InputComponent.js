import GeneralInformation from "./GeneralInformation";
import PracticalExperience from "./PracticalExperience";
import EducationalExperience from "./EducationalExperience";
import React from "react";

export default function InputComponent({
  gnralInfo,
  practExp,
  eduExp,
  handleChange,
  handleChangeGral,
  handleDateChange,
  handleTaskChange,
  handleTaskDelete,
  handleTaskEdit,
  onSubmitTask,
  styles,
}) {
  return (
    <div>
      <GeneralInformation
        gnralInfo={gnralInfo}
        styles={styles}
        handleChange={handleChangeGral}
      />
      <EducationalExperience
        educationalExperience
        eduExp={eduExp}
        styles={styles}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />
      <PracticalExperience
        practExp={practExp}
        styles={styles}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
        onSubmitTask={onSubmitTask}
        handleTaskChange={handleTaskChange}
        handleTaskDelete={handleTaskDelete}
        handleTaskEdit={handleTaskEdit}
      />
    </div>
  );
}
