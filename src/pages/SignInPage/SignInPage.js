import styled from "styled-components";
import { useState, useContext } from "react";
import { login, getMe } from "../../WebAPI";
import { setAuthToken, successAlert } from "../../utils";
import { AuthContext } from "../../contexts";
import { useHistory } from "react-router-dom";
import {
  Container,
  FormSection,
  FormTitle,
  InputItem,
  SignButtonn,
  ErrorMessage,
} from "../../components/AuthForm/AuthForm";

export default function SignInPage() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("Lidemy");
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    login(username, password).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      setAuthToken(data.token);

      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken(null);
          return setErrorMessage(response.toString());
        }
        setUser(response.data);
        successAlert("Log in successfully!", "Welcome back!", "success");
        history.push("/");
      });
    });
  };
  return (
    <Container>
      <FormSection onSubmit={handleSubmit}>
        <FormTitle>Welcome back.</FormTitle>
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
          <SignButtonn>登入</SignButtonn>
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </FormSection>
    </Container>
  );
}
