import styled from "styled-components";
import { useState } from "react";
import { register } from "../../WebAPI";
import { successAlert } from "../../utils";
import { useHistory } from "react-router-dom";
import {
  Container,
  FormSection,
  FormTitle,
  InputItem,
  SignButtonn,
  ErrorMessage,
} from "../../components/AuthForm/AuthForm";

export default function SignUpPage() {
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    register(nickname, username, password).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      successAlert(
        "Sign up successfully!",
        "Please Sign in to explore more",
        "success"
      );
      history.push("/signin");
    });
  };

  return (
    <Container>
      <FormSection onSubmit={handleSubmit}>
        <FormTitle>Welcome to sign up.</FormTitle>
        <InputItem
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <InputItem
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputItem
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <SignButtonn>註冊</SignButtonn>
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </FormSection>
    </Container>
  );
}
