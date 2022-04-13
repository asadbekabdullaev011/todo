import React, {useEffect, useState} from 'react';

const TodoCompleted = ({todoList}) => {
    const [completed, setCompleted] = useState([]);
    useEffect(() => {
        setCompleted(todoList.filter((item) => {
            return item.isCompleted
        }))
    }, []);
    return (
        <div className={'todolist'}>
            {
                todoList.length === 0 ? <h2 className={'comment'}>here will be your completed tasks</h2> :
                completed.map((item) => {
                    return <div key={item.id} className={'todolist__item'}>
                        <button className={item.isCompleted ? 'todolist__completed-btn completed' : 'todolist__completed-btn'} onClick={() => {
                        }}> </button>{item.name}</div>
                })
            }
        </div>
    );
};

export default TodoCompleted;