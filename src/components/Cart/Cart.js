import React, {useEffect} from 'react';

const Cart = ({setCart, cart, todoList, setTodoList}) => {
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart))
    }, [cart]);
    return (
        <>
            <div className={'todolist'}>
                {
                    cart.length === 0 ? <h2 className={'comment'}>here will be your delete tasks</h2> :
                        cart.map((item) => {
                            return <div key={item.id} className={'todolist__item'}>
                                <button className={item.isCompleted ? 'todolist__completed-btn completed' : 'todolist__completed-btn'}>
                                </button>
                                <p>{item.name}</p>
                                <div className={'todolist__item-right'}>
                                    <button className={'cart__btn cart__btn-restore'} onClick={() => {
                                        setTodoList([item, ...todoList]);
                                        setCart(cart.filter((element) => {
                                            return element.id !== item.id
                                        }))
                                    }}><i className="fa-solid fa-trash-arrow-up"></i>
                                    </button>
                                    <button className={'cart__btn cart__btn-delete'} onClick={() => {
                                        setCart(cart.filter((element) => {
                                            return element.id !== item.id
                                        }))
                                    }}><i className="fa-solid fa-ban"></i>
                                    </button>
                                </div>
                            </div>
                        })
                }
            </div>
        </>
    );
};

export default Cart;