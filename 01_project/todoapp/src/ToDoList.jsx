import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import { Box, Typography } from '@mui/material';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data) return [];
    return data;
}

export default function ToDoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (text) => {
        setTodos(prevTodo => {
            return [...prevTodo, { text: text, id: crypto.randomUUID(), completed: false }]
        })
    }

    const toggleTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        })
    }

    const removeTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.filter(t => t.id !== id)
        })
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <ToDoItem
                        todo={todo}
                        key={todo.id}
                        remove={() => removeTodo(todo.id)}
                        toggle={() => toggleTodo(todo.id)} />
                ))}
                <ToDoForm addTodo={addTodo} />
            </List>
        </Box>
    )
}