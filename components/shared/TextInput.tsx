import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInputProps } from "react-native";

interface StyledTextInputProps extends TextInputProps {
  label?: string;
}

const TextInputWrapper = styled.View`
  margin-bottom: 10px;
`;

const StyledTextInput = styled.TextInput`
  border-width: 1px;
  border-color: gray;
  padding: 10px;
  border-radius: 5px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const TextInput: React.FC<StyledTextInputProps> = ({ label, ...props }) => {
  const [value, setValue] = useState("");

  const handleChange = (text: string) => {
    setValue(text);
  };

  return (
    <TextInputWrapper>
      {label && <Label>{label}</Label>}
      <StyledTextInput {...props} value={value} onChangeText={handleChange} />
    </TextInputWrapper>
  );
};

export default TextInput;
