import React from 'react';

const TodoFoot = ({todoList, status, setStatus, setTodoList, cart, setCart}) => {
    return (
        <div className={'todofoot'}>
            <p className={'todofoot__left'}>{todoList.length} item</p>
            <div className={'todofoot__center'}>
                <button className={status === 'all' ? 'active' : ''} onClick={() => {
                    setStatus("all")
                }}>all
                </button>
                <button className={status === 'active' ? 'active' : ''} onClick={() => {
                    setStatus("active")
                }}>active
                </button>
                <button className={status === 'completed' ? 'active' : ''} onClick={() => {
                    setStatus("completed")
                }}>completed
                </button>
                <button className={status === 'cart' ? 'active' : ''} onClick={() => {
                    setStatus("cart")
                }}>Cart
                </button>
            </div>
            <button onClick={() => {
                let array = todoList.filter((item) => {
                    return item.isCompleted
                });
                setCart([...array, ...cart]);
                setTodoList(todoList.filter((item) => {
                    return !item.isCompleted
                }))
            }}>clear completed
            </button>
            {
                status === 'cart' ? <button className={''} onClick={() => {
                    setCart([])
                }}>clear cart</button> : ''
            }
        </div>
    );
};

export default TodoFoot;