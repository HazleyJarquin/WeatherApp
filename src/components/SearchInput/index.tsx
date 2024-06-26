import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchInputProps {
  inputValue: string;
  handleChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  inputValue,
  handleChange,
}) => {
  const [localValue, setLocalValue] = useState(inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleChange(localValue);
    }
  };

  const handleButtonClick = () => {
    setLocalValue(localValue);
    handleChange(localValue);
  };
  const handleButtonClickSingapur = () => {
    setLocalValue("Singapore");
    handleChange("Singapore"); // Cuando se hace clic en el botón "Singapur"
  };

  const handleButtonClickLondon = () => {
    setLocalValue("London");
    handleChange("London"); // Cuando se hace clic en el botón "London"
  };

  const handleButtonClickToronto = () => {
    setLocalValue("Toronto");
    handleChange("Toronto"); // Cuando se hace clic en el botón "Toronto"
  };

  const [t] = useTranslation("global");

  return (
    <Box w={["100%", "60%"]}>
      <Box display={"flex"} gap={"5px"} mb={"10px"}>
        <Input
          focusBorderColor={"green"}
          bg={"gray.900"}
          color={"white"}
          placeholder={t("SearchInput.Busca-ciudad")}
          size="md"
          _placeholder={{ color: "white" }}
          value={localValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <IconButton
          bg={"black"}
          color={"white"}
          aria-label="Search database"
          value={localValue}
          onClick={handleButtonClick}
          _hover={{ bg: "black" }}
          icon={<SearchIcon />}
        />
      </Box>
      <Box
        p={["1rem", "0rem"]}
        mt={"5px"}
        display={["none", "flex"]}
        justifyContent={"center"}
        gap={"10px"}
      >
        <Button
          color={"black"}
          rounded={"sm"}
          outline={"2px solid"}
          outlineColor={"black"}
          onClick={handleButtonClickSingapur}
        >
          Singapore
        </Button>
        <Button
          color={"black"}
          rounded={"sm"}
          outline={"2px solid"}
          outlineColor={"black"}
          onClick={handleButtonClickLondon}
        >
          London
        </Button>
        <Button
          color={"black"}
          rounded={"sm"}
          outline={"2px solid"}
          outlineColor={"black"}
          onClick={handleButtonClickToronto}
        >
          Toronto
        </Button>
      </Box>
    </Box>
  );
};

export default SearchInput;
