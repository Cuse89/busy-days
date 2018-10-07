import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main'
import AddTask from './AddTask'
import RemoveTask from "./RemoveTask";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Main} exact={true} />
                <Route path="/create" component={AddTask}/>
                <Route path="/remove" component={RemoveTask}/>
            </Switch>
        </div>        
    </BrowserRouter>
)

export default AppRouter;