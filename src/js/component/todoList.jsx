import React, { useState } from "react"

const TodoList = () => {
    const [todos, setTodos] = useState([
        { tarea: 'Hacer la cama', id: 1 },
        { tarea: 'Fregar los platos', id: 2 },
        { tarea: 'Comprar verduras', id: 3 },
        { tarea: 'Entregar trabajo', id: 4 }
    ])

    const [input, setInput] = useState('')


    return (
        <div className="text-center">
            <input
                type="text"
                placeholder="¿Qué necesitas hacer?"
                value={input}
                onChange={
                    (e) => setInput(e.target.value)
                }
                onKeyUp={
                    (e) => {
                        if (e.key === 'Enter' && input.trim() != '') {
                            setTodos([...todos, { tarea: input, id: todos.length + 1 }])
                            setInput('')
                        }
                    }
                }
            />

            <ul className="todoList">
                {todos.map((todo) => {
                    return (<li key={todo.id}>
                        {todo.tarea}<span onClick={() => {
                            const borrar = todos.filter(t => t.id != todo.id)
                            setTodos(borrar)

                        }}> X</span>
                    </li>)
                })}

            </ul>
        </div>
    )
};
export default TodoList;
