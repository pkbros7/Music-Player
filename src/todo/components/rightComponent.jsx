import React from "react";
import rightStyles from "../styles/right.module.scss";
import { parseIfJson } from "../utils/parse";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const RightComponent = ({selectedValue , setSelectedValue}) => {
  const storedNotes = localStorage.getItem("storedValues") || [];


  const deleteButton = (id) => {
    const allValues = parseIfJson(storedNotes)

    const updatedValues = allValues.filter((eachVal) => eachVal.id !== id)

    const stringifyValues = JSON.stringify(updatedValues)
    localStorage.setItem('storedValues' ,stringifyValues )

    window.location.reload()
  }


  return (
    <div className={rightStyles.container}>
      {parseIfJson(storedNotes)?.map((eachNotes, index) => {
        return (
          <div key={index} className={rightStyles.eachTitle}>
            <div className={rightStyles.title}> {eachNotes.title}</div>
            <div className={rightStyles.buttons}>
              <button onClick={() => setSelectedValue(eachNotes.id)}>
                <EditOutlined />
              </button>
              <button onClick={() => deleteButton(eachNotes.id)}>
                <DeleteOutlined />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RightComponent;
