import React from "react";
import PaginatedSection from "../../components/PaginatedSection";
import AuthorSection from "../../components/AuthorSection";
import Post from "../../components/Post";
import { getLimitPosts } from "../../WebAPI";
import { useState, useEffect } from "react";
import { Ring } from "react-awesome-spinners";
import {
  Container,
  PostsSection,
  LoadingSection,
} from "../../components/HomePage/HomePage";

const LoadingAnima = () => {
  const [loading] = useState(true);
  return loading && <Ring />;
};

const perPageCount = 5;

export default function HomePage() {
  const [postsData, setPostsData] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // 打 API 並帶上參數，哪一頁和每頁幾筆資料
    const response = getLimitPosts(currentPage + 1, perPageCount);

    //取得資料
    response
      .then((res) => {
        //取得總筆數
        setTotalCount(res.headers.get("x-total-count"));
        return res.json();
      })
      .then((data) => {
        setPostsData(data);
      });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <Container>
      <AuthorSection />
      {postsData && (
        <PostsSection>
          {postsData.map((postData) => (
            <Post key={postData.id} postData={postData} />
          ))}
          <PaginatedSection
            perPageCount={perPageCount}
            handlePageClick={handlePageClick}
            totalCount={totalCount}
          />
        </PostsSection>
      )}
      {!postsData && (
        <LoadingSection>
          <LoadingAnima />
        </LoadingSection>
      )}
    </Container>
  );
}
