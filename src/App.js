import {useReducer} from "react";
import {logDOM} from "@testing-library/react";

const App = () => {

    function reducer() {

    }

    function initValue() {
        return {cats: [], dogs: []}
    }

    const [state, dispatch] = useReducer(reducer, null, initValue);

    console.log(state)
  return (
      <div>
          <div className={'formBlock'}>
              <form>
                  Add Cat:
                  <input type="text" placeholder={'cat'}/>
                  <button onClick={() => console.log()}>Save</button>

                  Add Dog:
                  <input type="text" placeholder={'dog'}/>
                  <button>Save</button>
              </form>
          </div>
          <hr/>
          <div className={'infoBlock'}>
              <div className={'cat'}></div>
              <div className={'dog'}></div>
          </div>
      </div>
  );
};

export default App;
