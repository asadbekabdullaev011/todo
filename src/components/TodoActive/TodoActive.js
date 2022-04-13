import React, {useEffect, useState} from 'react';

const TodoActive = ({todoList}) => {
    const [active, setActive] = useState([]);
    useEffect(() => {
        setActive(todoList.filter((item) => {
            return !item.isCompleted
        }))
    }, []);
    return (
        <div className={'todolist'}>
            {
                active.length === 0 ? <h2 className={'comment'}>here will be your active tasks</h2> :
                    active.map((item) => {
                        return <div key={item.id} className={'todolist__item'}>
                            <button className={item.isCompleted ? 'todolist__completed-btn completed' : 'todolist__completed-btn'} onClick={() => {
                            }}> </button>
                            {item.name}</div>
                    })
            }
        </div>
    );
};

export default TodoActive;