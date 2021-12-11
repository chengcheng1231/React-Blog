import { React, useContext, useEffect, useState, useRouter } from "react"; // import React from 'react' //useRef 是 hook
import { Ring } from "react-awesome-spinners";
import { getSinglePost } from "../../WebAPI";
import { AuthContext } from "../../contexts";
import { deletePost } from "../../WebAPI";
import { Link, useParams } from "react-router-dom";
import {
  Root,
  PostContainer,
  PostTitle,
  PostDate,
  PostContent,
  LoadingSection,
  ButtonSection,
  PostEditButton,
  PostDeleteButton,
} from "../../components/SinglePage/SinglePage";

const LoadingAnima = () => {
  const [loading] = useState(true);
  return loading && <Ring />;
};

export default function SinglePage() {
  const [singlePosts, setSinglePosts] = useState("");
  const [postAuth, setPostAuth] = useState(null);
  const { slug } = useParams();
  const { user } = useContext(AuthContext); // 接收 App.js 傳的 context

  useEffect(() => {
    getSinglePost(slug).then((posts) => {
      setSinglePosts(posts[0]);
      if (user && user.id === posts[0].userId) {
        setPostAuth(true);
      }
    });
  }, [slug]);

  const handleDeletePost = async () => {
    const result = await deletePost(singlePosts.id);
    if (result) {
      window.location.assign("/");
    }
  };

  return (
    <Root>
      {singlePosts && (
        <PostContainer>
          <PostTitle>{singlePosts.title}</PostTitle>
          <PostDate>{new Date(singlePosts.createdAt).toDateString()}</PostDate>
          {postAuth && (
            <ButtonSection>
              <PostEditButton to={`/edit/${singlePosts.id}`}>
                編輯
              </PostEditButton>
              <PostDeleteButton onClick={handleDeletePost}>
                刪除
              </PostDeleteButton>
            </ButtonSection>
          )}
        </PostContainer>
      )}
      {singlePosts && <PostContent>{singlePosts.body}</PostContent>}
      {!singlePosts && (
        <LoadingSection>
          <LoadingAnima />
        </LoadingSection>
      )}
    </Root>
  );
}
