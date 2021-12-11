import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  margin: 0 auto;
`;

export const FormSection = styled.form`
  display: grid;
  margin-top: 100px;
  padding: 50px 30px 60px 30px;
  border: 1px solid #e1e0e0;
  border-radius: 15px;
  background: white;
`;

export const FormTitle = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const InputItem = styled.input`
  width: 300px;
  height: 30px;
  font-size: 24px;
  margin: 20px 0px 20px 0px;
  border: none;
  border-bottom: 1px solid black;
  :focus {
    outline: none;
  }
`;

export const SignButtonn = styled.button`
  margin-top: 20px;
  width: 300px;
  background: green;
  border: none;
  padding: 10px 20px 10px 20px;
  color: white;
  border-radius: 15px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background: #00800059;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;
