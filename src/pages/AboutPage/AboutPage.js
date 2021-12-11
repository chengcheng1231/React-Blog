import React from "react";
import AuthorSection from "../../components/AuthorSection";
import {
  Container,
  AboutSection,
  AboutTitle,
  AuthorContent,
} from "../../components/AboutPage/AboutPage";

export default function AboutPage() {
  return (
    <Container>
      <AuthorSection />
      <AboutSection>
        <AboutTitle>About</AboutTitle>
        <AuthorContent>
          你好，這裡是一群由 Lidemy 的同學所經營的共筆部落格
          <br />
          Lidemy
          程式導師計畫標榜不喊口號也不誇大成效，開放透明的網頁前後端線上學習計畫，試著用六個月的時間，培養出一個找得到工作且基礎紮實的網頁工程師
          <br />
          詳情請洽：
          <a href="https://bootcamp.lidemy.com/index.html">
            https://bootcamp.lidemy.com
          </a>
        </AuthorContent>
      </AboutSection>
    </Container>
  );
}
