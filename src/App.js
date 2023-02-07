import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import {Posts} from "./components";

const App = () => {
  return (
      <div>
          <Header/>
          {/*<Users/>*/}
          <Posts/>
      </div>
  );
};

export {App};
