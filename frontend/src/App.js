/* Main Components structure*/


import React from 'react'
import './styles/App.css'
import Header from  './components/Header'
import TaskList from './components/TaskList'

function App(){
    return (<div className='App'>
                <Header/>
                <TaskList/>
            </div>)
}

export default App;
