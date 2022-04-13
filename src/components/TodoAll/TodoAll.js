import React, {useState} from 'react';

const TodoAll = ({todoList, completedTodo, cart, setCart, setTodoList}) => {
    const [change, setChange] = useState('');
    const changeTodo = (obj, key, value) => {
        setTodoList(todoList.map((item) => {
            if (obj.id === item.id) {
                return {
                    ...item,
                    [key]: !value,
                }
            } else {
                return item
            }
        }))
    };
    return (
        <div className={'todolist'}>
            {
                todoList.length === 0 ? <h2 className={'comment'}>here will be your tasks</h2> :todoList.map((item) => {
                    if (!item.isCorrector) {
                        return <div
                            key={item.id} className={item.isImportant ? 'todolist__item todolist__item-important' : 'todolist__item'}>
                            <button className={item.isCompleted ? 'todolist__completed-btn completed' : 'todolist__completed-btn'} onClick={() => {
                                completedTodo(item)
                            }
                            }> </button>
                            <p>{item.name}</p>
                            <div className="todolist__item-right">
                                <button className={'todolist__btn'} onClick={() => {
                                    changeTodo(item, 'isCorrector', false);
                                    setChange(item.name)
                                }}><i className="fa-solid fa-square-pen"></i>
                                </button>
                                <button className={'todolist__btn'} onClick={() => {
                                    changeTodo(item, 'isImportant', item.isImportant);
                                }}><i className="fa-solid fa-star"></i>
                                </button>
                                <button className={'todolist__btn'} onClick={() => {
                                    setCart([item, ...cart]);
                                    setTodoList(todoList.filter((element) => {
                                        return element.id !== item.id
                                    }))
                                }}><i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    } else {
                        return <div key={item.id} className={'todolist__item'}>
                            <input value={change} type="text" onChange={(event) => {
                                setChange(event.target.value)
                            }}/>
                            <button onClick={() => {
                                changeTodo(item, 'isCorrector', false)
                            }}>cancel
                            </button>
                            <button disabled={change.length === 0 ? true : false} onClick={() => {
                                setTodoList(todoList.map((element) => {
                                    if (item.id === element.id) {
                                        return {
                                            ...element,
                                            name: change,
                                            isCorrector: false
                                        }
                                    } else {
                                        return element
                                    }
                                }))
                            }}>save
                            </button>
                        </div>
                    }
                })
            }

        </div>
    );
};

export default TodoAll;