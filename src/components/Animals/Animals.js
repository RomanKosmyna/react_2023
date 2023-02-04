import {useReducer, useRef} from "react";
import {Cats} from "../Cats/Cats";
import {Dogs} from "../Dogs/Dogs";

const Animals = () => {
    const catValue = useRef(null);
    const dogValue = useRef(null);

    function reducer(state, action) {
        switch (action.type) {
            case 'add_cat':
                const [lastCat] = state.cats.slice(-1);
                const id = lastCat ? lastCat.id + 1 : 0;
                return {...state, cats: [...state.cats, {id, name: action.payload}]}
            case 'add_dog':
                const [lastDog] = state.dogs.slice(-1);
                const idDog = lastDog ? lastDog.id + 1 : 0;
                return {...state, dogs: [...state.dogs, {id: idDog, name: action.payload}]}
            case 'delete_cat':
                const index = state.cats.findIndex(cat => cat.id === action.payload);
                state.cats.splice(index, 1);
                return {...state}
            default:
                return {...state}
        }
    }

    function initValue() {
        return {cats: [], dogs: []}
    }

    const [state, dispatch] = useReducer(reducer, null, initValue);

    const createCat = () => {
        dispatch({type: 'add_cat', payload: catValue.current.value})
        catValue.current.value = ''
    }

    const createDog = () => {
        dispatch({type: 'add_dog', payload: dogValue.current.value})
        dogValue.current.value = ''
    }

    return (
        <div>
            <div>
                Add Cats:
                <input type="text" ref={catValue}/>
                <button onClick={createCat}>Save</button>
            </div>
            <div>
                Add Dogs:
                <input type="text" ref={dogValue}/>
                <button onClick={createDog}>Save</button>
            </div>
            <hr/>
            <div style={{display: "flex"}}>
                <Cats cats={state.cats} dispatch={dispatch}/>
                <Dogs dogs={state.dogs}/>
            </div>
        </div>
    );
};

export {Animals};