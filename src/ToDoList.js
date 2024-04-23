import React from 'react';
import { useState } from 'react';
import ToDoItem from './ToDoItem';
import { Container, Button, Heading, Input, ButtonGroup } from '@chakra-ui/react'

function ToDoList() {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Wake-up at 7',
            completed: false
        },
        {
            id: 2,
            text: 'Take a shower',
            completed: false
        },
        {
            id: 3,
            text: 'Eat healthy breakfast',
            completed: false
        },
        {
            id: 4,
            text: 'Go to gym',
            completed: true
        },
        {
            id: 5,
            text: 'Walk the dog',
            completed: false
        }
    ])

    function handleInputChange(event) {
        setNewTaskTitle(event.target.value)
    }

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            // id = id + 1
            text: text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    
    function taskChecked(id, checked) {
        let newTaskList = tasks.map(task => {
            if (task.id === id) {
                task.completed = checked
            }
            return task
        })
        setTasks(newTaskList)
    }

    return (
        <Container maxW='container.sm' centerContent>
            <div>
                <Heading mb={3} textAlign="center">To Do List</Heading>
                {tasks.map(task => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        taskChecked={taskChecked}
                    />))}
                <Input
                    size='md'
                    variant='filled'
                    type="text"
                    focusBorderColor='blue.600'
                    placeholder="Enter task here"
                    onChange={handleInputChange}
                    value={newTaskTitle}
                />
                <ButtonGroup placement='center' display={'flex'} flexWrap={'wrap'}>
                <Button className="add-button" colorScheme='linkedin' variant='outline' size='md' border='3px'
                    borderColor='green' margin={'8px'} onClick={() => addTask(newTaskTitle)}>Add task
                </Button>
                <Button className="delete-button" colorScheme='linkedin' variant='outline' size='md' border='3px'
                    borderColor='green' margin={'8px'} onClick={() => deleteTask(tasks[0].id)}>Delete task
                </Button>
                </ButtonGroup>
            </div>
        </Container >
    );
}

export default ToDoList;

