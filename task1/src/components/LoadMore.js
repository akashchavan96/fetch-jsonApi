import React, { useEffect, useState } from "react";
import axios from 'axios';
const LoadMore = () => {
    const [allTodos, setAllTodos] = useState([]);
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const handleChange = (index) => {
        let _todos = [...todos];
        _todos[index].completed = !_todos[index].completed;
        setTodos(_todos)
    }
    const fetchData = async () => {
        let { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setAllTodos(data)
    }
    useEffect(() => {
        let _todos = allTodos.filter((todo, index) => index < 10 * page)
        setTodos(_todos)
    }, [allTodos, page])
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="todosApp">
            {
                todos.map((todo, index) => {
                    return (
                        <div>
                            <span className={todo.completed ? "line" : ''}>{todo.title}</span>
                            <input type={"checkbox"} checked={todo.completed} onChange={() => handleChange(index)} />
                        </div>
                    )
                })
            }
            <button onClick={() => setPage(page + 1)}>LoadMore</button>
        </div>
    )
}
export default LoadMore