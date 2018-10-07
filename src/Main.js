import React from 'react'
import Header from './Header'
import Task from "./Task";
import { NavLink } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: []
        }

        this.addTask = this.addTask.bind(this) 

    }

    addTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }



    render() {
        return (
            <div>
                <Header/>
                    <NavLink to="/create">Add Task</NavLink>
                    <NavLink to="/remove">Remove Task</NavLink>                
                <Task
                    addTask={this.addTask}
                
                />
            </div>
        )
    }
}

export default Main