import styled from "styled-components";

export const Container = styled.div`
  max-width: 1250px;
  display: flex;
  justify-content: left;
  padding-bottom: 50px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    justify-content: left;
  }
`;

export const PostsSection = styled.div`
  padding: 0px 30px;
  font-family: sans-serif;
  @media (max-width: 400px) {
    padding: 0px 0px;
  }
`;

export const LoadingSection = styled.div`
  width: 680px;
  padding: 350px;
`;
