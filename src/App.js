import {MainLayout} from "./layouts";
import {useRoutes} from "react-router-dom";
import {HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {requestLinks} from "./api";

const App = () => {
    let routes = [
        {path: '/',
         element: <MainLayout/>,
         children: [
             {element: <HomePage/>, path: '/'},
             {element: <PostsPage/>, path: requestLinks.posts},
             {element: <UsersPage/>, path: requestLinks.users},
             {element: <NotFoundPage/>, path: '*'}
            ]
        }
    ];

    let element = useRoutes(routes);

  return (
      <div>
          {element}
      </div>
  );
};

export default App;
