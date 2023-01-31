import {MainLayout} from "./layouts";
import {Navigate, useRoutes} from "react-router-dom";
import {HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {requestLinks} from "./api";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RequireAuth} from "./hoc/RequireAuth";

const App = () => {
    let routes = [
        {path: '/',
         element: <MainLayout/>,
         children: [
             {element: <HomePage/>, path: '/'},
             {element: <RequireAuth/>, path: requestLinks.posts,
             children: [
                 {element: <PostsPage/>}
             ]},
             {element: <UsersPage/>, path: requestLinks.users},
             {element: <LoginPage/>, path: '/login'},
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
