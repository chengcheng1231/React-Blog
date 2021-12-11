import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled.div`
  max-width: 700px;
  margin: 40px auto;
`;

export const PostContainer = styled.div`
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  align-items: flex-end;
  justify-content: space-between;
`;

export const PostTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

export const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  color: #afadad;
  margin: 20px 0px 20px 0px;
`;

export const PostContent = styled.div`
  margin-top: 28px;
  font-size: 24px;
`;

export const LoadingSection = styled.div`
  width: 680px;
  padding: 200px 300px;
`;

export const ButtonSection = styled.div`
  display: flex;
`;

export const PostEditButton = styled(Link)`
  width: 60px;
  background: green;
  border: none;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin: 6px 6px 6px 0px;
  text-align: center;
  padding: 4px;
  text-decoration: none;
  &:hover {
    background: #00800059;
  }
`;

export const PostDeleteButton = styled.div`
  width: 60px;
  background: #9b2233;
  border: none;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin: 6px 6px 6px 0px;
  text-align: center;
  padding: 4px;
  &:hover {
    background: #cf4d59;
  }
`;
