import {AnimalsPage, CommentsPage, HomePage, PostsPage} from "./pages";
import {MainLayout} from "./layouts";
import {useRoutes} from "react-router-dom";

const App = () => {
    let routes = [
        {element: <MainLayout/>, path: '/',
        children: [
            {element: <HomePage/>, index: true},
            {element: <PostsPage/>, path: 'posts'},
            {element: <CommentsPage/>, path: 'comments'},
            {element: <AnimalsPage/>, path: 'animals'}
        ]}
    ];

    let element = useRoutes(routes);

  return (
      <div>
          {element}
      </div>
  );
};

export default App;
