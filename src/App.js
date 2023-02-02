import {CommentsPage, HomePage, PostsPage} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {
    let routes = [
        {element: <MainLayout/>, path: '/',
        children: [
            {element: <HomePage/>, index: true},
            {element: <PostsPage/>, path: '/posts'},
            {element: <CommentsPage/>, path: '/comments'}
        ]}
    ];

  return (
      <div>

      </div>
  );
};

export default App;
