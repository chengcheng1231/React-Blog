import styled from "styled-components";
import { useState } from "react";
import { editPost, getSinglePost } from "../../WebAPI";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts";
import { successAlert } from "../../utils";
import { useHistory, useParams } from "react-router-dom";
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

export default function EditPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [singlePosts, setSinglePosts] = useState("");
  const [errorMessage, setErrorMessage] = useState(" ");
  const { user } = useContext(AuthContext); // 接收 App.js 傳的 context
  const { slug } = useParams();
  const history = useHistory();

  // 檢查如果沒有登入就返回首頁
  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    getSinglePost(slug).then((posts) => {
      if (user && user.id !== posts[0].userId) {
        window.location.assign("/");
      }
      setSinglePosts(posts[0]);
      setTitle(posts[0].title);
      setBody(posts[0].body);
    });
  }, [slug]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || body === "")
      return setErrorMessage("Title or content is required");
    editPost(singlePosts.id, title, body).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      successAlert("Change successfully!", "", "success");
      history.push(`/page/${singlePosts.id}`);
    });
  };

  return (
    <Container>
      <FormSection onSubmit={handleSubmit}>
        <FormTitle>Edit your story.</FormTitle>
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
          <PublishButtonn>修改完成</PublishButtonn>
        </PublishSection>
      </FormSection>
    </Container>
  );
}
