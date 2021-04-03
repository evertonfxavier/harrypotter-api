import React from "react";
import { Box } from "@chakra-ui/react";
import Select from "react-select";

interface ISelect {
  options: any;
  onChange: any;
}

const SelectComponent: React.FC<ISelect> = ({ options, onChange }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      alignItems: "center",
      display: "flex",
      color: "black",
      //   backgroundColor: "blue"
    }),
    // container: (provided, state) => ({
    //   ...provided,
    //   height: 64,
    // }),
    // control: (provided, state) => ({
    //   ...provided,
    //   height: 64,
    // }),
    // valueContainer: (provided, state) => ({
    //   ...provided,
    //   height: 42,
    //   padding: "0 14px",
    // }),
  };

  return (
    <Box w="20rem">
      <Select
        name="select house"
        isClearable
        className="basic-single"
        classNamePrefix="select"
        styles={customStyles}
        options={options}
        onChange={onChange}
      />
    </Box>
  );
};

export default SelectComponent;
