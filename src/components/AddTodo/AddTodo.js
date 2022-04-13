import React, {useState} from 'react';

const AddTodo = ({setTodoList, todoList, status}) => {
    const [todo, setTodo] = useState('');
    const addTodoFunc = () =>{
        if (todo.length !== 0 && status === 'all') {
            setTodoList([{
                name: todo,
                id: Math.random(),
                isDeleted: false,
                isCompleted: false,
                isImportant: false,
                isCorrector: false
            }, ...todoList]);
            setTodo('');
            localStorage.setItem('todoList',JSON.stringify(todoList))
        }
    };
    return (
        <div className={'addtodo'}>
            <button
                disabled={todo.length === 0 || status !== 'all' ? true : false}
                onClick={() => {
                    addTodoFunc()
            }}>+</button>
            <label>
                <input onKeyDown={(event)=> event.code === 'Enter' ? addTodoFunc() : ''
                } disabled={status === 'all' ? false : true} value={status === 'all' ? todo : ''} placeholder={status === 'all' ? 'Create a new todo...' : 'you can add todo in all...'} type="text" onChange={(event) => {
                    setTodo(event.target.value)
                }}/>
            </label>
        </div>
    );
};

export default AddTodo;