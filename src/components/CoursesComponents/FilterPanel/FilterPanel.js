import React from "react";
import CheckboxProton from "../../Generic/CheckboxProton/CheckboxProton";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import "./FilterPanel.css";

const FilterPanel = ({ category, changeChecked }) => {
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <FormControl id="demo-radio-buttons-group-label">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {category.map((category) => (
              <CheckboxProton
                key={category.id}
                category={category}
                changeChecked={changeChecked}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default FilterPanel;
