import React from 'react';
import ToDoList from './ToDoList';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <ToDoList />
            </div>
        </ChakraProvider>
    )
}

export default App;