import {useReducer, useRef} from "react";

const App = () => {
    const cat = useRef(null);

    function reducer(state, action) {
        switch (action.type) {
            case 'cat':
                return {...state, cats: cat.current.value}
                // console.log(...state.cats)
        }
    }

    function initValue() {
        return {cats: [], dogs: []}
    }

    const [state, dispatch] = useReducer(reducer, null, initValue);
    console.log(state)
  return (
      <div>
          <input type="text" placeholder={'cat'} ref={cat}/>
          <button onClick={() => dispatch({type: 'cat'})}>Save</button>
      </div>
  )
};

export default App;