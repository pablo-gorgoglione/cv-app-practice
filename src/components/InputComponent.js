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
  editEducationals,
  addEdu,
  editEdu,
  deleteEdu,
  educationals,
  savePract,
  addPract,
  deletePract,
  movePract,
  practicals,

  styles,
}) {
  const testeando = () => {
    console.log(educationals);
  };

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
        addEdu={addEdu}
        editEdu={editEdu}
        deleteEdu={deleteEdu}
      />
      <div>
        {educationals.map((e, index) => {
          return (
            <button key={index} onClick={() => editEducationals(index)}>
              {index + 1}
            </button>
          );
        })}
        {educationals.length >= 5 ? (
          <button onClick={addEdu} disabled={true}>
            Add
          </button>
        ) : (
          <button onClick={addEdu} disabled={false}>
            Add
          </button>
        )}
      </div>

      <PracticalExperience
        practExp={practExp}
        styles={styles}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
        onSubmitTask={onSubmitTask}
        handleTaskChange={handleTaskChange}
        handleTaskDelete={handleTaskDelete}
        handleTaskEdit={handleTaskEdit}
        savePract={savePract}
        addPract={addPract}
        deletePract={deletePract}
        //movePract={movePract}
      />
      <div>
        {practicals.map((e, index) => {
          return (
            <button key={index} onClick={() => movePract(index)}>
              {index + 1}
            </button>
          );
        })}
        {practicals.length >= 5 ? (
          <button onClick={addPract} disabled={true}>
            Add
          </button>
        ) : (
          <button onClick={addPract} disabled={false}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}
