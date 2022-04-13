import React from 'react';
import TodoAll from "../TodoAll/TodoAll";
import TodoCompleted from "../TodoCompleted/TodoCompleted";
import TodoActive from "../TodoActive/TodoActive";
import Cart from "../Cart/Cart";

const TodoList = ({todoList, completedTodo, status, cart, setCart, setTodoList}) => {
    return (
        <>
            {
                status === 'all' ? <TodoAll setTodoList={setTodoList} cart={cart} setCart={setCart} todoList={todoList} completedTodo={completedTodo}/> :
                    status === 'completed' ? <TodoCompleted todoList={todoList}/> :
                        status === 'active' ?  <TodoActive todoList={todoList}/> :
                            <Cart cart={cart} setCart={setCart} todoList={todoList} setTodoList={setTodoList}/>
            }

        </>
    );
};

export default TodoList;