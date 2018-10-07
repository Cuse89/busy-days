import React from 'react'
import Header from './Header';

class RemoveTask extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header/>
                <h2>Remove Task</h2>
            </div>
        )
    }
}


export default RemoveTask