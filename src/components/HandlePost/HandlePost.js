import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  margin: 0 auto;
`;

export const FormSection = styled.form`
  width: 60vw;
  max-width: 1000px;
  display: grid;
  margin-top: 30px;
  padding: 30px 30px 60px 30px;
  border: 1px solid #999595;
  border-radius: 8px;
  background: white;
`;

export const FormTitle = styled.div`
  font-size: 30px;
`;

export const InputItem = styled.input`
  max-width: 1000px;
  height: 40px;
  font-size: 28px;
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid #999595;
  font-family: MONOSPACE;
  :focus {
    outline: none;
  }
  @media (max-width: 500px) {
    width: 220px;
  }
`;

export const InputTextArea = styled.textarea`
  max-width: 1000px;
  height: 600px;
  font-size: 24px;
  margin-top: 16px;
  border: 1px solid #999595;
  border-radius: 5px;
  font-family: MONOSPACE;
  :focus {
    outline: none;
  }
  @media (max-width: 500px) {
    width: 220px;
  }
`;

export const PublishSection = styled.div`
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    width: 220px;
  }
`;

export const PublishButtonn = styled.button`
  width: 300px;
  background: green;
  border: none;
  padding: 10px 20px 10px 20px;
  color: white;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background: #00800059;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;
