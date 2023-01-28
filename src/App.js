import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components";
import {HomePage, ToDosPage, AlbumsPage, CommentsPage, PostDetailsPage, NotFoundPage} from "./pages";

const App = () => {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path={'/'} element={<HomePage/>}/>
              <Route path={'todos'} element={<ToDosPage/>}/>
              <Route path={'albums'} element={<AlbumsPage/>}/>
              <Route path={'comments'} element={<CommentsPage/>}/>
              <Route path={'/post/:id'} element={<PostDetailsPage/>}/>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Routes>
      </BrowserRouter>
  );
};

export default App;
