import React from 'react';
import './styles.css';
interface ITodo {
    id: number;
    task: string;
    done: boolean;
}
const InitialTodos: ITodo[] = [
    { id: 1, task: "Entregar desafio React", done: false},
    { id: 2, task: "Estudar JavaScript", done: false},
    { id: 3, task: "Estudar ReactDOM", done: false},
];

function TodoList() {
    const todosState = React.useState(InitialTodos);
    const todos = todosState[0];
    const setTodos = todosState[1];

    function handleClick(todo: ITodo){

        {/*  let newTodos2 = [];
        for (let index = 0; index < todos.length; index++) {
            const element = todos[index];

            if (todo.id === element.id){
                element.done = !element.done;
            }
            newTodos2.push(element);
        }
        AMBOS OS CÓDIGOS FAZEM A MESMA COISA , TANTO O DE CIMA QUANTO O DE BAIXO
        Porém o de baixo é mais enxuto
    */}

        const newTodos = todos.map((currentTodo) =>{
            if (currentTodo.id === todo.id){
                currentTodo.done = !currentTodo.done;
            }

            return currentTodo;
        })

        setTodos(newTodos);
    }

    console.log(todos);

    return (
        <h3>
            {todos.map((todo) => {
        return (
            <div 
            className='TodoList-todo'
            // se o todo.done for igual a true eu vou colocar line-trough, senão undefined
            style={{ textDecoration: todo.done ? 'line-through' : undefined }}
            key={todo.id}
            onClick={() => handleClick(todo)}
        >
            {todo.task}
            </div>
        )
        })}
        </h3>
    )
}

export default TodoList;