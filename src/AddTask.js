import React from 'react'
import Header from './Header';
import TaskForm from './TaskForm'

class AddTask extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.onSubmit = this.onSubmit.bind(this) 
    }

    onSubmit(task) {
        // dispatch redux action                   
    }

    render() {
        return (
            <div>
                <Header/>
                    <TaskForm
                        onSubmit={this.onSubmit}                    
                    />
            </div>
        )
    }
}

export default AddTask