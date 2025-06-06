import React, { useEffect, useState } from "react";
import LeftStyles from "../styles/left.module.scss";
import { DatePicker, Input } from "antd";
import dayjs from "dayjs";
import { parseIfJson } from "../utils/parse";

const ListSchema = {
  type: "",
  title: "",
  Date: "",
};

const LeftComponent = ({ selectedValue, setSelectedValue }) => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  const storedNotes = localStorage.getItem("storedValues") || [];

  const [noteValues, setNoteValues] = useState({
    type: "",
    title: "",
    date: "",
    id: new Date().getTime(),
  });

  const AddNote = () => {
    const newArr = [];

    const previousVals = parseIfJson(storedNotes);

    newArr.push(...previousVals, noteValues);
    const stringifyValues = JSON.stringify(newArr);
    localStorage.setItem("storedValues", stringifyValues);

    window.location.reload();
  };

  const UpdateNote = () => {
    const newArr = [];
    const previousVals = parseIfJson(storedNotes);

    const removeOldVals = previousVals.filter((eachVal) => eachVal.id !== selectedValue)
    
    newArr.push(...removeOldVals , noteValues);
    const stringifyValues = JSON.stringify(newArr);
    localStorage.setItem("storedValues", stringifyValues);

    setSelectedValue({})
    window.location.reload();
  };

  useEffect(() => {
    const allValues = parseIfJson(storedNotes);

    const updatedValues = allValues.find(
      (eachVal) => eachVal.id == selectedValue
    );

    setNoteValues(updatedValues);
  }, [selectedValue]);

  return (
    <div className={LeftStyles.container}>
      <div className={LeftStyles.title}>Add A Note</div>

      <Input
        placeholder="Enter a category"
        variant="underlined"
        className={LeftStyles.inputStyles}
        onChange={(e) => setNoteValues({ ...noteValues, type: e.target.value })}
        value={noteValues?.type}
      />

      <Input
        placeholder="Enter a title"
        variant="underlined"
        className={LeftStyles.inputStyles}
        onChange={(e) =>
          setNoteValues({ ...noteValues, title: e.target.value })
        }
        value={noteValues?.title}
      />

      <DatePicker
        defaultValue={dayjs(
          noteValues?.date || "01/01/2025",
          dateFormatList[0]
        )}
        format={dateFormatList}
        className={LeftStyles.datePicker}
        onChange={(date, dateString) =>
          setNoteValues({ ...noteValues, date: dateString })
        }
      />

      <button
        className={LeftStyles.submit}
        onClick={() => {
          if (selectedValue) {
            UpdateNote()
          } else {
            AddNote();
          }
        }}
      >
        {selectedValue ? "Update" : "Submit"}
      </button>
    </div>
  );
};

export default LeftComponent;
