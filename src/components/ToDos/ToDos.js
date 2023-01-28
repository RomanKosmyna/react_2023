import {useEffect, useState} from "react";
import {todosService} from "../../services";
import {ToDo} from "../ToDo/ToDo";

const ToDos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll()
            .then(({data}) => setTodos(data))
    }, []);

    return (
        <div>
            {todos.map(item => <ToDo key={item.id} todo={item}/>)}
        </div>
    );
};

export {ToDos};