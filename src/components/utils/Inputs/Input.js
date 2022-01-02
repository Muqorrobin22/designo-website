import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Error } from "../../../assets/contact/desktop/icon-error.svg";

function Input({ type, placeholder }) {
  const [input, setInput] = useState("");
  const [inputValid, setInputValid] = useState(false);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    let userInput = e.target.value;

    if (userInput.trim() !== "") {
      setInputValid(true);
    }
  };

  const error = !inputValid && (
    <div className="error">
      <h3>Cant be empty</h3>
      <Error />
    </div>
  );

  return (
    <InputWrap validInput={inputValid}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={inputChangeHandler}
        value={input}
      />
      {error}
    </InputWrap>
  );
}

export function TextArea({ placeholder }) {
  return (
    <InputWrap>
      <textarea placeholder={placeholder} />
    </InputWrap>
  );
}

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  margin-top: 2.5rem;
  input,
  textarea {
    width: 70%;
    height: 3.7rem;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-family: Jost;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    padding-left: 2rem;
  }

  textarea {
    height: 7.6rem;
  }

  input:focus,
  input:active,
  input:hover,
  textarea:focus,
  textarea:active,
  textarea:hover {
    background-color: transparent;
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: white;
    opacity: 0.6;
  }

  .error {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-family: Jost;
      font-style: italic;
      font-weight: normal;
      font-size: 12px;
      color: #ffffff;
    }
  }
`;

export default Input;
