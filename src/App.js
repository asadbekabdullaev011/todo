import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoFoot from "./components/TodoFoot/TodoFoot";
import "./index.css";
import {useEffect, useState} from "react";
import bg from './img/bg.jpg'

function App() {
    const [cart, setCart] = useState(localStorage.getItem('cart') == null ? [] : JSON.parse(localStorage.getItem('cart')));
    const [todoList, setTodoList] = useState(localStorage.getItem('todoList') === null ? [] : JSON.parse(localStorage.getItem('todoList')));
    const [status, setStatus] = useState('all');
    const completedTodo = (obj) => {
        setTodoList(todoList.map((item) => {
            if (item.id === obj.id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            } else {
                return item
            }
        }))
    };
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList]);
    return (
        <div className={'todo'}>
            <AddTodo status={status} todoList={todoList} setTodoList={setTodoList}/>
            <TodoList setTodoList={setTodoList} setCart={setCart} cart={cart} status={status} completedTodo={completedTodo} todoList={todoList}/>
            <TodoFoot setCart={setCart} cart={cart} setTodoList={setTodoList} staus={status} setStatus={setStatus} todoList={todoList}/>
            <img src={bg} className={'bg'}/>
        </div>
    );
}

export default App;
