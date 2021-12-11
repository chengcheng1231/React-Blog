import { useState } from "react";
import { addPost } from "../../WebAPI";
import { useContext } from "react";
import { AuthContext } from "../../contexts";
import { successAlert } from "../../utils";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import {
  Container,
  FormSection,
  FormTitle,
  InputItem,
  InputTextArea,
  PublishSection,
  PublishButtonn,
  ErrorMessage,
} from "../../components/HandlePost/HandlePost";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState(" ");
  const { user } = useContext(AuthContext); // 接收 App.js 傳的 context
  const history = useHistory();

  // 檢查如果沒有登入就返回首頁

  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, body).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      successAlert("Publish successfully!", "", "success");
      history.push("/");
    });
  };

  return (
    <Container>
      <FormSection onSubmit={handleSubmit}>
        <FormTitle>Write a story.</FormTitle>
        <InputItem
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputTextArea
          placeholder="Tell your story..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <PublishSection>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <PublishButtonn>發布</PublishButtonn>
        </PublishSection>
      </FormSection>
    </Container>
  );
}
