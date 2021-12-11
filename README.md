## 【React】：部落格
### 以 React 來製作具備看文章、發文、刪文、編輯的部落格系統
- [網站 Demo](https://chengcheng1231.github.io/React-Blog/#/)
### 使用技術：
- 以 React-router 實現 SPA 部落格系統
- 以 JSX 語法撰寫元件並用 styled-component 切版
- 使用 funciton component 及 hooks
- 支援 RWD
- useState 管理狀態
- 使用 Prettier 讓程式碼格式統一
- 使用 react-paginate 做分頁

![Imgur](https://i.imgur.com/1ApJKC0.gif)

### 功能
- 能顯示所有文章
- 點擊單頁標題及 Readmore 可看到完整文章內容
- 具註冊以及登入功能（預設密碼為 Lidemy），並以 token 確認是否登入
- 登入後即可發布、編輯、刪除文章
- 分頁功能，以五筆為一頁

![image](https://i.imgur.com/reOC01F.gif)


---

### 專案結構
- /src
    - /components
        - App
        - AboutPage
        - AuthForm
        - AuthorSection
        - HandlePost
        - Header
        - HomePage
        - PaginatedSection
        - Post
        - SinglePage
        - Lidemy.png
    - /pages
        - AboutPage
        - EditPage
        - HomePage
        - SignInPage
        - SignUpPage
        - SinglePage
        - WritePage
    - index.js
    - index.css
    - contexts.js
    - WebAPI.js
    - utills.js: All Utility functions

#### 1. components 資料夾放置 styled-component 版面
#### 2. pages 資料夾建構 funciton component 以及觸發事件