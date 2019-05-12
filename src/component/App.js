import React, { Component } from 'react';
import StoryCard from './StoryCard'
import Header from './Header'
import Listing from './Listing'
import Story from './Story'
import NewStory from './NewStory'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <br/>
                    <br/>
                    <br/>
                    <Switch>
                        <Route exact path="/" component={Listing} />
                        <Route path="/story/:id" component={Story} />
                        <Route path="/newstory" component={NewStory} />
                    </Switch>
                </div>
            </Router>
        )
    }
}