import React from 'react'

export default class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // checking if prop named expense exists - to allow this form to be flexible and used elsewhere
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : ''
        }

        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.onNoteChange = this.onNoteChange.bind(this)
        this.onAmountChange = this.onAmountChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    
    onDescriptionChange(e) {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    onNoteChange(e) {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onAmountChange(e) {
        const amount = e.target.value;
        this.setState(() => ({ amount }))        
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount),
            note: this.state.note
        })
    }
    
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        className="text-input"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        className="text-input"
                        value={this.state.amount}    
                        onChange={this.onAmountChange}               
                    />
                    <textarea
                        className="text-area"
                        placeholder="Add a note for your task (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <div>
                        <button className="button">Add Task</button>
                    </div>
                </form>
        )
    }
}