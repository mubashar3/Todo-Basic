import React, { useState } from 'react'
import "./Notes.css"

const Notes = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);



    // useEffect(() => {
    //     const arr = localStorage.getItem('todos');
    //     setTodos(JSON.parse(arr)??[]);
    //     // console.log(arr);
    // },[])

    const todoInput = (e) => {
        setTodo(e.target.value);
    };

    const addTodo = () => {
        if (todo.length === 0) {
            return;
        } if (editIndex === -1) {
            setTodos((prev) => ([...prev, todo]));
        }
        else {
            setTodos((prev) => {
                prev[editIndex] = todo;
                return prev;
            })
            setEditIndex(-1);
        }
        setTodo('');
        console.log("Note added or save Successfully");
    };

    const deleteTodo = (text) => {
        if (text === '') {
            return;
        }
        const newTodos = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newTodos);
    };

    const editTodos = (todo, index) => {
        setTodo(todo);
        setEditIndex(index);
    };

    return (
        <div className='main-container'>
            <h1 className='main-text'>TODO NOTES</h1>
            <div className="notes">
                <input className='input-area' type='text' value={todo} placeholder='Enter Your Notes' onChange={todoInput} defaultChecked />
                <button className='btns' onClick={addTodo}>{editIndex === -1 ? 'Add Note' : 'Save Note'}</button>
            </div>
            {(todos.length) === 0 ? (<h1 className='second-text'>No Task Found</h1>) : (<ul className='lists'>
                {todos.map((todo, index) => (<div className='lists' key={index}><li className='list'>{todo}</li>
                    <div className='list-btns'>
                        <button className='btns' onClick={() => deleteTodo(todo)}>Remove</button><button onClick={() => editTodos(todo, index)} className='btns' >Edit</button>
                    </div>
                </div>))}
            </ul>)}
        </div>
    )
}

export default Notes
