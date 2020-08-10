import React from "react";
import { ITodo } from "./interfaces";

type ListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

export const List: React.FC<ListProps> = ({ todos, onToggle, onRemove }) => {
    if (todos.length === 0) {
        return <p className="center">No todos for now</p>
    }

    const removeHandler = (event: React.MouseEvent, id:number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" 
                            defaultChecked={todo.completed} onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i 
                            className="material-icons red-text" onClick={event => removeHandler(event, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul >
    )
}

export default List