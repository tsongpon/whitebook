import React from 'react';
import Story from './Story';
import {
    Route,
    Link,
    Switch,
} from 'react-router-dom'

let StoryCard = props => (
    <div> 
        <div className="card">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <footer className="blockquote-footer">by <cite title="Source Title">{props.author}</cite></footer>
                <Link className="btn btn-primary" to={"/story/" + props.id}>อ่านเรื่องเต็ม</Link>
            </div>
        </div>
        <br />
        <Switch>
            <Route path="/story/:id" component={Story} />
        </Switch>
    </div>
)

export default StoryCard